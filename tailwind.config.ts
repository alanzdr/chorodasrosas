import { withTV } from 'tailwind-variants/transformer'
import plugin from 'tailwindcss/plugin'
import { showAnimationPlugin } from 'zelindro-ui/plugins/tailwindcss'

export default withTV({
  mode: 'jit',
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx,css}'],

  corePlugins: {
    container: false,
    transitionDelay: false,
  },
  theme: {
    colors: {
      transparent: 'transparent',
      current: {
        DEFAULT: 'currentColor',
        primary: 'var(--color-primary)',
        background: 'var(--color-background)',
        accent: {
          DEFAULT: 'var(--color-accent)',
          text: 'var(--color-accent-text)',
        },
      },
      gray: {
        dark: '#333',
        light: '#c9c9d1',
      },
      red: '#b40f20',
      white: '#fff',
      black: '#000',
    },
    extend: {
      fontFamily: {
        roboto: ['var(--font-roboto)'],
        amatic: ['var(--font-amaticsc)'],
      },
      transitionDuration: {
        DEFAULT: '300ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'var(--ease-out)',
      },
      boxShadow: {
        card: '',
      },
    },
  },
  safelist: [
    'animated',
    'animation-only-opacity',
    {
      pattern: /delay-/,
      variants: ['md'],
    },
  ],
  plugins: [
    showAnimationPlugin({}),
    plugin(function ({ addVariant }) {
      addVariant('group-active', () => {
        return `:merge(.group).active &`
      })
      addVariant('control-active', '.control-active &')
      addVariant('current-active', '&.current-active')
    }),
  ],
})
