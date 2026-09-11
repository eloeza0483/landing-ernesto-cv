import { useLanguage } from '../i18n/useLanguage'

export function Header() {
  const { lang, t, setLang } = useLanguage()

  return (
    <div className="flex items-center justify-between border-b border-(--color-line) px-6 py-5 sm:px-11">
      <div className="flex items-baseline gap-3.5">
        <span className="text-[15px] font-semibold tracking-[-0.01em]">Ernesto Loeza Camargo</span>
        <span className="lbl hidden sm:inline">{t.role}</span>
      </div>

      <div className="flex items-center gap-4 sm:gap-7">
        <nav className="hidden items-center gap-7 sm:flex">
          <a href="#stack" className="lbl u" style={{ color: 'var(--color-dim)' }}>
            {t.nav.stack}
          </a>
          <a href="#proyectos" className="lbl u" style={{ color: 'var(--color-dim)' }}>
            {t.nav.projects}
          </a>
          <a href="#ia" className="lbl u" style={{ color: 'var(--color-dim)' }}>
            {t.nav.ai}
          </a>
          <a href="#contacto" className="lbl u" style={{ color: 'var(--color-dim)' }}>
            {t.nav.contact}
          </a>
        </nav>

        <div className="flex gap-0.5 border border-(--color-line) p-1">
          <button
            type="button"
            onClick={() => setLang('es')}
            className="lang-pill lbl px-2.5 py-1"
            style={
              lang === 'es'
                ? { color: 'var(--color-bg)', background: 'var(--color-accent)' }
                : undefined
            }
          >
            ES
          </button>
          <button
            type="button"
            onClick={() => setLang('en')}
            className="lang-pill lbl px-2.5 py-1"
            style={
              lang === 'en'
                ? { color: 'var(--color-bg)', background: 'var(--color-accent)' }
                : undefined
            }
          >
            EN
          </button>
        </div>
      </div>
    </div>
  )
}
