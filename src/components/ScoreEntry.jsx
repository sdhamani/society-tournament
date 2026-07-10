import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { getMatches, getMatchScore, updateMatchScore, updateStandings } from '../lib/supabaseClient'
import '../styles/ScoreEntry.css'

export default function ScoreEntry() {
  const [searchParams] = useSearchParams()
  const [matches, setMatches] = useState([])
  const [selectedMatch, setSelectedMatch] = useState(null)
  const [scores, setScores] = useState({
    set1_team_a: '',
    set1_team_b: '',
    set2_team_a: '',
    set2_team_b: '',
    set3_team_a: '',
    set3_team_b: ''
  })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  // Check for admin key in URL
  const adminKey = searchParams.get('admin')
  const isAuthorized = adminKey === 'tournament2026'

  useEffect(() => {
    if (isAuthorized) {
      fetchMatches()
    }
  }, [isAuthorized])

  const fetchMatches = async () => {
    const data = await getMatches()
    setMatches(data)
  }

  const handleMatchSelect = async (match) => {
    setSelectedMatch(match)
    const existingScore = await getMatchScore(match.id)
    if (existingScore) {
      setScores({
        set1_team_a: existingScore.set1_team_a || '',
        set1_team_b: existingScore.set1_team_b || '',
        set2_team_a: existingScore.set2_team_a || '',
        set2_team_b: existingScore.set2_team_b || '',
        set3_team_a: existingScore.set3_team_a || '',
        set3_team_b: existingScore.set3_team_b || ''
      })
    } else {
      setScores({
        set1_team_a: '',
        set1_team_b: '',
        set2_team_a: '',
        set2_team_b: '',
        set3_team_a: '',
        set3_team_b: ''
      })
    }
  }

  const handleScoreChange = (e) => {
    const { name, value } = e.target
    setScores(prev => ({
      ...prev,
      [name]: value === '' ? '' : parseInt(value)
    }))
  }

  const determineWinner = () => {
    const s1a = parseInt(scores.set1_team_a) || 0
    const s1b = parseInt(scores.set1_team_b) || 0
    const s2a = parseInt(scores.set2_team_a) || 0
    const s2b = parseInt(scores.set2_team_b) || 0

    let teamAWins = 0
    let teamBWins = 0

    if (s1a > s1b) teamAWins++
    if (s1b > s1a) teamBWins++
    if (s2a > s2b) teamAWins++
    if (s2b > s2a) teamBWins++

    if (teamAWins > teamBWins) return 'Team A'
    if (teamBWins > teamAWins) return 'Team B'
    return null
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!selectedMatch) {
      setMessage('Please select a match')
      return
    }

    setLoading(true)
    try {
      const winner = determineWinner()

      // Update score
      await updateMatchScore(selectedMatch.id, {
        ...scores,
        winner: winner || null
      })

      // Update standings if match has winner
      if (winner) {
        const winnerTeam = winner === 'Team A' ? selectedMatch.team_a : selectedMatch.team_b
        await updateStandings(
          selectedMatch.group_name,
          winnerTeam,
          2,
          1,
          1
        )
      }

      setMessage('✅ Score updated successfully!')
      setTimeout(() => setMessage(''), 3000)
      setSelectedMatch(null)
      setScores({
        set1_team_a: '',
        set1_team_b: '',
        set2_team_a: '',
        set2_team_b: '',
        set3_team_a: '',
        set3_team_b: ''
      })
    } catch (error) {
      setMessage('❌ Error updating score: ' + error.message)
    } finally {
      setLoading(false)
    }
  }

  if (!isAuthorized) {
    return (
      <div className="auth-error">
        <div className="error-card">
          <h2>🔒 Access Denied</h2>
          <p>You don't have permission to enter scores.</p>
          <p className="hint">Add <code>?admin=tournament2026</code> to the URL</p>
        </div>
      </div>
    )
  }

  return (
    <section className="score-entry">
      <div className="container">
        <h2>📊 Enter Match Scores</h2>

        <div className="score-layout">
          {/* Match List */}
          <div className="match-list">
            <h3>Select Match</h3>
            <div className="matches">
              {matches.map(match => (
                <button
                  key={match.id}
                  className={`match-btn ${selectedMatch?.id === match.id ? 'active' : ''}`}
                  onClick={() => handleMatchSelect(match)}
                >
                  <div className="match-time">{match.match_time}</div>
                  <div className="match-group">{match.group_name}</div>
                  <div className="match-teams">
                    <small>{match.team_a.substring(0, 20)}</small>
                    <small>vs</small>
                    <small>{match.team_b.substring(0, 20)}</small>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Score Entry Form */}
          <div className="score-form-container">
            {selectedMatch ? (
              <form onSubmit={handleSubmit} className="score-form">
                <div className="match-header">
                  <h3>{selectedMatch.group_name}</h3>
                  <p className="teams">
                    <strong>{selectedMatch.team_a}</strong> vs <strong>{selectedMatch.team_b}</strong>
                  </p>
                  <p className="time">{selectedMatch.match_time}</p>
                </div>

                {/* Set 1 */}
                <div className="set-section">
                  <h4>Set 1</h4>
                  <div className="score-inputs">
                    <div className="input-group">
                      <label>Team A</label>
                      <input
                        type="number"
                        name="set1_team_a"
                        value={scores.set1_team_a}
                        onChange={handleScoreChange}
                        min="0"
                        max="30"
                        placeholder="0"
                      />
                    </div>
                    <div className="vs">vs</div>
                    <div className="input-group">
                      <label>Team B</label>
                      <input
                        type="number"
                        name="set1_team_b"
                        value={scores.set1_team_b}
                        onChange={handleScoreChange}
                        min="0"
                        max="30"
                        placeholder="0"
                      />
                    </div>
                  </div>
                </div>

                {/* Set 2 */}
                <div className="set-section">
                  <h4>Set 2</h4>
                  <div className="score-inputs">
                    <div className="input-group">
                      <label>Team A</label>
                      <input
                        type="number"
                        name="set2_team_a"
                        value={scores.set2_team_a}
                        onChange={handleScoreChange}
                        min="0"
                        max="30"
                        placeholder="0"
                      />
                    </div>
                    <div className="vs">vs</div>
                    <div className="input-group">
                      <label>Team B</label>
                      <input
                        type="number"
                        name="set2_team_b"
                        value={scores.set2_team_b}
                        onChange={handleScoreChange}
                        min="0"
                        max="30"
                        placeholder="0"
                      />
                    </div>
                  </div>
                </div>

                {/* Set 3 (Optional) */}
                <div className="set-section">
                  <h4>Set 3 (Optional)</h4>
                  <div className="score-inputs">
                    <div className="input-group">
                      <label>Team A</label>
                      <input
                        type="number"
                        name="set3_team_a"
                        value={scores.set3_team_a}
                        onChange={handleScoreChange}
                        min="0"
                        max="30"
                        placeholder="0"
                      />
                    </div>
                    <div className="vs">vs</div>
                    <div className="input-group">
                      <label>Team B</label>
                      <input
                        type="number"
                        name="set3_team_b"
                        value={scores.set3_team_b}
                        onChange={handleScoreChange}
                        min="0"
                        max="30"
                        placeholder="0"
                      />
                    </div>
                  </div>
                </div>

                {message && <div className="message">{message}</div>}

                <button type="submit" className="submit-btn" disabled={loading}>
                  {loading ? 'Updating...' : '✅ Submit Score'}
                </button>
              </form>
            ) : (
              <div className="no-match">
                <p>Select a match to enter score</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
