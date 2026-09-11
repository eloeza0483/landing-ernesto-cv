import type { ReactNode } from 'react'

interface InfoRowProps {
  label: string
  value: ReactNode
  animClass?: string
}

/** Una fila "etiqueta / valor" de la ficha del hero (Ubicación, Idiomas, Impacto, Estado…). */
export function InfoRow({ label, value, animClass = '' }: InfoRowProps) {
  return (
    <div className={`rise ${animClass} flex items-center justify-between gap-5 border-b border-(--color-line) py-3.5`}>
      <span className="lbl">{label}</span>
      <span className="text-sm">{value}</span>
    </div>
  )
}
