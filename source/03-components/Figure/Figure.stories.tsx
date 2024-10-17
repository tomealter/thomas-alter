import { Meta, StoryObj } from '@storybook/react';
import parse from 'html-react-parser';
import { withGlobalWrapper } from '../../../.storybook/decorators';
import FigureComponent from './Figure';
import figureArgs from './figure.yml';

const meta: Meta<typeof FigureComponent> = {
  title: 'Components/Figure',
  component: FigureComponent,
  decorators: [withGlobalWrapper],
  tags: ['autodocs'],
};

type Story = StoryObj<typeof FigureComponent>;

const Default: Story = {
  args: {
    ...figureArgs,
    media: parse(figureArgs.media),
  },
};

const FigureCentered: Story = {
  args: {
    ...Default.args,
    modifierClasses: 'u-align-center',
  },
};

const FigureLeftAligned: Story = {
  args: {
    ...Default.args,
    modifierClasses: 'u-align-left',
  },
};

const FigureRightAligned: Story = {
  args: {
    ...Default.args,
    modifierClasses: 'u-align-right',
  },
};

export default meta;
export { Default, FigureCentered, FigureLeftAligned, FigureRightAligned };
