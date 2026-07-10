import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { getStreamUrl } from '../lib/supabaseClient'

export default function LiveStream() {
  const [searchParams] = useSearchParams()
  const [streamUrl, setStreamUrl] = useState('')
  const [loading, setLoading] = useState(true)

  const isAdmin = searchParams.get('admin') === 'sagar'

  useEffect(() => {
    if (isAdmin) {
      fetchStreamUrl()
    }
  }, [isAdmin])

  const fetchStreamUrl = async () => {
    const url = await getStreamUrl()
    setStreamUrl(url)
    setLoading(false)
  }

  if (!isAdmin || loading) {
    return null
  }

  if (!streamUrl) {
    return null
  }

  return (
    <section id="live-stream" className="live-stream">
      <div className="container">
        <h2>🎬 Live Stream</h2>

        <div className="stream-container">
          <div className="stream-embed">
            <iframe
              width="100%"
              height="600"
              src={streamUrl}
              title="Live Stream"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="stream-info">
          <p>🎯 Watch the tournament live from the comfort of your home!</p>
          <p>🏸 Follow along with the schedule and standings in real-time</p>
        </div>
      </div>
    </section>
  )
}
