import { useEffect, useRef } from 'react'

type Dot = {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  alpha: number
}

const DOT_COLOR = '160, 139, 208' // --color-accent (#a08bd0) en rgb

function createDots(width: number, height: number, count: number): Dot[] {
  return Array.from({ length: count }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.1,
    vy: (Math.random() - 0.5) * 0.1,
    radius: 1.5 + Math.random() * 2,
    alpha: 0.12 + Math.random() * 0.25,
  }))
}

export function DotsBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let dots: Dot[] = []
    let width = 0
    let height = 0
    let dpr = 1

    function resize() {
      width = window.innerWidth
      height = window.innerHeight
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas!.width = width * dpr
      canvas!.height = height * dpr
      canvas!.style.width = `${width}px`
      canvas!.style.height = `${height}px`
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)

      const density = 22000
      const count = Math.max(30, Math.min(70, Math.round((width * height) / density)))
      dots = createDots(width, height, count)
    }

    function draw() {
      ctx!.clearRect(0, 0, width, height)
      for (const dot of dots) {
        ctx!.beginPath()
        ctx!.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2)
        ctx!.fillStyle = `rgba(${DOT_COLOR}, ${dot.alpha})`
        ctx!.fill()
      }
    }

    function step() {
      for (const dot of dots) {
        dot.x += dot.vx
        dot.y += dot.vy
        if (dot.x < -10) dot.x = width + 10
        if (dot.x > width + 10) dot.x = -10
        if (dot.y < -10) dot.y = height + 10
        if (dot.y > height + 10) dot.y = -10
      }
      draw()
      rafId = requestAnimationFrame(step)
    }

    let rafId = 0
    let resizeTimeout = 0
    function handleResize() {
      window.clearTimeout(resizeTimeout)
      resizeTimeout = window.setTimeout(resize, 150)
    }

    resize()
    if (reduceMotion) {
      draw()
    } else {
      rafId = requestAnimationFrame(step)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.clearTimeout(resizeTimeout)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: -1,
        pointerEvents: 'none',
      }}
    />
  )
}
