import { useEffect, useState } from 'react'
import { useLanguage } from '../i18n/useLanguage'

export function BackToTop() {
  const { lang } = useLanguage()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 560)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label={lang === 'es' ? 'Volver arriba' : 'Back to top'}
      className="back-to-top fixed right-5 bottom-5 z-50 flex h-9 w-9 items-center justify-center rounded-full border sm:right-8 sm:bottom-8"
      style={{
        borderColor: 'var(--color-line)',
        background: 'var(--color-bg)',
        color: 'var(--color-dim)',
        opacity: visible ? 0.85 : 0,
        transform: visible ? 'none' : 'translateY(6px)',
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  )
}
