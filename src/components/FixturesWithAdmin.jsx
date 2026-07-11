import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { getMatches, updateMatchScore } from '../lib/supabaseClient'
import Loader from './Loader'
import '../styles/FixturesWithAdmin.css'

export default function FixturesWithAdmin() {
  const [searchParams] = useSearchParams()
  const [selectedDay, setSelectedDay] = useState('saturday')
  const [matches, setMatches] = useState([])
  const [scoreModal, setScoreModal] = useState(null)
  const [scores, setScores] = useState({ set1_a: '', set1_b: '', set2_a: '', set2_b: '', set3_a: '', set3_b: '' })
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedGroup, setSelectedGroup] = useState('all')
  const [submitting, setSubmitting] = useState(false)

  const isAdmin = searchParams.get('admin') === 'sagar'

  const groups = ['Kids G1', 'Kids G2', 'Women G1', 'Women G2', 'Men G1', 'Men G2', 'Seniors', 'Ceremony']

  useEffect(() => {
    fetchMatches()
  }, [])

  const fetchMatches = async () => {
    setLoading(true)
    const data = await getMatches()
    setMatches(data)
    setLoading(false)
  }

  const openScoreModal = (match) => {
    setScoreModal(match)
    // Pre-populate with existing scores if they exist
    setScores({
      set1_a: match.set1_team_a || '',
      set1_b: match.set1_team_b || '',
      set2_a: match.set2_team_a || '',
      set2_b: match.set2_team_b || '',
      set3_a: match.set3_team_a || '',
      set3_b: match.set3_team_b || ''
    })
  }

  const handleScoreChange = (e) => {
    const { name, value } = e.target
    setScores(prev => ({ ...prev, [name]: value === '' ? '' : parseInt(value) }))
  }

  const handleSubmitScore = async (e) => {
    e.preventDefault()
    setSubmitting(true)

    // Determine winner by checking all 3 sets
    let teamAWins = 0, teamBWins = 0
    if (scores.set1_a > scores.set1_b) teamAWins++
    if (scores.set1_b > scores.set1_a) teamBWins++
    if (scores.set2_a > scores.set2_b) teamAWins++
    if (scores.set2_b > scores.set2_a) teamBWins++
    if (scores.set3_a > scores.set3_b) teamAWins++
    if (scores.set3_b > scores.set3_a) teamBWins++

    const winner = teamAWins > teamBWins ? 'Team A' : teamBWins > teamAWins ? 'Team B' : null

    try {
      await updateMatchScore(scoreModal.id, {
        set1_team_a: scores.set1_a || null,
        set1_team_b: scores.set1_b || null,
        set2_team_a: scores.set2_a || null,
        set2_team_b: scores.set2_b || null,
        set3_team_a: scores.set3_a || null,
        set3_team_b: scores.set3_b || null,
        winner
      })

      setScoreModal(null)
      fetchMatches()
    } catch (error) {
      alert('Error: ' + error.message)
    } finally {
      setSubmitting(false)
    }
  }

  const getFilteredMatches = () => {
    let filtered
    if (selectedDay === 'saturday') {
      filtered = matches.filter(m => m.match_number?.startsWith('SAT'))
    } else {
      filtered = matches.filter(m => m.match_number?.startsWith('SUN'))
    }

    // Apply group filter if not "all"
    if (selectedGroup !== 'all') {
      filtered = filtered.filter(m => m.group_name === selectedGroup)
    }

    // Apply search filter if query exists
    if (searchQuery.trim()) {
      filtered = filtered.filter(m =>
        m.team_a?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.team_b?.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    return filtered.sort((a, b) => {
      const numA = parseInt(a.match_number?.split('-')[1] || 0)
      const numB = parseInt(b.match_number?.split('-')[1] || 0)
      return numA - numB
    })
  }

  const filteredMatches = getFilteredMatches()

  const getShortTeamName = (teamName) => {
    if (!teamName) return ''
    const parts = teamName.split(' + ')
    if (parts.length === 2) {
      return `${parts[0].charAt(0)} + ${parts[1].charAt(0)}`
    }
    return teamName
  }

  const getStartTime = (timeRange, index, matches) => {
    if (!timeRange) return ''
    const time = timeRange.split('-')[0]
    const [hours, minutes] = time.split(':')
    const hour = parseInt(hours)

    let ampm = 'PM'
    let displayHour = hour

    if (hour >= 7 && hour <= 11) {
      let prevHour = null
      if (index > 0 && matches[index - 1]) {
        const prevTime = matches[index - 1].match_time?.split('-')[0]
        if (prevTime) {
          prevHour = parseInt(prevTime.split(':')[0])
        }
      }

      // If previous time was afternoon/evening (>= 6), current 7-11 is evening PM
      // Otherwise, 7-11 is morning AM
      if (prevHour !== null && prevHour >= 6) {
        ampm = 'PM'
      } else {
        ampm = 'AM'
      }
    }

    if (hour >= 12) {
      displayHour = hour === 12 ? 12 : hour - 12
    }

    return `${displayHour}:${minutes} ${ampm}`
  }

  return (
    <section id="fixtures" className="fixtures">
      <div className="container">
        <h2>🗓️ Match Schedule {isAdmin && '(Admin Mode)'}</h2>

        <div className="day-selector">
          <button
            className={`day-btn ${selectedDay === 'saturday' ? 'active' : ''}`}
            onClick={() => setSelectedDay('saturday')}
          >
            Saturday, July 11
          </button>
          <button
            className={`day-btn ${selectedDay === 'sunday' ? 'active' : ''}`}
            onClick={() => setSelectedDay('sunday')}
          >
            Sunday, July 12
          </button>
        </div>

        <div className="search-box">
          <input
            type="text"
            placeholder="Find your matches"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <button className="search-btn">Search</button>
        </div>

        <div className="group-filter">
          <button
            className={`filter-btn ${selectedGroup === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedGroup('all')}
          >
            All Groups
          </button>
          {groups.map(group => (
            <button
              key={group}
              className={`filter-btn ${selectedGroup === group ? 'active' : ''}`}
              onClick={() => setSelectedGroup(group)}
            >
              {group}
            </button>
          ))}
        </div>

        {loading ? (
          <Loader message="🏸 Fetching match schedule for you..." />
        ) : (
        <div className="fixtures-table">
          <table>
            <thead>
              <tr>
                <th style={{ width: '12%' }}>Time</th>
                <th style={{ width: '36%' }}>Team A</th>
                <th style={{ width: '36%' }}>Team B</th>
                {isAdmin && <th style={{ width: '16%' }}>Score</th>}
              </tr>
            </thead>
            <tbody>
              {filteredMatches.map((fixture, index) => (
                <tr
                  key={fixture.id}
                  className={fixture.group_name === 'Ceremony' ? 'ceremony' : ''}
                  onClick={() => isAdmin && fixture.group_name !== 'Ceremony' && openScoreModal(fixture)}
                  style={isAdmin && fixture.group_name !== 'Ceremony' ? { cursor: 'pointer' } : {}}
                >
                  <td className="time" title={fixture.match_time}>{getStartTime(fixture.match_time, index, filteredMatches)}</td>
                  <td className="team">{fixture.team_a}</td>
                  <td className="team">{fixture.team_b}</td>
                  {isAdmin && (
                    <td className="action">
                      {fixture.group_name !== 'Ceremony' && (
                        <span style={{ fontSize: '1.2rem' }}>📝</span>
                      )}
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        )}
      </div>

      {/* Score Modal */}
      {scoreModal && (
        <div className="modal-overlay" onClick={() => setScoreModal(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{scoreModal.match_number}: {scoreModal.group_name}</h3>
              <button className="close-btn" onClick={() => setScoreModal(null)}>✕</button>
            </div>

            <div className="match-info">
              <div><strong>{scoreModal.team_a}</strong></div>
              <div className="vs">vs</div>
              <div><strong>{scoreModal.team_b}</strong></div>
            </div>

            <form onSubmit={handleSubmitScore}>
              <div className="sets">
                {[1, 2, 3].map(set => (
                  <div key={set} className="set">
                    <h4>Set {set}</h4>
                    <div className="score-inputs">
                      <input
                        type="number"
                        name={`set${set}_a`}
                        value={scores[`set${set}_a`]}
                        onChange={handleScoreChange}
                        placeholder="0"
                        min="0"
                        max="30"
                      />
                      <span>-</span>
                      <input
                        type="number"
                        name={`set${set}_b`}
                        value={scores[`set${set}_b`]}
                        onChange={handleScoreChange}
                        placeholder="0"
                        min="0"
                        max="30"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <button type="submit" className="submit-btn" disabled={submitting}>
                {submitting ? '⏳ Saving...' : '✅ Save Score'}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  )
}
