import { techIcons } from '../data/techIcons'

interface IconProps {
  name: string
  size?: number
  className?: string
}

/** Icono de marca (Simple Icons, CC0) como SVG inline. */
export function Icon({ name, size = 18, className }: IconProps) {
  const icon = techIcons[name]
  if (!icon) return null
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      role="img"
      aria-label={icon.title}
      className={className}
    >
      <path d={icon.path} />
    </svg>
  )
}
