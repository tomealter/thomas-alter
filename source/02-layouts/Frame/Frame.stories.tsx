import { Meta, StoryObj } from '@storybook/react';
import FrameComponent from './Frame';
import frameArgs from './frameArgs';

const meta: Meta<typeof FrameComponent> = {
  title: 'Layouts/Frame',
  component: FrameComponent,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof FrameComponent>;

const Default: Story = {
  args: {
    ...frameArgs,
  },
};

export default meta;
export { Default };
