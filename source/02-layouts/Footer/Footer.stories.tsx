import { Meta, StoryObj } from '@storybook/nextjs';
import SampleContent from '../../06-utility/storybook/SampleContent';
import FooterLayout from './Footer';
import footerArgs from './footerArgs';

const meta: Meta<typeof FooterLayout> = {
  title: 'Layouts/Footer',
  component: FooterLayout,
};

type Story = StoryObj<typeof FooterLayout>;

const Footer: Story = {
  render: args => (
    <FooterLayout {...args}>
      <SampleContent>Footer Layout Content</SampleContent>
    </FooterLayout>
  ),
  args: footerArgs,
};

export default meta;
export { Footer };
