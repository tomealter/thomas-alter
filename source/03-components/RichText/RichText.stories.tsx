import { Meta, StoryObj } from '@storybook/react';
import RichTextComponent from './RichText';
import richTextArgs from './richTextArgs';

const meta: Meta<typeof RichTextComponent> = {
  title: 'Components/Rich Text',
  component: RichTextComponent,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof RichTextComponent>;

const Default: Story = {
  args: {
    ...richTextArgs,
  },
};

export default meta;
export { Default };
