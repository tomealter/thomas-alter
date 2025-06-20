import { Meta, StoryObj } from '@storybook/nextjs';
import { withGlobalWrapper } from '../../../../.storybook/decorators';

const settings: Meta = {
  title: 'Global/HTML Elements/Headings',
  decorators: [withGlobalWrapper],
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

interface HeadingsArgs {
  url: string;
}

const Headings: StoryObj<HeadingsArgs> = {
  render: ({ url }) => {
    return (
      <>
        <h1>Heading Level 1</h1>
        <h2>Heading Level 2</h2>
        <h3>Heading Level 3</h3>
        <h4>Heading Level 4</h4>
        <h5>Heading Level 5</h5>
        <h6>Heading Level 6</h6>
        <h1>
          <a href={url}>Heading Level 1 Link</a>
        </h1>
        <h2>
          <a href={url}>Heading Level 2 Link</a>
        </h2>
        <h3>
          <a href={url}>Heading Level 3 Link</a>
        </h3>
        <h4>
          <a href={url}>Heading Level 4 Link</a>
        </h4>
        <h5>
          <a href={url}>Heading Level 5 Link</a>
        </h5>
        <h6>
          <a href={url}>Heading Level 6 Link</a>
        </h6>
      </>
    );
  },
  args: {
    url: '#0',
  },
};

export default settings;
export { Headings };
