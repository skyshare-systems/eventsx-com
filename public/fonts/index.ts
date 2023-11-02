import { Outfit, Titillium_Web, Inter } from 'next/font/google';

export const titilium = Titillium_Web({
  weight: ['200', '300', '400', '600', '700', '900'],
  subsets: ['latin-ext'],
});

export const outfit = Outfit({
  subsets:['latin-ext']
})

export const inter = Inter({
  weight: ['200', '300', '400', '600', '700', '900'],
  subsets: ['latin-ext'],
})

