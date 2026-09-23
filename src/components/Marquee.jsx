const ITEMS = ['AUDI R8', 'FERRARI CALIFORNIA', 'TOYOTA LAND CRUISER', 'BMW SERIES', 'MERCEDES-BENZ']

export default function Marquee() {
  const doubled = [...ITEMS, ...ITEMS]
  return (
    <section className="border-b border-ink/8 py-6 overflow-hidden bg-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-4">
        <span className="font-mono text-[11px] uppercase text-live" style={{ letterSpacing: '0.2em' }}>
          В ателието напоследък
        </span>
      </div>
      <div className="no-scrollbar overflow-hidden">
        <div className="marquee-track">
          {doubled.map((item, i) => (
            <span key={i} className="font-display font-bold uppercase text-3xl sm:text-4xl text-ink/10 px-8 whitespace-nowrap">
              {item} <span className="text-live/40 mx-2">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
