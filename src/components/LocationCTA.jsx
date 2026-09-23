import { ADDRESS_LINE1, ADDRESS_LINE2, EMAIL, IG_URL, MAPS_EMBED_URL, MAPS_URL, PHONE_DISPLAY, PHONE_TEL } from '../constants'
import { useSofiaStatus } from '../hooks/useSofiaStatus'
import SectionHeading from './SectionHeading'

export default function LocationCTA() {
  const status = useSofiaStatus()

  return (
    <section id="lokatsia" className="px-4 sm:px-6 py-20 sm:py-28 bg-surface2 border-b border-ink/8">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
        <div>
          <SectionHeading eyebrow="04 — Докет" title="Намери ни" />
          <dl className="text-sm space-y-5">
            <div>
              <dt className="text-dim uppercase text-[11px]" style={{ letterSpacing: '0.08em' }}>
                Адрес
              </dt>
              <dd className="mt-1">
                {ADDRESS_LINE1}
                <br />
                {ADDRESS_LINE2}
              </dd>
            </div>
            <div>
              <dt className="text-dim uppercase text-[11px]" style={{ letterSpacing: '0.08em' }}>
                Телефон
              </dt>
              <dd className="mt-1">
                <a href={PHONE_TEL} className="font-medium hover:underline">
                  {PHONE_DISPLAY}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-dim uppercase text-[11px]" style={{ letterSpacing: '0.08em' }}>
                Имейл
              </dt>
              <dd className="mt-1">
                <a href={'mailto:' + EMAIL} className="font-medium hover:underline break-all">
                  {EMAIL}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-dim uppercase text-[11px]" style={{ letterSpacing: '0.08em' }}>
                Работно време
              </dt>
              <dd className="mt-1">Всеки ден · 09:00 – 21:00</dd>
              <dd className="text-dim text-xs mt-1">(часовете могат да варират в официални празници)</dd>
            </div>
            <div>
              <dt className="text-dim uppercase text-[11px]" style={{ letterSpacing: '0.08em' }}>
                В социалните мрежи
              </dt>
              <dd className="mt-2 flex flex-wrap gap-2">
                <a
                  href={IG_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-ink/15 px-3 py-1.5 text-xs hover:border-ink transition-colors"
                >
                  Instagram
                </a>
                <span className="rounded-full border border-ink/10 px-3 py-1.5 text-xs text-dim">Facebook · Lux Drive Clean</span>
                <span className="rounded-full border border-ink/10 px-3 py-1.5 text-xs text-dim">TikTok</span>
              </dd>
            </div>
          </dl>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-8 rounded-full border border-ink/15 px-5 py-3 text-sm font-medium hover:border-ink transition-colors"
          >
            Отвори в Google Maps →
          </a>
        </div>

        <div className="bg-surface rounded-2xl shadow-md shadow-ink/5 p-8 flex flex-col justify-between">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-surface2 px-3 py-1.5 text-xs font-medium text-dim">
              <span className={'w-1.5 h-1.5 rounded-full ' + (status.open === false ? 'bg-dim' : 'bg-live') + (status.open ? ' animate-pulse' : '')}></span>
              {status.text}
            </span>
            <h3 className="font-display font-extrabold text-3xl sm:text-4xl mt-6 leading-[1.02] tracking-tight">
              Готови за трансформация?
            </h3>
            <p className="text-dim mt-4 leading-relaxed">
              Обади се или пиши в Instagram — казваш модела, договаряме услуга и час, ние се грижим за останалото.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-3">
            <a
              href={PHONE_TEL}
              className="text-center rounded-full bg-ink text-surface px-6 py-3.5 text-sm font-medium hover:opacity-85 transition-opacity"
            >
              Обади се · {PHONE_DISPLAY}
            </a>
            <a
              href={IG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center rounded-full border border-ink/15 px-6 py-3.5 text-sm font-medium hover:border-ink transition-colors"
            >
              Запази през Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-10">
        <div className="relative rounded-2xl overflow-hidden border border-ink/10 shadow-md shadow-ink/5">
          <iframe
            src={MAPS_EMBED_URL}
            className="w-full h-72 sm:h-96"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            title="Карта с местоположението на Lux Drive Detailing"
          />
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-surface/95 backdrop-blur px-4 py-2 text-xs font-medium shadow-md shadow-ink/10 hover:bg-surface transition-colors"
          >
            <span aria-hidden="true">📍</span>
            {ADDRESS_LINE1}
          </a>
        </div>
      </div>
    </section>
  )
}
