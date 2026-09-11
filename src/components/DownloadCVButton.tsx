import { useCallback, useEffect, useRef, useState } from 'react'
import type { MouseEvent } from 'react'

const GLYPHS = '#$%&*<>[]{}/\\=+-_0123456789'
const SCRAMBLE_MS = 420
/** Cuánto se despega el botón del cursor, en px. Más de ~20 se siente como un juguete. */
const PULL_X = 14
const PULL_Y = 8
const STIFFNESS = 0.12
const DAMPING = 0.75

function usePrefersReducedMotion() {
  const [reduce, setReduce] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )
  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = () => setReduce(query.matches)
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])
  return reduce
}

interface DownloadCVButtonProps {
  href: string
  label: string
  className: string
}

export function DownloadCVButton({ href, label, className }: DownloadCVButtonProps) {
  const reduceMotion = usePrefersReducedMotion()
  const [scrambled, setScrambled] = useState<string | null>(null)
  const text = scrambled ?? label

  const ref = useRef<HTMLAnchorElement>(null)
  const target = useRef({ x: 0, y: 0 })
  const position = useRef({ x: 0, y: 0 })
  const velocity = useRef({ x: 0, y: 0 })
  const pullRaf = useRef(0)
  const scrambleRaf = useRef(0)

  useEffect(
    () => () => {
      cancelAnimationFrame(pullRaf.current)
      cancelAnimationFrame(scrambleRaf.current)
    },
    [],
  )

  const pullTo = useCallback((x: number, y: number) => {
    target.current.x = x
    target.current.y = y
    if (pullRaf.current) return

    function frame() {
      const to = target.current
      const at = position.current
      const speed = velocity.current

      speed.x = (speed.x + (to.x - at.x) * STIFFNESS) * DAMPING
      speed.y = (speed.y + (to.y - at.y) * STIFFNESS) * DAMPING
      at.x += speed.x
      at.y += speed.y

      const settled =
        Math.abs(to.x - at.x) < 0.05 &&
        Math.abs(to.y - at.y) < 0.05 &&
        Math.abs(speed.x) < 0.05 &&
        Math.abs(speed.y) < 0.05
      if (settled) {
        at.x = to.x
        at.y = to.y
      }

      const el = ref.current
      if (el) {
        el.style.transform = at.x || at.y ? `translate3d(${at.x.toFixed(2)}px, ${at.y.toFixed(2)}px, 0)` : ''
      }
      pullRaf.current = settled ? 0 : requestAnimationFrame(frame)
    }

    pullRaf.current = requestAnimationFrame(frame)
  }, [])

  const scramble = useCallback(() => {
    cancelAnimationFrame(scrambleRaf.current)
    const start = performance.now()

    function frame(now: number) {
      const progress = Math.min((now - start) / SCRAMBLE_MS, 1)
      const revealed = Math.floor(progress * label.length)
      let next = ''
      for (let i = 0; i < label.length; i++) {
        const char = label[i]
        next += char === ' ' || i < revealed ? char : GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
      }
      setScrambled(next)
      if (progress < 1) scrambleRaf.current = requestAnimationFrame(frame)
      else setScrambled(null)
    }

    scrambleRaf.current = requestAnimationFrame(frame)
  }, [label])

  const handleEnter = () => {
    if (!reduceMotion) scramble()
  }

  const handleMove = (event: MouseEvent<HTMLAnchorElement>) => {
    if (reduceMotion) return
    const rect = event.currentTarget.getBoundingClientRect()
    pullTo(
      ((event.clientX - (rect.left + rect.width / 2)) / rect.width) * PULL_X * 2,
      ((event.clientY - (rect.top + rect.height / 2)) / rect.height) * PULL_Y * 2,
    )
  }

  const handleLeave = () => {
    pullTo(0, 0)
    cancelAnimationFrame(scrambleRaf.current)
    setScrambled(null)
  }

  return (
    <a
      ref={ref}
      href={href}
      className={`btn-cv ${className}`}
      onMouseEnter={handleEnter}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {text}
    </a>
  )
}
