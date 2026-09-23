import { PHONE_TEL } from '../constants'
import SectionHeading from './SectionHeading'

const ITEMS = [
  [
    '01',
    'Екстериорно измиване & деконтаминация',
    'Безопасно pH-неутрално измиване и почистване на замърсявания по лака преди всяка следваща стъпка.',
  ],
  [
    '02',
    'Керамично покритие',
    'Дълготрайна защита на лака, дълбок гланц и по-лесна поддръжка между визитите.',
  ],
  [
    '03',
    'Пране и дълбоко почистване на салон',
    'Извличане на прах, петна и миризми от тапицерия и текстил, до последния шев.',
  ],
  [
    '04',
    'Грижа за кожен салон',
    'Почистване, подхранване и защита на кожа и алкантара — след премиум измиване, ръчно, детайл по детайл.',
  ],
  [
    '05',
    'Мобилна услуга',
    'Взимаме и връщаме автомобила до твоя адрес в София — максимално удобство, същият премиум резултат.',
  ],
]

export default function Services() {
  return (
    <section id="uslugi" className="px-4 sm:px-6 py-20 sm:py-28 border-b border-ink/8">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          eyebrow="01 — Спецификация"
          title="Услуги"
          blurb="Всеки автомобил е различен, затова всяка оферта е персонална. Обади се за точна цена според модел и състояние."
        />
        <div className="flex flex-col">
          {ITEMS.map(([num, name, desc], i) => (
            <div
              key={num}
              className={'flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8 py-6' + (i !== 0 ? ' border-t border-ink/8' : '')}
            >
              <span className="font-mono text-live text-sm shrink-0 w-8">{num}</span>
              <div className="flex-1">
                <h3 className="font-display font-bold text-xl sm:text-2xl tracking-tight">{name}</h3>
                <p className="text-dim text-sm mt-1 max-w-lg">{desc}</p>
              </div>
              <a
                href={PHONE_TEL}
                className="shrink-0 text-xs font-medium text-ink border border-ink/15 rounded-full px-4 py-2 hover:border-ink hover:bg-ink hover:text-surface transition-colors self-start sm:self-center"
              >
                Оферта →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
