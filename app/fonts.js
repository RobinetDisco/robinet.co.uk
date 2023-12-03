import { Monoton, Noto_Serif_JP, Roboto } from 'next/font/google'

export const monoton = Monoton({
  weight: '400',
  subsets: ['latin'],
  fallback: ['cursive'],
  display: 'swap',
})

export const noto_serif_jp = Noto_Serif_JP({
  weight: '400',
  subsets: ['latin'],
  fallback: ['Times New Roman', 'times', 'serif'],
  display: 'swap',
})

export const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  fallback: [
    'Helvetica Neue',
    'arial',
    'Noto Sans',
    'Liberation Sans',
    'sans-serif',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'Noto Color Emoji',
  ],
  display: 'swap',
  variable: '--font-roboto',
})
