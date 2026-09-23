const STATS = [
  ['4.8', 'среден рейтинг'],
  ['6', 'отзива в Google'],
  ['430+', 'в Instagram'],
  ['1', 'адрес · Хаджи Димитър'],
]

export default function StatStrip() {
  return (
    <section className="border-y border-ink/8 bg-surface2 px-4 sm:px-6 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-4 text-center">
        {STATS.map(([num, label]) => (
          <div key={label}>
            <div className="font-display font-extrabold text-4xl sm:text-5xl">{num}</div>
            <div className="text-xs uppercase text-dim mt-1" style={{ letterSpacing: '0.08em' }}>
              {label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
