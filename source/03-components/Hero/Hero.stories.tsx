import { Meta, StoryObj } from '@storybook/react';
import HeroComponent from './Hero';
import heroArgs from './heroArgs';

const meta: Meta<typeof HeroComponent> = {
  title: 'Components/Hero',
  component: HeroComponent,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof HeroComponent>;

const Default: Story = {
  args: {
    ...heroArgs,
  },
};

export default meta;
export { Default };
