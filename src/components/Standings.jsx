import { useState, useEffect, useMemo } from 'react'
import { supabase } from '../lib/supabaseClient'
import Loader from './Loader'
import '../styles/Standings.css'

export default function Standings() {
  const [selectedGroup, setSelectedGroup] = useState('Kids G1')
  const [allStandings, setAllStandings] = useState({})
  const [loading, setLoading] = useState(false)

  const groups = ['Kids G1', 'Kids G2', 'Women G1', 'Women G2', 'Men G1', 'Men G2', 'Seniors']

  // Fetch all data once on component mount
  useEffect(() => {
    fetchAllStandings()
  }, [])

  const fetchAllStandings = async () => {
    setLoading(true)
    try {
      // Fetch all matches with scores once
      const { data: matches } = await supabase
        .from('matches')
        .select(`
          *,
          scores (
            set1_team_a,
            set1_team_b,
            set2_team_a,
            set2_team_b,
            set3_team_a,
            set3_team_b,
            winner
          )
        `)

      // Calculate standings for all groups
      const standingsByGroup = {}

      groups.forEach(group => {
        const standingsMap = {}

        matches
          .filter(m => m.group_name === group)
          .forEach(match => {
            const score = match.scores?.[0]
            if (!score) return

            const teamAPlayers = match.team_a.split(' + ').map(p => p.trim())
            const teamBPlayers = match.team_b.split(' + ').map(p => p.trim())
            const allPlayers = [...teamAPlayers, ...teamBPlayers]

            allPlayers.forEach(player => {
              if (!standingsMap[player]) {
                standingsMap[player] = { player_name: player, points: 0, wins: 0, matches_played: 0 }
              }
              standingsMap[player].matches_played += 1
            })

            if (score.winner) {
              const winnerTeam = score.winner === 'Team A' ? match.team_a : match.team_b
              const winners = winnerTeam.split(' + ').map(p => p.trim())
              winners.forEach(player => {
                standingsMap[player].points += 2
                standingsMap[player].wins += 1
              })
            }
          })

        const standings = Object.values(standingsMap)
        standings.sort((a, b) => (b.points || 0) - (a.points || 0))
        standingsByGroup[group] = standings
      })

      setAllStandings(standingsByGroup)
    } catch (error) {
      console.error('Error fetching standings:', error)
    } finally {
      setLoading(false)
    }
  }

  // Get current group standings
  const standings = useMemo(() => {
    return allStandings[selectedGroup] || []
  }, [selectedGroup, allStandings])

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
            <Loader message="🏸 Fetching the standings for you..." />
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
                  <th>Player</th>
                  <th>Points</th>
                </tr>
              </thead>
              <tbody>
                {standings.map((row, idx) => (
                  <tr key={row.id}>
                    <td className="rank">#{idx + 1}</td>
                    <td className="player">{row.player_name}</td>
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
