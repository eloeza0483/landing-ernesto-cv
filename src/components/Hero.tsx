import { CV_PDF_URL } from '../config'
import retrato from '../assets/retrato.jpg'
import { DownloadCVButton } from './DownloadCVButton'
import { useLanguage } from '../i18n/useLanguage'
import { InfoRow } from './InfoRow'
import { StatusValue } from './StatusValue'

export function Hero() {
  const { t } = useLanguage()
  const { hero, info } = t

  const title = (
    <>
      {hero.titleLead}
      <span style={{ color: 'var(--color-accent)' }}>{hero.titleAccent}</span>
      {hero.titleTail}
    </>
  )

  const ctaButtons = (
    <div className="rise d3 flex gap-3.5">
      <a
        href="#proyectos"
        className="btn inline-flex h-13 items-center px-7 text-[15px] font-semibold"
        style={{ background: 'var(--color-fg)', color: 'var(--color-bg)' }}
      >
        {hero.ctaPrimary}
      </a>
      <DownloadCVButton
        href={CV_PDF_URL}
        label={hero.ctaSecondary}
        className="inline-flex h-13 items-center border px-7 text-[15px] font-medium"
      />
    </div>
  )

  const infoRows = (
    <>
      <InfoRow label={info.location.label} value={info.location.value} animClass="d3" />
      <InfoRow label={info.languages.label} value={info.languages.value} animClass="d4" />
      <InfoRow label={info.workSetup.label} value={info.workSetup.value} animClass="d5" />
      <InfoRow label={info.impact.label} value={info.impact.value} animClass="d6" />
      <InfoRow label={info.status.label} value={<StatusValue label={info.status.value} />} animClass="d7" />
    </>
  )

  return (
    <>
      {/* Escritorio */}
      <div className="hidden border-b border-(--color-line) px-11 py-19 lg:grid lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start lg:gap-18">
        <div className="flex flex-col gap-8.5">
          <h1 className="rise d1 m-0 font-display text-[44px] leading-[1.14] font-bold tracking-[-0.045em] text-wrap-balance">
            {title}
          </h1>
          <p className="rise d2 m-0 max-w-[62ch] text-[19px] leading-[1.6] text-wrap-pretty" style={{ color: 'var(--color-muted)' }}>
            {hero.body}
          </p>
          {ctaButtons}
        </div>

        <div className="rise d2 flex flex-col gap-7">
          <img
            src={retrato}
            alt="Ernesto Loeza Camargo"
            width={320}
            height={320}
            className="block h-[320px] w-[320px] object-cover"
          />
          <div className="flex flex-col border-t-2" style={{ borderColor: 'var(--color-fg)' }}>
            {infoRows}
          </div>
        </div>
      </div>

      {/* Móvil / tablet */}
      <div className="flex flex-col gap-5.5 border-b border-(--color-line) px-5 py-7 lg:hidden">
        <div className="flex items-center gap-4">
          <img
            src={retrato}
            alt="Ernesto Loeza Camargo"
            width={104}
            height={104}
            className="rise d1 h-[104px] w-[104px] shrink-0 border object-cover"
            style={{ borderColor: 'var(--color-line)' }}
          />
          <span className="lbl" style={{ textTransform: 'none', letterSpacing: '0.01em' }}>
            {t.role}
            <br />
            {t.info.location.value}
          </span>
        </div>
        <h1 className="rise d2 m-0 font-display text-[26px] leading-[1.2] font-bold tracking-[-0.04em] text-wrap-balance">
          {title}
        </h1>
        <p className="rise d3 m-0 text-base leading-[1.62]" style={{ color: 'var(--color-muted)' }}>
          {hero.body}
        </p>
        <div className="flex flex-col gap-2.5">
          <a
            href="#proyectos"
            className="btn flex h-13 items-center justify-center text-base font-semibold"
            style={{ background: 'var(--color-fg)', color: 'var(--color-bg)' }}
          >
            {hero.ctaPrimary}
          </a>
          <DownloadCVButton
            href={CV_PDF_URL}
            label={hero.ctaSecondary}
            className="flex h-13 items-center justify-center border text-base font-medium"
          />
        </div>
        <div className="flex flex-col">{infoRows}</div>
      </div>
    </>
  )
}
