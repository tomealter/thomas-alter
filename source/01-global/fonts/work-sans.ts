import { Work_Sans as WorkSans } from 'next/font/google';

const workSans = WorkSans({
  display: 'auto',
  subsets: ['latin'],
  weight: 'variable',
  fallback: ['Arial', 'sans-serif'],
  variable: '--font-family-primary',
});

export default workSans;
