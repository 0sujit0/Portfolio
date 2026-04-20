import { useEffect, useLayoutEffect, useRef } from 'react'
import { animate, stagger } from 'animejs'

export function useScrollReveal({
  selector = null,
  staggerDelay = 120,
  duration = 900,
  translateY = '48px',
  threshold = 0.1,
  startDelay = 0,
} = {}) {
  const ref = useRef(null)

  useLayoutEffect(() => {
    const container = ref.current
    if (!container) return
    const targets = selector
      ? Array.from(container.querySelectorAll(selector))
      : [container]
    targets.forEach(el => {
      el.style.opacity = '0'
      el.style.transform = `translateY(${translateY}) scale(0.97)`
    })
  }, [])

  useEffect(() => {
    const container = ref.current
    if (!container) return

    const targets = selector
      ? Array.from(container.querySelectorAll(selector))
      : [container]

    if (!targets.length) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        animate(targets, {
          opacity: [0, 1],
          translateY: [translateY, '0px'],
          scale: [0.97, 1],
          delay: targets.length > 1 && staggerDelay
            ? stagger(staggerDelay, { start: startDelay })
            : startDelay,
          duration,
          ease: 'outExpo',
        })
        observer.disconnect()
      },
      { threshold }
    )

    observer.observe(container)
    return () => observer.disconnect()
  }, [])

  return ref
}
