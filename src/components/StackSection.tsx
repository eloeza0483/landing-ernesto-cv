import { Fragment } from 'react'
import { useLanguage } from '../i18n/useLanguage'
import { Icon } from './Icon'

function Chips({ items }: { items: { name: string; icon?: string }[] }) {
  return (
    <>
      {items.map((item) => (
        <span className="chip" key={item.name}>
          {item.icon && <Icon name={item.icon} size={18} />}
          {item.name}
        </span>
      ))}
    </>
  )
}

export function StackSection() {
  const { t } = useLanguage()

  return (
    <section id="stack" className="border-b border-(--color-line) px-5 py-9 sm:px-11 lg:py-17">
      <h2 className="m-0 mb-9 text-[15px] font-semibold tracking-[0.06em] uppercase">{t.stackTitle}</h2>

      {/* Escritorio: retícula con reglas horizontales */}
      <div className="hidden lg:grid lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-x-12">
        {t.stack.map((group) => (
          <Fragment key={group.label}>
            <div className="lbl border-t border-(--color-line) py-4.5">{group.label}</div>
            <div className="flex flex-wrap items-center gap-x-6.5 gap-y-3 border-t border-(--color-line) py-4.5">
              <Chips items={group.items} />
            </div>
          </Fragment>
        ))}
      </div>

      {/* Móvil / tablet: grupos apilados, sin reglas */}
      <div className="flex flex-col gap-6.5 lg:hidden">
        {t.stack.map((group) => (
          <div className="flex flex-col gap-3" key={group.label}>
            <span className="lbl">{group.label}</span>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
              <Chips items={group.items} />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
