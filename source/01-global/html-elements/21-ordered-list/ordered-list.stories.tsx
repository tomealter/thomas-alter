import { Meta, StoryObj } from '@storybook/nextjs';
import { withGlobalWrapper } from '../../../../.storybook/decorators';

const meta: Meta = {
  title: 'Global/HTML Elements/Ordered List',
  decorators: [withGlobalWrapper],
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

const OrderedList: StoryObj = {
  render: () => {
    return (
      <>
        <ol>
          <li>This is a list item in an ordered list</li>
          <li>
            An ordered list is a list in which the sequence of items is
            important. An ordered list does not necessarily contain sequence
            characters.
          </li>
          <li>
            Lists can be nested inside of each other
            <ol>
              <li>This is a nested list item</li>
              <li>
                This is another nested list item in an ordered list
                <ol>
                  <li>This is a nested list item</li>
                  <li>
                    This is another nested list item in an ordered list
                    <ol>
                      <li>This is a nested list item</li>
                      <li>
                        This is another nested list item in an ordered list
                      </li>
                    </ol>
                  </li>
                </ol>
              </li>
            </ol>
          </li>
          <li>This is the last list item</li>
        </ol>
        <ol>
          <li>
            <p>
              This is a paragraph within a list item in a different ordered
              list.
            </p>
            <p>This is another paragraph in this list item.</p>
          </li>
          <li>
            <p>
              This is a new paragraph within a different list item in the same
              ordered list.
            </p>
          </li>
        </ol>
      </>
    );
  },
};

export default meta;
export { OrderedList };
