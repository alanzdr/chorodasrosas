module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.{js,jsx,ts,tsx,css}'
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: {
        dark: '#333',
        light: '#c9c9d1'
      },
      red: '#b40f20',
      white: '#fff',
      black: '#000'
    },
    extend: {
      fontFamily: {
        roboto: ['var(--font-roboto)'],
        amatic: ['var(--font-amaticsc)']
      },
      transitionDelay: {
        400: '400ms',
        600: '600ms',
        800: '800ms',
        1200: '1200ms',
        1400: '1400ms',
        1600: '1600ms',
        1800: '1800ms',
        2000: '2000ms'
      }
    }
  },
  safelist: [
    {
      pattern: /delay-/,
      variants: ['md']
    }
  ]
}
