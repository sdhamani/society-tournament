import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabaseClient'

export default function InitializeDatabase({ onInitialized }) {
  const [initialized, setInitialized] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    checkAndInitialize()
  }, [])

  const checkAndInitialize = async () => {
    try {
      // Check if matches exist
      const { data, error: checkError } = await supabase
        .from('matches')
        .select('id')
        .limit(1)

      if (checkError) throw checkError

      if (data && data.length > 0) {
        // Database already initialized
        setInitialized(true)
        setLoading(false)
        onInitialized?.(true)
        return
      }

      // Database is empty, initialize it
      await initializeDatabase()
      setInitialized(true)
      setLoading(false)
      onInitialized?.(true)
    } catch (err) {
      setError(err.message)
      setLoading(false)
    }
  }

  const initializeDatabase = async () => {
    const matchesData = [
      // Saturday matches
      { match_number: 'SAT-001', match_time: '7:50-8:10', group_name: 'Kids G1', team_a: 'Amogh + Bodhan', team_b: 'Tanmay + Nythik', status: 'scheduled' },
      { match_number: 'SAT-002', match_time: '8:10-8:30', group_name: 'Kids G2', team_a: 'Tanush + Joe', team_b: 'Kanishk + Advik', status: 'scheduled' },
      { match_number: 'SAT-003', match_time: '8:30-8:50', group_name: 'Kids G1', team_a: 'Anubhav + Sanav', team_b: 'Amogh + Nythik', status: 'scheduled' },
      { match_number: 'SAT-004', match_time: '8:50-9:10', group_name: 'Kids G2', team_a: 'Tanush + Joe', team_b: 'Yuvaan + Abhiram', status: 'scheduled' },
      { match_number: 'SAT-005', match_time: '9:10-9:30', group_name: 'Kids G1', team_a: 'Anubhav + Avyukt', team_b: 'Yakshit + Bodhan', status: 'scheduled' },
      { match_number: 'SAT-006', match_time: '9:30-10:10', group_name: 'Ceremony', team_a: 'Opening Ceremony', team_b: 'Opening Ceremony', status: 'scheduled' },
      { match_number: 'SAT-007', match_time: '10:10-10:30', group_name: 'Men G1', team_a: 'Divyam + Sanjeev', team_b: 'Srikant + Rohit', status: 'scheduled' },
      { match_number: 'SAT-008', match_time: '10:30-10:50', group_name: 'Women G1', team_a: 'Poornima + Animisha', team_b: 'Sayantini + Maya', status: 'scheduled' },
      { match_number: 'SAT-009', match_time: '10:50-11:10', group_name: 'Men G1', team_a: 'Avinish + Rohit', team_b: 'Srikant + Sagar', status: 'scheduled' },
      { match_number: 'SAT-010', match_time: '11:10-11:30', group_name: 'Women G1', team_a: 'Jigyasa + Rashmi', team_b: 'Sayantini + Animisha', status: 'scheduled' },
      { match_number: 'SAT-011', match_time: '11:30-11:50', group_name: 'Men G1', team_a: 'Avinish + Sagar', team_b: 'Prajwal + Abhishek R', status: 'scheduled' },
      { match_number: 'SAT-012', match_time: '11:50-12:10', group_name: 'Women G1', team_a: 'Jigyasa + Maya', team_b: 'Sonali + Animisha', status: 'scheduled' },
      { match_number: 'SAT-013', match_time: '12:10-12:30', group_name: 'Men G1', team_a: 'Avinish + Abhishek R', team_b: 'Divyam + Rohit', status: 'scheduled' },
      { match_number: 'SAT-014', match_time: '12:30-12:50', group_name: 'Women G1', team_a: 'Poornima + Maya', team_b: 'Sayantini + Rashmi', status: 'scheduled' },
      { match_number: 'SAT-015', match_time: '12:50-1:10', group_name: 'Men G2', team_a: 'Manish + Vinay', team_b: 'Umang + Goutham', status: 'scheduled' },
      { match_number: 'SAT-016', match_time: '1:10-1:30', group_name: 'Men G2', team_a: 'Rahul + Amit', team_b: 'Tilak + Karteek', status: 'scheduled' },
      { match_number: 'SAT-017', match_time: '4:30-4:50', group_name: 'Women G2', team_a: 'Sheetal + Shamita', team_b: 'Megha + Pakhi', status: 'scheduled' },
      { match_number: 'SAT-018', match_time: '4:50-5:10', group_name: 'Seniors', team_a: 'Agarwal Ji + Dr. Pande Ji', team_b: 'Ram Sagar Ji + Dr. Joshi', status: 'scheduled' },
      { match_number: 'SAT-019', match_time: '5:10-5:30', group_name: 'Men G2', team_a: 'Ashish + Suchit', team_b: 'Umang + Amit', status: 'scheduled' },
      { match_number: 'SAT-020', match_time: '5:30-5:50', group_name: 'Women G2', team_a: 'Sheetal + Megha', team_b: 'Pakhi + Bahula', status: 'scheduled' },
      { match_number: 'SAT-021', match_time: '5:50-6:10', group_name: 'Men G2', team_a: 'Ashish + Karteek', team_b: 'Tilak + Suchit', status: 'scheduled' },
      { match_number: 'SAT-022', match_time: '6:10-6:30', group_name: 'Seniors', team_a: 'Dayanand Ji + Gosh Ji', team_b: 'Ram Sagar Ji + Dr. Joshi', status: 'scheduled' },
      { match_number: 'SAT-023', match_time: '6:30-6:50', group_name: 'Men G2', team_a: 'Ashish + Goutham', team_b: 'Rahul + Karteek', status: 'scheduled' },
      { match_number: 'SAT-024', match_time: '6:50-7:10', group_name: 'Men G2', team_a: 'Manish + Amit', team_b: 'Rahul + Vinay', status: 'scheduled' },
      { match_number: 'SAT-025', match_time: '7:10-7:30', group_name: 'Women G1', team_a: 'Jigyasa + Animisha', team_b: 'Sonali + Nikita', status: 'scheduled' },
      { match_number: 'SAT-026', match_time: '7:30-7:50', group_name: 'Men G2', team_a: 'Manish + Suchit', team_b: 'Tilak + Goutham', status: 'scheduled' },
      { match_number: 'SAT-027', match_time: '7:50-8:10', group_name: 'Women G1', team_a: 'Jigyasa + Nikita', team_b: 'Poornima + Rashmi', status: 'scheduled' },
      { match_number: 'SAT-028', match_time: '8:10-8:30', group_name: 'Men G2', team_a: 'Ashish + Amit', team_b: 'Manish + Goutham', status: 'scheduled' },
      // Sunday matches
      { match_number: 'SUN-001', match_time: '8:00-8:20', group_name: 'Kids G1', team_a: 'Anubhav + Bodhan', team_b: 'Yakshit + Avyukt', status: 'scheduled' },
      { match_number: 'SUN-002', match_time: '8:20-8:40', group_name: 'Kids G2', team_a: 'Tanush + Abhiram', team_b: 'Kanishk + Joe Arya', status: 'scheduled' },
      { match_number: 'SUN-003', match_time: '8:40-9:00', group_name: 'Kids G1', team_a: 'Amogh + Avyukt', team_b: 'Tanmay + Sanav', status: 'scheduled' },
      { match_number: 'SUN-004', match_time: '9:00-9:20', group_name: 'Men G2', team_a: 'Rahul + Suchit', team_b: 'Umang + Vinay', status: 'scheduled' },
      { match_number: 'SUN-005', match_time: '9:20-9:40', group_name: 'Kids G1', team_a: 'Amogh + Sanav', team_b: 'Yakshit + Nythik', status: 'scheduled' },
      { match_number: 'SUN-006', match_time: '9:40-10:00', group_name: 'Men G1', team_a: 'Avinish + Sanjeev', team_b: 'Prajwal + Sagar', status: 'scheduled' },
      { match_number: 'SUN-007', match_time: '10:00-10:20', group_name: 'Women G1', team_a: 'Sayantini + Nikita', team_b: 'Sonali + Maya', status: 'scheduled' },
      { match_number: 'SUN-008', match_time: '10:20-10:40', group_name: 'Men G1', team_a: 'Prajwal + Rohit', team_b: 'Srikant + Sanjeev', status: 'scheduled' },
      { match_number: 'SUN-009', match_time: '10:40-11:00', group_name: 'Women G1', team_a: 'Poornima + Nikita', team_b: 'Sonali + Rashmi', status: 'scheduled' },
      { match_number: 'SUN-010', match_time: '11:00-11:20', group_name: 'Men G1', team_a: 'Divyam + Sagar', team_b: 'Srikant + Abhishek R', status: 'scheduled' },
      { match_number: 'SUN-011', match_time: '11:20-11:40', group_name: 'Women G2', team_a: 'Sheetal + Pakhi', team_b: 'Shamita + Bahula', status: 'scheduled' },
      { match_number: 'SUN-012', match_time: '11:40-12:00', group_name: 'Men G1', team_a: 'Divyam + Abhishek R', team_b: 'Prajwal + Sanjeev', status: 'scheduled' },
      { match_number: 'SUN-013', match_time: '12:00-12:20', group_name: 'Women G2', team_a: 'Sheetal + Bahula', team_b: 'Megha + Shamita', status: 'scheduled' },
      { match_number: 'SUN-014', match_time: '12:20-12:40', group_name: 'Kids G2', team_a: 'Kanishk + Abhiram', team_b: 'Yuvaan + Advik', status: 'scheduled' },
      { match_number: 'SUN-015', match_time: '12:40-1:00', group_name: 'Women G2', team_a: 'Megha + Bahula', team_b: 'Pakhi + Shamita', status: 'scheduled' },
      { match_number: 'SUN-016', match_time: '1:00-1:20', group_name: 'Kids G1', team_a: 'Tanmay + Bodhan', team_b: 'Yakshit + Sanav', status: 'scheduled' },
      { match_number: 'SUN-017', match_time: '1:20-1:40', group_name: 'Men G2', team_a: 'Tilak + Vinay', team_b: 'Umang + Karteek', status: 'scheduled' },
      { match_number: 'SUN-018', match_time: '1:40-2:00', group_name: 'Kids G1', team_a: 'Anubhav + Nythik', team_b: 'Avyukth + Tanmay', status: 'scheduled' },
      { match_number: 'SUN-019', match_time: '2:00-2:20', group_name: 'Seniors', team_a: 'Awadesh Ji + Deepak Ji', team_b: 'Dayanand Ji + Gosh Ji', status: 'scheduled' },
      { match_number: 'SUN-020', match_time: '2:20-2:40', group_name: 'Kids G2', team_a: 'Kanishk + Advik', team_b: 'Yuvaan + Abhiram', status: 'scheduled' },
      { match_number: 'SUN-021', match_time: '2:40-3:00', group_name: 'Seniors', team_a: 'Awadesh Ji + Deepak Ji', team_b: 'Agarwal Ji + Dr. Pande Ji', status: 'scheduled' },
    ]

    const { error } = await supabase
      .from('matches')
      .insert(matchesData)

    if (error) throw error
  }

  if (loading) {
    return null // Silent initialization on load
  }

  if (error) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center', color: '#d32f2f' }}>
        <p>⚠️ Database initialization error: {error}</p>
      </div>
    )
  }

  return null // Render nothing once initialized
}
