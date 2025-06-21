import { Outfit as OutfitFont } from 'next/font/google';

const outfit = OutfitFont({
  display: 'auto',
  subsets: ['latin'],
  weight: 'variable',
  fallback: ['Arial', 'sans-serif'],
  variable: '--font-family-secondary',
});

export default outfit;
