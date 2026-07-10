import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { getMatches, updateMatchScore, updateStandings } from '../lib/supabaseClient'
import '../styles/FixturesWithAdmin.css'

export default function FixturesWithAdmin() {
  const [searchParams] = useSearchParams()
  const [selectedDay, setSelectedDay] = useState('saturday')
  const [matches, setMatches] = useState([])
  const [scoreModal, setScoreModal] = useState(null)
  const [scores, setScores] = useState({ set1_a: '', set1_b: '', set2_a: '', set2_b: '', set3_a: '', set3_b: '' })
  const [loading, setLoading] = useState(false)

  const isAdmin = searchParams.get('admin') === 'sagar'

  useEffect(() => {
    fetchMatches()
  }, [])

  const fetchMatches = async () => {
    const data = await getMatches()
    setMatches(data)
  }

  const openScoreModal = (match) => {
    setScoreModal(match)
    setScores({ set1_a: '', set1_b: '', set2_a: '', set2_b: '', set3_a: '', set3_b: '' })
  }

  const handleScoreChange = (e) => {
    const { name, value } = e.target
    setScores(prev => ({ ...prev, [name]: value === '' ? '' : parseInt(value) }))
  }

  const handleSubmitScore = async (e) => {
    e.preventDefault()
    setLoading(true)

    // Determine winner
    let teamAWins = 0, teamBWins = 0
    if (scores.set1_a > scores.set1_b) teamAWins++
    if (scores.set1_b > scores.set1_a) teamBWins++
    if (scores.set2_a > scores.set2_b) teamAWins++
    if (scores.set2_b > scores.set2_a) teamBWins++

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

      if (winner) {
        const winnerTeam = winner === 'Team A' ? scoreModal.team_a : scoreModal.team_b
        // Split team name and update standings for each player
        const players = winnerTeam.split(' + ').map(p => p.trim())
        for (const player of players) {
          await updateStandings(scoreModal.group_name, player, 2, 1, 1)
        }
      }

      setScoreModal(null)
      fetchMatches()
    } catch (error) {
      alert('Error: ' + error.message)
    } finally {
      setLoading(false)
    }
  }

  const getFilteredMatches = () => {
    let filtered
    if (selectedDay === 'saturday') {
      filtered = matches.filter(m => m.match_number?.startsWith('SAT'))
    } else {
      filtered = matches.filter(m => m.match_number?.startsWith('SUN'))
    }
    return filtered.sort((a, b) => {
      const numA = parseInt(a.match_number?.split('-')[1] || 0)
      const numB = parseInt(b.match_number?.split('-')[1] || 0)
      return numA - numB
    })
  }

  const filteredMatches = getFilteredMatches()

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

        <div className="fixtures-table">
          <table>
            <thead>
              <tr>
                <th style={{ width: '15%' }}>Time</th>
                <th style={{ width: '15%' }}>Group</th>
                <th style={{ width: '28%' }}>Team A</th>
                <th style={{ width: '28%' }}>Team B</th>
                {isAdmin && <th style={{ width: '14%' }}>Action</th>}
              </tr>
            </thead>
            <tbody>
              {filteredMatches.map((fixture) => (
                <tr key={fixture.id} className={fixture.group_name === 'Ceremony' ? 'ceremony' : ''}>
                  <td className="time">{fixture.match_time}</td>
                  <td className="group">{fixture.group_name}</td>
                  <td className="team">{fixture.team_a}</td>
                  <td className="team">{fixture.team_b}</td>
                  {isAdmin && (
                    <td className="action">
                      {fixture.group_name !== 'Ceremony' && (
                        <button
                          className="score-btn"
                          onClick={() => openScoreModal(fixture)}
                        >
                          Score
                        </button>
                      )}
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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

              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? 'Saving...' : '✅ Save Score'}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  )
}
