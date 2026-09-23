function Star({ filled = true }) {
  return (
    <svg viewBox="0 0 20 20" className={'w-4 h-4 ' + (filled ? 'fill-ink' : 'fill-ink/15')} aria-hidden="true">
      <path d="M10 1.5l2.6 5.4 5.9.7-4.3 4.1 1.1 5.9L10 14.9l-5.3 2.7 1.1-5.9L1.5 7.6l5.9-.7z" />
    </svg>
  )
}

export default function Stars({ count = 5 }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} filled={i < count} />
      ))}
    </div>
  )
}
