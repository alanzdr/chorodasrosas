'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

const ANIMATIONS_DELAY = {
  0: 'delay-0',
  1: 'delay-200',
  2: 'delay-400',
  3: 'delay-600',
  4: 'delay-800',
  5: 'delay-1000',
  6: 'delay-1200',
  7: 'delay-1400',
  8: 'delay-1600',
  9: 'delay-1800',
  10: 'delay-2000'
}

function transitionDelay (index: number, desktopIndex?: number) {
  if (desktopIndex !== undefined && desktopIndex !== index) {
    const mobile = ANIMATIONS_DELAY[index] || 'delay-2000'
    const desktop = ANIMATIONS_DELAY[desktopIndex] || 'md:delay-2000'
    return `${mobile} md:${desktop}`
  }
  return ANIMATIONS_DELAY[index] || ''
}

const useScrollAnimation = <T = HTMLDivElement>() => {
  const reference = useRef<T>()
  const [isVisible, setVisible] = useState(false)

  useEffect(() => {
    if (!reference.current || isVisible) return

    const onIntersect = ([entry]: IntersectionObserverEntry[]) => {
      if (entry.isIntersecting) {
        setVisible(true)
      }
    }

    const observer = new IntersectionObserver(onIntersect, {
      rootMargin: '0px 0px -25% 0px'
    })

    observer.observe(reference.current as unknown as Element)

    return () => observer.disconnect()
  }, [isVisible])

  const animate = useCallback(
    (index = 0, desktopIndex?: number) => {
      if (!isVisible) return 'transition-scroll-hidden'
      return `transition-scroll-showing ${transitionDelay(index, desktopIndex)}`
    },
    [isVisible]
  )

  return {
    scrollAnimationRef: reference,
    animate,
    isVisible
  }
}

export default useScrollAnimation
