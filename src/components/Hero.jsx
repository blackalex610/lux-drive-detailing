import { PHONE_TEL } from '../constants'
import { useSofiaStatus } from '../hooks/useSofiaStatus'
import Stars from './Stars'

function StatusPill() {
  const status = useSofiaStatus()
  const dotColor = status.open === false ? 'bg-dim' : 'bg-live'
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-surface/90 backdrop-blur px-3.5 py-1.5 text-xs font-medium text-ink shadow-sm">
      <span className={'w-1.5 h-1.5 rounded-full ' + dotColor + (status.open ? ' animate-pulse' : '')}></span>
      {status.text}
    </div>
  )
}

const TRUST_ITEMS = [
  ['shield', 'Керамика', 'Защита на лака'],
  ['drop', 'Безопасни продукти', 'Внимателни към боята'],
  ['hand', 'Ръчна грижа', 'Детайл по детайл'],
]

function TrustIcon({ kind }) {
  const common = { viewBox: '0 0 24 24', className: 'w-5 h-5', fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' }
  if (kind === 'shield') {
    return (
      <svg {...common}>
        <path d="M12 3l7 3v5c0 4.5-3 7.7-7 9-4-1.3-7-4.5-7-9V6l7-3z" />
      </svg>
    )
  }
  if (kind === 'drop') {
    return (
      <svg {...common}>
        <path d="M12 3s6 6.5 6 11a6 6 0 1 1-12 0c0-4.5 6-11 6-11z" />
      </svg>
    )
  }
  return (
    <svg {...common}>
      <path d="M7 11V6a2 2 0 1 1 4 0v4M11 10V4a2 2 0 1 1 4 0v6M15 10V6a2 2 0 1 1 4 0v6c0 4-2.5 8-6.5 8S5 16.5 5 13v-1.5a1.6 1.6 0 0 1 3.2-.3" />
    </svg>
  )
}

export default function Hero() {
  return (
    <section id="top" className="px-4 sm:px-6 pt-24 sm:pt-32 pb-16 sm:pb-24">
      <div className="max-w-6xl mx-auto">
        <div className="relative rounded-[28px] sm:rounded-[36px] bg-surface shadow-xl shadow-ink/5 overflow-hidden grid lg:grid-cols-[1.05fr_0.95fr]">
          <div className="p-6 sm:p-10 lg:p-12 flex flex-col justify-center">
            <StatusPill />

            <h1 className="font-display font-extrabold leading-[0.98] mt-6 text-[11vw] sm:text-5xl lg:text-[3.4rem] tracking-tight">
              Премиум грижа
              <span className="block">на твоя адрес.</span>
            </h1>

            <p className="mt-5 max-w-md text-dim text-base sm:text-lg leading-relaxed">
              Професионален мобилен и студио детайлинг в София — грижа, която пасва на твоя ден.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href={PHONE_TEL}
                className="inline-flex items-center gap-2 rounded-full bg-ink text-surface pl-5 pr-4 py-3.5 text-sm font-medium hover:opacity-85 transition-opacity"
              >
                Запази мобилна услуга
                <span aria-hidden="true">→</span>
              </a>
            </div>

            <div className="mt-7 flex items-center gap-3 text-sm">
              <Stars count={5} />
              <span className="font-medium">4.8</span>
              <span className="text-dim">· 6 отзива в Google</span>
              <span className="hidden sm:inline text-dim">· 430+ в Instagram</span>
            </div>
          </div>

          <div className="relative min-h-[280px] sm:min-h-[360px] lg:min-h-0">
            <img
              src="/img/black-car.jpg"
              alt="Детайлно полирано черно купе в ателието на Lux Drive Detailing"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-transparent" />
            <div className="absolute top-4 right-4 bg-surface/95 backdrop-blur rounded-2xl px-4 py-3 text-xs shadow-md">
              <span className="text-live font-medium">Последно в ателието</span>
              <br />
              Audi R8 · пълен детайлинг
            </div>
          </div>
        </div>

        <div className="relative z-10 -mt-8 sm:-mt-12 mx-3 sm:mx-10">
          <div className="bg-surface rounded-2xl sm:rounded-[28px] shadow-lg shadow-ink/5 px-6 sm:px-10 py-6 sm:py-7 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-ink/8">
            {TRUST_ITEMS.map(([kind, title, subtitle]) => (
              <div key={title} className="flex items-center gap-3 py-3 sm:py-0 sm:flex-col sm:items-center sm:text-center sm:gap-2 sm:px-4">
                <span className="w-10 h-10 rounded-full bg-surface2 grid place-items-center shrink-0">
                  <TrustIcon kind={kind} />
                </span>
                <div className="sm:mt-0">
                  <div className="text-sm font-semibold">{title}</div>
                  <div className="text-xs text-dim">{subtitle}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
