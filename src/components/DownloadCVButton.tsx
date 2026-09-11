import { motion, useMotionValue, useSpring } from 'motion/react'
import { useCallback, useEffect, useRef, useState } from 'react'
import type { MouseEvent } from 'react'

const GLYPHS = '#$%&*<>[]{}/\\=+-_0123456789'
const SCRAMBLE_MS = 420
/** Cuánto se despega el botón del cursor, en px. Más de ~20 se siente como un juguete. */
const PULL_X = 14
const PULL_Y = 8

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
  const rafRef = useRef(0)
  const text = scrambled ?? label

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 260, damping: 18, mass: 0.4 })
  const springY = useSpring(y, { stiffness: 260, damping: 18, mass: 0.4 })

  useEffect(() => () => cancelAnimationFrame(rafRef.current), [])

  const scramble = useCallback(() => {
    cancelAnimationFrame(rafRef.current)
    const start = performance.now()
    const tick = (now: number) => {
      const progress = Math.min((now - start) / SCRAMBLE_MS, 1)
      const revealed = Math.floor(progress * label.length)
      let next = ''
      for (let i = 0; i < label.length; i++) {
        const char = label[i]
        next += char === ' ' || i < revealed ? char : GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
      }
      setScrambled(next)
      if (progress < 1) rafRef.current = requestAnimationFrame(tick)
      else setScrambled(null)
    }
    rafRef.current = requestAnimationFrame(tick)
  }, [label])

  const handleEnter = () => {
    if (!reduceMotion) scramble()
  }

  const handleMove = (event: MouseEvent<HTMLAnchorElement>) => {
    if (reduceMotion) return
    const rect = event.currentTarget.getBoundingClientRect()
    x.set(((event.clientX - (rect.left + rect.width / 2)) / rect.width) * PULL_X * 2)
    y.set(((event.clientY - (rect.top + rect.height / 2)) / rect.height) * PULL_Y * 2)
  }

  const handleLeave = () => {
    x.set(0)
    y.set(0)
    cancelAnimationFrame(rafRef.current)
    setScrambled(null)
  }

  return (
    <motion.a
      href={href}
      className={`btn-cv ${className}`}
      style={{ x: springX, y: springY }}
      onMouseEnter={handleEnter}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {text}
    </motion.a>
  )
}
