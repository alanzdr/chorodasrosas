export interface BackgroundInfo {
  src: string,
  height: number,
  width: number
}

const BREAKPOINTS : BackgroundInfo[] = [
  {
    src: 'https://images.pexels.com/photos/2058498/pexels-photo-2058498.jpeg',
    height: 800,
    width: 400,
  },
  {
    src: 'https://images.pexels.com/photos/1039103/pexels-photo-1039103.jpeg',
    height: 900,
    width: 1000,
  },
  {
    src: 'https://images.pexels.com/photos/3817928/pexels-photo-3817928.jpeg',
    height: 700,
    width: 1400,
  },
  {
    src: 'https://images.pexels.com/photos/691604/pexels-photo-691604.jpeg',
    height: 1000,
    width: 1800,
  }
] 

export const getBackground = (width: number) : BackgroundInfo => {
  if (width <= 400) {
    return BREAKPOINTS[0]
  } else if (width <= 1000) {
    return BREAKPOINTS[1]
  } else if (width <= 1400) {
    return BREAKPOINTS[2]
  }
  return BREAKPOINTS[3]
}
