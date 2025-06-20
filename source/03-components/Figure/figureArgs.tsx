import { FigureProps } from '@/source/03-components/Figure/Figure';

const figureArgs = {
  media: (
    <img
      src="https://picsum.photos/200/200?image=237"
      alt="dog photo"
      width="200"
      height="200"
    />
  ),
  caption:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla semper vel metus at cursus.',
  modifierClasses: '',
} satisfies FigureProps;

export default figureArgs;
