'use client'

import { useEffect, useState } from 'react'

export function CursorTracker() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)
  const [coarsePointer, setCoarsePointer] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(pointer: coarse)')
    const updatePointerMode = () => setCoarsePointer(media.matches)

    updatePointerMode()
    media.addEventListener('change', updatePointerMode)

    let frame = 0

    const handlePointerMove = (event: PointerEvent) => {
      window.cancelAnimationFrame(frame)
      frame = window.requestAnimationFrame(() => {
        setPosition({ x: event.clientX, y: event.clientY })
        setVisible(true)
      })
    }

    const handlePointerLeave = () => setVisible(false)
    const handlePointerDown = (event: PointerEvent) => {
      setPosition({ x: event.clientX, y: event.clientY })
      setVisible(true)
    }

    window.addEventListener('pointermove', handlePointerMove)
    window.addEventListener('pointerleave', handlePointerLeave)
    window.addEventListener('pointerdown', handlePointerDown)

    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerleave', handlePointerLeave)
      window.removeEventListener('pointerdown', handlePointerDown)
      media.removeEventListener('change', updatePointerMode)
    }
  }, [])

  if (coarsePointer) {
    return null
  }

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[60] hidden md:block"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        opacity: visible ? 1 : 0,
        transition: 'opacity 180ms ease, transform 120ms ease-out',
      }}
    >
      <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-primary/35 bg-primary/10 shadow-[0_0_40px_rgba(0,0,0,0.08)] backdrop-blur-sm">
        <div className="absolute h-full w-full rounded-full border border-primary/20 animate-pulse" />
        <div className="absolute h-14 w-14 rounded-full bg-primary/20 blur-md" />
        <div className="h-4 w-4 rounded-full border border-primary bg-primary/80 shadow-[0_0_18px_hsl(var(--primary)/0.65)]" />
      </div>
    </div>
  )
}
