export default function LoadingSpinner({
  label = 'Loading…',
  fullScreen = false,
}: {
  label?: string
  fullScreen?: boolean
}) {
  return (
    <div
      className={`mg-spinner ${fullScreen ? 'mg-spinner--full' : ''}`}
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <div className="mg-spinner-ring" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <p className="mg-spinner-label">{label}</p>
    </div>
  )
}
