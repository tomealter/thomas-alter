import { Meta, StoryObj } from '@storybook/react';
import ContactMenuComponent from './ContactMenu';
import contactMenuArgs from './contactMenuArgs';

const meta: Meta<typeof ContactMenuComponent> = {
  title: 'Components/Contact Menu',
  component: ContactMenuComponent,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof ContactMenuComponent>;

const Default: Story = {
  args: {
    ...contactMenuArgs,
  },
};

export default meta;
export { Default };
