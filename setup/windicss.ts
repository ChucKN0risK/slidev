import { resolve } from 'path'
import { defineWindiSetup } from '@slidev/types'

export default defineWindiSetup(() => ({
  darkMode: 'class',
  extract: {
    include: [resolve(__dirname, '**/*.{vue,ts, }')],
  },
  shortcuts: {
    // custom the default background
    'bg-main':
      'bg-gradient-to-r from-white to-secondary-50 dark:(bg-gradient-to-r from-primary-500 to-primary-600)',
    'bg-section': 'bg-gradient-to-r from-secondary-400 to-secondary-500',
    'txt-code': 'font-mono text-code',
    'txt-body-1': 'font-sans text-body-1 leading-loose',
    'txt-body-2': 'font-sans text-body-2 leading-loose',
    'txt-headline-1': 'font-sans text-headline-1 leading-normal',
  },
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#FFF',
      gray: '#939DA8',
      red: '#FF0000',
      blue: '#B1E1F7',
      purple: '#624DE3',
      blueSky: '#F6F8FB',
    },
    extend: {
      // fonts can be replaced here, remember to update the web font links in `index.html`
      fontFamily: {
        sans: '"Inter-Regular", sans-serif',
        title: ['Inter-Bold', 'sans-serif'],
        subtitle: ['Inter-SemiBold', 'sans-serif'],
        body: ['Inter-Regular', 'sans-serif'],
        mono: '"Fira Code", monospace',
        mounou: '"Fira Code", monospace',
      },
      fontSize: {
        'headline1': ['3.05rem', '1.2'],
        'body1': '1.25rem',
        'body2': '1rem',
        'code': ['0.8125rem', '1.53']
      },
      lineHeight: {
        'normal': '1.2',
        'loose': '1.6',
        'looooooose': '1.6',
      },
    },
  },
}))
