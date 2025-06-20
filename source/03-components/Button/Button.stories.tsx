import { Meta, StoryObj } from '@storybook/nextjs';
import { withGlobalWrapper } from '../../../.storybook/decorators';
import {
  Button as ButtonComponent,
  LinkButton as LinkButtonComponent,
  SharedButtonProps,
} from './Button';
import buttonArgs from './buttonArgs';

import type { JSX } from 'react';

function DemoButtons({ label, ...props }: SharedButtonProps): JSX.Element {
  return (
    <>
      <ButtonComponent label={label} {...props} />
      <LinkButtonComponent label={`Link ${label}`} {...props} />
      <ButtonComponent label={`Disabled ${label}`} {...props} disabled={true} />
    </>
  );
}

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof DemoButtons> = {
  title: 'Components/Button',
  component: DemoButtons,
  decorators: [withGlobalWrapper],
  // More on automatic documentation: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // More on controls: https://storybook.js.org/docs/react/essentials/controls
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'danger'],
      control: {
        type: 'radio',
      },
    },
  },
};

// More on writing stories: https://storybook.js.org/docs/react/writing-stories/introduction#how-to-write-stories
type Story = StoryObj<typeof DemoButtons>;
const Primary: Story = {
  args: { ...buttonArgs },
};

const Secondary: Story = {
  args: {
    ...buttonArgs,
    variant: 'secondary',
  },
};

const Danger: Story = {
  args: {
    ...buttonArgs,
    variant: 'danger',
  },
};

const Large: Story = {
  args: {
    ...buttonArgs,
    styleSize: 'large',
  },
};

const Small: Story = {
  args: {
    ...buttonArgs,
    styleSize: 'small',
  },
};

export default meta;
export { Danger, Large, Primary, Secondary, Small };
