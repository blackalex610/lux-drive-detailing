import { useEffect, useState } from 'react'

export function useSofiaStatus() {
  const [status, setStatus] = useState({ open: null, text: 'Проверка на работно време…' })

  useEffect(() => {
    function tick() {
      try {
        const parts = new Intl.DateTimeFormat('en-GB', {
          timeZone: 'Europe/Sofia',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        }).formatToParts(new Date())
        const h = parseInt(parts.find((p) => p.type === 'hour').value, 10)
        const m = parseInt(parts.find((p) => p.type === 'minute').value, 10)
        const mins = h * 60 + m
        const open = mins >= 9 * 60 && mins < 21 * 60

        setStatus(
          open
            ? { open: true, text: 'Отворено сега · до 21:00' }
            : { open: false, text: 'Затворено · отваря в 09:00' },
        )
      } catch {
        setStatus({ open: null, text: 'Всеки ден 09:00–21:00' })
      }
    }

    tick()
    const id = setInterval(tick, 60000)
    return () => clearInterval(id)
  }, [])

  return status
}
