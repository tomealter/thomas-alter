import { Meta, StoryObj } from '@storybook/react';
import MarqueeComponent from './Marquee';
import marqueeArgs from './marqueeArgs';

const meta: Meta<typeof MarqueeComponent> = {
  title: 'Components/Marquee',
  component: MarqueeComponent,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof MarqueeComponent>;

const Default: Story = {
  args: {
    ...marqueeArgs,
  },
};

export default meta;
export { Default };
