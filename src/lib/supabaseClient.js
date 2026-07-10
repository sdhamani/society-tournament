import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || 'https://evhzyyjbenbwvzzwmhmp.supabase.co'
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_EcYokzDb32YTIzwmwGHGVw_ngiGTHca'

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  console.error('Supabase URL and Anon Key are required')
}

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

// Fetch all matches
export async function getMatches(day) {
  try {
    const { data, error } = await supabase
      .from('matches')
      .select('*')
      .order('match_time', { ascending: true })

    if (error) throw error
    return data || []
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
