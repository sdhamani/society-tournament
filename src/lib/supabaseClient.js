import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || 'https://evhzyyjbenbwvzzwmhmp.supabase.co'
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_EcYokzDb32YTIzwmwGHGVw_ngiGTHca'

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  console.error('Supabase URL and Anon Key are required')
}

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

// Fetch all matches with scores
export async function getMatches(day) {
  try {
    const { data, error } = await supabase
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
      .order('match_time', { ascending: true })

    if (error) throw error

    // Flatten the scores data
    return (data || []).map(match => ({
      ...match,
      set1_team_a: match.scores?.[0]?.set1_team_a || null,
      set1_team_b: match.scores?.[0]?.set1_team_b || null,
      set2_team_a: match.scores?.[0]?.set2_team_a || null,
      set2_team_b: match.scores?.[0]?.set2_team_b || null,
      set3_team_a: match.scores?.[0]?.set3_team_a || null,
      set3_team_b: match.scores?.[0]?.set3_team_b || null,
      winner: match.scores?.[0]?.winner || null
    }))
  } catch (error) {
    console.error('Error fetching matches:', error)
    return []
  }
}

// Get score for a match
export async function getMatchScore(matchId) {
  try {
    const { data, error } = await supabase
      .from('scores')
      .select('*')
      .eq('match_id', matchId)
      .single()

    if (error) throw error
    return data
  } catch (error) {
    console.error('Error fetching score:', error)
    return null
  }
}

// Update match score
export async function updateMatchScore(matchId, scoreData) {
  try {
    const { data, error } = await supabase
      .from('scores')
      .upsert({
        match_id: matchId,
        ...scoreData,
        updated_at: new Date()
      })
      .select()

    if (error) throw error
    return data
  } catch (error) {
    console.error('Error updating score:', error)
    return null
  }
}

// Get standings for a group
export async function getStandings(groupName) {
  try {
    const { data, error } = await supabase
      .from('standings')
      .select('*')
      .eq('group_name', groupName)
      .order('points', { ascending: false })

    if (error) throw error
    return data || []
  } catch (error) {
    console.error('Error fetching standings:', error)
    return []
  }
}

// Update player standings
export async function updateStandings(groupName, playerName, points, wins, matchesPlayed) {
  try {
    const { data, error } = await supabase
      .from('standings')
      .upsert({
        group_name: groupName,
        player_name: playerName,
        points,
        wins,
        matches_played: matchesPlayed,
        updated_at: new Date()
      })
      .select()

    if (error) throw error
    return data
  } catch (error) {
    console.error('Error updating standings:', error)
    return null
  }
}

// Get all players
export async function getPlayers() {
  try {
    const { data, error } = await supabase
      .from('players')
      .select('*')

    if (error) throw error
    return data || []
  } catch (error) {
    console.error('Error fetching players:', error)
    return []
  }
}

// Recalculate all standings from scratch
export async function recalculateAllStandings() {
  try {
    // Get all matches with scores
    const { data: matches, error: matchError } = await supabase
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

    if (matchError) throw matchError

    // Clear all standings
    await supabase.from('standings').delete().gt('id', 0)

    // Recalculate standings
    const standingsMap = {}

    matches.forEach(match => {
      const score = match.scores?.[0]
      if (!score || !score.winner) return

      const winnerTeam = score.winner === 'Team A' ? match.team_a : match.team_b
      const players = winnerTeam.split(' + ').map(p => p.trim())

      players.forEach(player => {
        const key = `${match.group_name}|${player}`
        if (!standingsMap[key]) {
          standingsMap[key] = {
            group_name: match.group_name,
            player_name: player,
            points: 0,
            wins: 0,
            matches_played: 0
          }
        }
        standingsMap[key].points += 2
        standingsMap[key].wins += 1
        standingsMap[key].matches_played += 1
      })
    })

    // Insert recalculated standings
    const standingsToInsert = Object.values(standingsMap)
    if (standingsToInsert.length > 0) {
      const { error: insertError } = await supabase
        .from('standings')
        .insert(standingsToInsert)

      if (insertError) throw insertError
    }

    return true
  } catch (error) {
    console.error('Error recalculating standings:', error)
    return false
  }
}
