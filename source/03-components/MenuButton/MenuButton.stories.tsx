import { Meta, StoryObj } from '@storybook/react';
import MenuButtonComponent from './MenuButton';
import menuButtonArgs from './menuButtonArgs';

const meta: Meta<typeof MenuButtonComponent> = {
  title: 'Components/Menu Button',
  component: MenuButtonComponent,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof MenuButtonComponent>;

const Default: Story = {
  args: {
    ...menuButtonArgs,
  },
};

export default meta;
export { Default };
