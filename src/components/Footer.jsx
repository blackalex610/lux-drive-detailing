import { ADDRESS_LINE1, PHONE_DISPLAY, PHONE_TEL } from '../constants'

export default function Footer() {
  return (
    <footer className="px-4 sm:px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        <div className="leading-none">
          <span className="block text-lg font-display font-extrabold">Lux Drive</span>
          <span className="block text-xs font-mono text-live" style={{ letterSpacing: '0.24em' }}>
            Detailing · София
          </span>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-dim">
          <a href="#uslugi" className="hover:text-ink transition-colors">
            Услуги
          </a>
          <a href="#rezultati" className="hover:text-ink transition-colors">
            Резултати
          </a>
          <a href="#otzivi" className="hover:text-ink transition-colors">
            Отзиви
          </a>
          <a href="#lokatsia" className="hover:text-ink transition-colors">
            Локация
          </a>
        </nav>
        <div className="text-sm text-dim">
          {ADDRESS_LINE1} ·{' '}
          <a href={PHONE_TEL} className="hover:text-ink">
            {PHONE_DISPLAY}
          </a>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-ink/8 text-xs text-dim">
        © 2026 Lux Drive Detailing. Всички права запазени.
      </div>
    </footer>
  )
}
