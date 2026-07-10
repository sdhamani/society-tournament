import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { getStreamUrl, updateStreamUrl } from '../lib/supabaseClient'
import '../styles/AdminSettings.css'

export default function AdminSettings() {
  const [searchParams] = useSearchParams()
  const [streamUrl, setStreamUrl] = useState('')
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState('')

  const isAdmin = searchParams.get('admin') === 'sagar'

  useEffect(() => {
    if (isAdmin) {
      fetchStreamUrl()
    }
  }, [isAdmin])

  const fetchStreamUrl = async () => {
    setLoading(true)
    const url = await getStreamUrl()
    setStreamUrl(url)
    setLoading(false)
  }

  const handleSave = async () => {
    if (!streamUrl.trim()) {
      setMessage('❌ Please enter a stream URL')
      return
    }

    setSaving(true)
    const result = await updateStreamUrl(streamUrl)

    if (result) {
      setMessage('✅ Stream URL updated successfully!')
      setTimeout(() => setMessage(''), 3000)
    } else {
      setMessage('❌ Failed to update stream URL')
    }
    setSaving(false)
  }

  const handleClear = async () => {
    setSaving(true)
    const result = await updateStreamUrl('')

    if (result) {
      setStreamUrl('')
      setMessage('✅ Stream URL cleared!')
      setTimeout(() => setMessage(''), 3000)
    } else {
      setMessage('❌ Failed to clear stream URL')
    }
    setSaving(false)
  }

  if (!isAdmin) {
    return (
      <div className="admin-settings-container">
        <div className="admin-error">
          <p>🔒 Access Denied</p>
          <p>You must be logged in as admin to access settings.</p>
        </div>
      </div>
    )
  }

  return (
    <section className="admin-settings">
      <div className="container">
        <div className="settings-card">
          <h1>⚙️ Admin Settings</h1>

          <div className="settings-section">
            <h2>🎬 Live Stream URL</h2>
            <p className="section-help">
              Enter your Twitch channel embed URL. When you go live, it will appear on the website.
            </p>

            {loading ? (
              <p className="loading">Loading...</p>
            ) : (
              <>
                <div className="form-group">
                  <label htmlFor="streamUrl">Stream URL:</label>
                  <input
                    id="streamUrl"
                    type="text"
                    value={streamUrl}
                    onChange={(e) => setStreamUrl(e.target.value)}
                    placeholder="https://player.twitch.tv/?channel=..."
                    className="input-field"
                  />
                  <p className="input-hint">
                    Example: https://player.twitch.tv/?channel=mrdhamani&parent=windsor-troika.vercel.app
                  </p>
                </div>

                <div className="button-group">
                  <button
                    onClick={handleSave}
                    disabled={saving}
                    className="btn-primary"
                  >
                    {saving ? '⏳ Saving...' : '💾 Save URL'}
                  </button>
                  <button
                    onClick={handleClear}
                    disabled={saving}
                    className="btn-secondary"
                  >
                    {saving ? '⏳ Clearing...' : '🗑️ Clear'}
                  </button>
                </div>

                {message && (
                  <div className={`message ${message.includes('✅') ? 'success' : 'error'}`}>
                    {message}
                  </div>
                )}
              </>
            )}
          </div>

          <div className="settings-info">
            <h3>ℹ️ How to use:</h3>
            <ol>
              <li>Go live on Twitch from your phone</li>
              <li>Copy your Twitch embed URL</li>
              <li>Paste it here and click "Save URL"</li>
              <li>Your stream appears on the website instantly!</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
