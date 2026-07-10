import { useState, useEffect } from 'react'
import { getStandings } from '../lib/supabaseClient'
import '../styles/Standings.css'

export default function Standings() {
  const [selectedGroup, setSelectedGroup] = useState('Kids G1')
  const [standings, setStandings] = useState([])
  const [loading, setLoading] = useState(false)

  const groups = ['Kids G1', 'Kids G2', 'Women G1', 'Women G2', 'Men G1', 'Men G2', 'Seniors']

  useEffect(() => {
    fetchStandings()
  }, [selectedGroup])

  const fetchStandings = async () => {
    setLoading(true)
    const data = await getStandings(selectedGroup)
    setStandings(data)
    setLoading(false)
  }

  return (
    <section className="standings">
      <div className="container">
        <h2>🏆 Live Standings</h2>

        <div className="group-selector">
          {groups.map(group => (
            <button
              key={group}
              className={`group-btn ${selectedGroup === group ? 'active' : ''}`}
              onClick={() => setSelectedGroup(group)}
            >
              {group}
            </button>
          ))}
        </div>

        <div className="standings-container">
          {loading ? (
            <div className="loading">Loading standings...</div>
          ) : standings.length === 0 ? (
            <div className="no-data">
              <p>📊 Scores will be updated as soon as matches are completed</p>
              <p className="hint">Check back during the tournament</p>
            </div>
          ) : (
            <table className="standings-table">
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Player/Team</th>
                  <th>Wins</th>
                  <th>Matches</th>
                  <th>Points</th>
                </tr>
              </thead>
              <tbody>
                {standings.map((row, idx) => (
                  <tr key={row.id} className={`rank-${idx + 1}`}>
                    <td className="rank">#{idx + 1}</td>
                    <td className="player">{row.player_name}</td>
                    <td className="wins">{row.wins || 0}</td>
                    <td className="matches">{row.matches_played || 0}</td>
                    <td className="points">{row.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        <div className="info-box">
          <p>📝 Live updates: Scores are entered as matches complete</p>
          <p>🏸 Tournament: July 11-12, 2026</p>
        </div>
      </div>
    </section>
  )
}
