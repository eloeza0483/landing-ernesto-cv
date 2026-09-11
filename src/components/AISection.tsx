import { useLanguage } from '../i18n/useLanguage'
import { Icon } from './Icon'

export function AISection() {
  const { t } = useLanguage()
  const { kickerLine1, kickerLine2, statement, cards } = t.ai

  return (
    <section id="ia" className="border-b border-(--color-line) px-5 py-9 sm:px-11 lg:py-17">
      <div className="flex flex-col gap-9 lg:grid lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-12">
        <h2 className="m-0 text-[15px] font-semibold tracking-[0.06em] uppercase">
          {kickerLine1}
          <br />
          {kickerLine2}
        </h2>
        <div className="flex flex-col gap-7.5">
          <p
            className="m-0 max-w-[24ch] border-l pl-5.5 text-2xl font-medium leading-[1.32] tracking-[-0.025em] sm:text-[27px]"
            style={{ borderColor: 'var(--color-accent)' }}
          >
            {statement}
          </p>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {cards.map((card) => (
              <div className="flex flex-col gap-2.5" key={card.title}>
                <div className="flex items-center gap-2.5 text-base font-semibold">
                  <Icon name={card.icon} size={19} />
                  {card.title}
                </div>
                <p className="m-0 text-[15px] leading-[1.6]" style={{ color: 'var(--color-muted)' }}>
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
