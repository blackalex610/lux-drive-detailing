import { MAPS_URL } from '../constants'
import SectionHeading from './SectionHeading'
import Stars from './Stars'

const REVIEWS = [
  ['Unicum Bulgaria', 'преди 3 месеца', 'Моето любимо място в града да изглежда колата ми брандово нова. Страхотно обслужване…'],
  ['Мано Георгиев', 'преди месец', 'Ако се нуждаете от детайлно почистване на вашата кола, това е мястото — високо…'],
  ['Ростислав Драгостинов', 'преди месец', 'Случайно попаднах на това място и го използвах само като автомивка след дъ…'],
]

function ReviewCard({ name, time, text }) {
  return (
    <div className="bg-surface rounded-2xl shadow-md shadow-ink/5 p-6 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <Stars count={5} />
        <span className="text-[10px] uppercase text-dim" style={{ letterSpacing: '0.08em' }}>
          Google · {time}
        </span>
      </div>
      <p className="leading-relaxed">&ldquo;{text}&rdquo;</p>
      <span className="text-sm font-medium text-dim mt-auto">— {name}</span>
    </div>
  )
}

export default function Reviews() {
  return (
    <section id="otzivi" className="px-4 sm:px-6 py-20 sm:py-28 border-b border-ink/8">
      <div className="max-w-5xl mx-auto">
        <SectionHeading eyebrow="03 — Google" title="Какво казват клиентите" />
        <div className="grid sm:grid-cols-3 gap-6">
          {REVIEWS.map((r) => (
            <ReviewCard key={r[0]} name={r[0]} time={r[1]} text={r[2]} />
          ))}
        </div>
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-8 text-sm text-dim hover:text-ink transition-colors"
        >
          Виж всички отзиви в Google Maps →
        </a>
      </div>
    </section>
  )
}
