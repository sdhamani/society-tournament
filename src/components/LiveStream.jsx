export default function LiveStream() {
  // Twitch embed URL
  const streamUrl = 'https://player.twitch.tv/?channel=mrdhamani&parent=windsor-troika.vercel.app&parent=localhost'
  const isStreamActive = true

  return (
    <section id="live-stream" className="live-stream">
      <div className="container">
        <h2>🎬 Live Stream</h2>

        <div className="stream-container">
          {isStreamActive ? (
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
              <p>Live stream will be available during the tournament</p>
              <p className="no-stream-hint">July 11-12, 2026</p>
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
