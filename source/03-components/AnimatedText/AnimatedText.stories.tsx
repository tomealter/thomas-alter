import { Meta, StoryObj } from '@storybook/react';
import AnimatedTextComponent from './AnimatedText';
import animatedTextArgs from './animatedTextArgs';

const meta: Meta<typeof AnimatedTextComponent> = {
  title: 'Components/Animated Text',
  component: AnimatedTextComponent,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof AnimatedTextComponent>;

const Default: Story = {
  args: {
    ...animatedTextArgs,
  },
};

export default meta;
export { Default };
