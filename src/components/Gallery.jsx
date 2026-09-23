import SectionHeading from './SectionHeading'

function GalleryCard({ src, alt, caption, rotate }) {
  return (
    <div
      className={
        'bg-surface rounded-2xl p-3 pb-5 shadow-lg shadow-ink/5 w-full max-w-[260px] mx-auto sm:mx-0' +
        (rotate ? ' sm:' + rotate : '')
      }
    >
      <div className="overflow-hidden rounded-xl bg-surface2">
        <img src={src} alt={alt} className="w-full h-auto block" />
      </div>
      <p className="font-mono text-[11px] uppercase text-dim mt-3 text-center" style={{ letterSpacing: '0.06em' }}>
        {caption}
      </p>
    </div>
  )
}

export default function Gallery() {
  return (
    <section id="rezultati" className="px-4 sm:px-6 py-20 sm:py-28 border-b border-ink/8 bg-surface2">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          eyebrow="02 — Доказателство"
          title="Резултати, не обещания."
          blurb="Кадри от реални коли, обслужени в ателието — без филтри, без прикриване."
        />
        <div className="grid sm:grid-cols-3 gap-10 sm:gap-6 items-start pt-4">
          <GalleryCard
            src="/img/lambo-wheel.png"
            alt="Измиване и защита на джанта на зелен спортен автомобил"
            caption="Джанти · деконтаминация"
            rotate="rotate-[-2deg]"
          />
          <GalleryCard
            src="/img/red-interior.png"
            alt="Ръчно подхранване на червена кожена тапицерия"
            caption="Кожен салон · подхранване"
            rotate="rotate-[1.5deg] sm:mt-8"
          />
          <GalleryCard
            src="/img/black-car.jpg"
            alt="Финално полиран черен автомобил в шоурум"
            caption="Лак · финална полировка"
            rotate="rotate-[-1deg]"
          />
        </div>
      </div>
    </section>
  )
}
