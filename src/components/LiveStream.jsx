import { useSearchParams } from 'react-router-dom'

export default function LiveStream() {
  const [searchParams] = useSearchParams()
  const isAdmin = searchParams.get('admin') === 'sagar'

  // Twitch embed URL
  const streamUrl = 'https://player.twitch.tv/?channel=mrdhamani&parent=windsor-troika.vercel.app&parent=localhost'

  if (!isAdmin) {
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
