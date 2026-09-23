import { useState } from 'react'
import { PHONE_TEL } from '../constants'

const LINKS = [
  ['Услуги', '#uslugi'],
  ['Резултати', '#rezultati'],
  ['Отзиви', '#otzivi'],
  ['Локация', '#lokatsia'],
]

export default function NavBar() {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-ink/8 bg-surface/90 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#top" className="leading-none">
          <span className="block text-lg font-display font-extrabold tracking-tight">Lux Drive</span>
          <span className="block text-[10px] font-mono uppercase text-dim" style={{ letterSpacing: '0.24em' }}>
            Detailing · София
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-dim">
          {LINKS.map(([label, href], i) => (
            <a
              key={href}
              href={href}
              className={'hover:text-ink transition-colors' + (i === 0 ? ' text-ink underline underline-offset-8 decoration-2 decoration-live' : '')}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={PHONE_TEL}
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-ink text-surface px-5 py-2.5 text-sm font-medium hover:opacity-85 transition-opacity"
          >
            Обади се →
          </a>
          <button
            aria-label="Меню"
            onClick={() => setOpenMenu((v) => !v)}
            className="md:hidden w-10 h-10 grid place-items-center rounded-full border border-ink/15"
          >
            <div className="w-4 flex flex-col gap-1">
              <span className="h-px bg-ink block"></span>
              <span className="h-px bg-ink block"></span>
            </div>
          </button>
        </div>
      </div>

      {openMenu && (
        <div className="md:hidden border-t border-ink/8 bg-surface px-4 py-4 flex flex-col gap-4 text-sm">
          {LINKS.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpenMenu(false)} className="text-dim">
              {label}
            </a>
          ))}
          <a href={PHONE_TEL} className="rounded-full bg-ink text-surface px-4 py-2.5 text-center font-medium">
            Обади се →
          </a>
        </div>
      )}
    </header>
  )
}
