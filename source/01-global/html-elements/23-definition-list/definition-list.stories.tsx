import { Meta, StoryObj } from '@storybook/nextjs';
import { withGlobalWrapper } from '../../../../.storybook/decorators';

const settings: Meta = {
  title: 'Global/HTML Elements/Definition List',
  decorators: [withGlobalWrapper],
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

const DefinitionList: StoryObj = {
  render: () => {
    return (
      <>
        <dl>
          <dt>Definition List</dt>
          <dd>
            A number of connected items or names written or printed
            consecutively, typically one below the other.
          </dd>
          <dt>This is a term.</dt>
          <dd>
            This is the definition of that term, which both live in a{' '}
            <code>dl</code>.
          </dd>
          <dt>Here is another term.</dt>
          <dd>And it gets a definition too, which is this line.</dd>
          <dt>Here is a term that shares a definition with the term below.</dt>
          <dt>Here is a term that shares a definition with the term above.</dt>
          <dd>
            And they both get the same definition too, which is this line.
          </dd>
        </dl>
      </>
    );
  },
  storyName: 'Definition List',
};

export default settings;
export { DefinitionList };
