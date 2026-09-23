import { IG_URL, PHONE_TEL } from '../constants'

export default function MobileCallBar() {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-surface/95 backdrop-blur border-t border-ink/8 px-4 py-3 flex gap-3">
      <a
        href={PHONE_TEL}
        className="flex-1 text-center rounded-full bg-ink text-surface py-3 text-sm font-medium"
      >
        Обади се
      </a>
      <a
        href={IG_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 text-center rounded-full border border-ink/15 py-3 text-sm font-medium"
      >
        Instagram
      </a>
    </div>
  )
}
