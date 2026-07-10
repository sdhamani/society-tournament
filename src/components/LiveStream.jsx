import { useState, useEffect } from 'react'
import { getStreamUrl } from '../lib/supabaseClient'

export default function LiveStream() {
  const [streamUrl, setStreamUrl] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchStreamUrl()
  }, [])

  const fetchStreamUrl = async () => {
    const url = await getStreamUrl()
    setStreamUrl(url)
    setLoading(false)
  }

  if (loading) {
    return null
  }

  return (
    <section id="live-stream" className="live-stream">
      <div className="container">
        <h2>🎬 Live Stream</h2>

        <div className="stream-container">
          {streamUrl ? (
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
          ) : (
            <div className="no-stream">
              <div className="no-stream-icon">📹</div>
              <p>Live streaming will start once we begin the tournament</p>
              <p className="no-stream-hint">Stay tuned! July 11-12, 2026</p>
            </div>
          )}
        </div>

        <div className="stream-info">
          <p>🎯 Watch the tournament live from the comfort of your home!</p>
          <p>🏸 Follow along with the schedule and standings in real-time</p>
        </div>
      </div>
    </section>
  )
}
