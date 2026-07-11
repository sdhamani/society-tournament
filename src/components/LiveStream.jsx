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

  const getEmbedUrl = (url) => {
    if (!url) return null

    // YouTube URL patterns
    if (url.includes('youtube.com') || url.includes('youtu.be') || url.includes('studio.youtube.com')) {
      // Extract video ID from various YouTube URL formats
      let videoId
      if (url.includes('studio.youtube.com/video/')) {
        videoId = url.split('studio.youtube.com/video/')[1]?.split('/')[0]
      } else if (url.includes('youtube.com/live/')) {
        videoId = url.split('youtube.com/live/')[1]?.split('?')[0]
      } else if (url.includes('youtube.com/watch?v=')) {
        videoId = url.split('v=')[1]?.split('&')[0]
      } else if (url.includes('youtu.be/')) {
        videoId = url.split('youtu.be/')[1]?.split('?')[0]
      } else if (url.includes('youtube.com/embed/')) {
        videoId = url.split('youtube.com/embed/')[1]?.split('?')[0]
      }
      return videoId ? `https://www.youtube.com/embed/${videoId}` : url
    }

    // Twitch URLs - return as-is (already in correct embed format)
    if (url.includes('twitch.tv')) {
      return url
    }

    // Return URL as-is for other platforms
    return url
  }

  if (loading) {
    return null
  }

  const embedUrl = getEmbedUrl(streamUrl)

  return (
    <section id="live-stream" className="live-stream">
      <div className="container">
        <h2>🎬 Live Stream</h2>

        <div className="stream-container">
          {embedUrl ? (
            <div className="stream-embed">
              <iframe
                width="100%"
                height="600"
                src={embedUrl}
                title="Live Stream"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <div className="no-stream">
              <div className="no-stream-icon">🎥</div>
              <h3>Live Stream Coming Soon</h3>
              <p>We'll be streaming the tournament live during the matches. Stay tuned and check back during July 11-12, 2026!</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
