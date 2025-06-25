import { Meta, StoryObj } from '@storybook/nextjs';
import { withGlobalWrapper } from '../../../.storybook/decorators';
import Grid from '../../02-layouts/Grid/Grid';
import CardComponent from './Card';
import cardArgs from './cardArgs';

const meta: Meta<typeof CardComponent> = {
  title: 'Components/Card',
  component: CardComponent,
  decorators: [withGlobalWrapper],
  tags: ['autodocs'],
};

type Story = StoryObj<typeof CardComponent>;
const Default: Story = {
  args: cardArgs,
  decorators: [
    Component => (
      <Grid numCols={3}>
        <Component />
      </Grid>
    ),
  ],
};

export default meta;
export { Default };
