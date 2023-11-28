const MAX_DELAY = 'delay-2000'

const ANIMATIONS_DELAY: Record<number, string> = {
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
  10: MAX_DELAY
}

function createTransitionDelay (index: number, desktopIndex?: number) {
  if (desktopIndex !== undefined && desktopIndex !== index) {
    const mobile = ANIMATIONS_DELAY[index] || MAX_DELAY
    const desktop = ANIMATIONS_DELAY[desktopIndex] || `md:${MAX_DELAY}`
    return `${mobile} md:${desktop}`
  }
  return ANIMATIONS_DELAY[index] || MAX_DELAY
}

export function animate (index = 0, desktopIndex?: number) {
  return `animation-content ${createTransitionDelay(index, desktopIndex)}`
}

export function animateOpacity (index = 0, desktopIndex?: number) {
  return `animation-content opacity-only ${createTransitionDelay(
    index,
    desktopIndex
  )}`
}
