export interface Size {
  height: number,
  width: number
}

const BREAKPOINTS : Size[] = [
  {
    height: 300,
    width: 400,
  },
  {
    height: 480,
    width: 1000,
  },
  {
    height: 400,
    width: 1400,
  },
  {
    height: 480,
    width: 1800,
  }
] 

export const getSizes = (width: number) : Size => {
  if (width <= 600) {
    return BREAKPOINTS[0]
  } else if (width <= 1000) {
    return BREAKPOINTS[1]
  } else if (width <= 1400) {
    return BREAKPOINTS[2]
  }
  return BREAKPOINTS[3]
}
