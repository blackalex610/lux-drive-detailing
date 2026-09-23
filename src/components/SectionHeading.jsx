export default function SectionHeading({ eyebrow, title, blurb }) {
  return (
    <div className="max-w-2xl mb-12">
      <span className="font-mono text-xs uppercase text-live" style={{ letterSpacing: '0.18em' }}>
        {eyebrow}
      </span>
      <h2 className="font-display font-extrabold text-4xl sm:text-5xl mt-3 leading-[1.02] tracking-tight">{title}</h2>
      {blurb && <p className="text-dim mt-4 leading-relaxed">{blurb}</p>}
    </div>
  )
}
