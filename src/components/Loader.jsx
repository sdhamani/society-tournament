const messages = [
  '🏸 Fetching your matches...',
  '⏳ Checking the database vibes...',
  '🤔 Almost there, just loading...',
  '☕ Grab some coffee, we\'re loading...',
  '🎯 Getting everything ready for you...',
  '⚡ Loading faster than a smash shot...',
  '🌟 Making magic happen...',
  '🚀 Launching the data...',
  '💪 Pumping up the tournament...',
  '🎭 Setting the stage...',
]

export default function Loader({ message = null }) {
  const randomMessage = messages[Math.floor(Math.random() * messages.length)]

  return (
    <div className="loader-container">
      <div className="loader-spinner"></div>
      <p className="loader-text">{message || randomMessage}</p>
    </div>
  )
}
