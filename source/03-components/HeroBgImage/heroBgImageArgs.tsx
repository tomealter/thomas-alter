import { HeroBgImageProps } from '@/source/03-components/HeroBgImage/HeroBgImage';

const heroBgImageArgs = {
  hasOverlay: true,
  title: 'Hero Title',
  summary: <p>Hero summary text.</p>,
  button: {
    label: 'Hero Button',
    href: '#0',
  },
  heroImage: (
    <img src="https://picsum.photos/1600/800?image=11" alt="alt text" />
  ),
} satisfies HeroBgImageProps;

export default heroBgImageArgs;
