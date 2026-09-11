import { CONTACT } from '../config'
import { useLanguage } from '../i18n/useLanguage'
import { Icon } from './Icon'

export function ContactSection() {
  const { t } = useLanguage()

  return (
    <section id="contacto" className="grid grid-cols-1 gap-8 px-5 py-9 sm:px-11 lg:grid-cols-[200px_minmax(0,1fr)] lg:py-17">
      <h2 className="m-0 font-mono text-[15px] font-medium tracking-[0.05em] uppercase">{t.contactTitle}</h2>
      <div className="flex flex-col gap-6.5">
        <a
          href={`mailto:${CONTACT.email}`}
          className="u m-0 self-start font-display text-[20px] font-medium tracking-[-0.04em] sm:text-[30px]"
          style={{ color: 'var(--color-fg)' }}
        >
          {CONTACT.email}
        </a>
        <div className="flex flex-wrap items-center gap-5 text-[15px] sm:gap-7">
          <a href={CONTACT.githubHref} className="u inline-flex items-center gap-2">
            <Icon name="github" size={18} />
            {CONTACT.github}
          </a>
          <a href={CONTACT.linkedinHref} className="u">
            LinkedIn
          </a>
          <a href={CONTACT.phoneHref} className="u">
            {CONTACT.phone}
          </a>
          <span style={{ color: 'var(--color-dim)' }}>{t.location}</span>
        </div>
      </div>
    </section>
  )
}
