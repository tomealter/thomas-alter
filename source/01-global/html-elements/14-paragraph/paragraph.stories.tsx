import { Meta, StoryObj } from '@storybook/nextjs';
import { withGlobalWrapper } from '../../../../.storybook/decorators';

const meta: Meta = {
  title: 'Global/HTML Elements/Paragraph',
  decorators: [withGlobalWrapper],
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

const Paragraph: StoryObj = {
  render: () => {
    return (
      <>
        <p>
          A paragraph (from the Greek paragraphos, “to write beside” or “written
          beside”) is a self-contained unit of a discourse in writing dealing
          with a particular point or idea. A paragraph consists of one or more
          sentences. Though not required by the syntax of any language,
          paragraphs are usually an expected part of formal writing, used to
          organize longer prose.
        </p>
        <p>
          This is what a successive paragraph looks like. Some people prefer a
          space between paragraphs, while others prefer sucessive paragraphs
          indented with no margins between them.
        </p>
      </>
    );
  },
};

export default meta;
export { Paragraph };
