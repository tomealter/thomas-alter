import { Meta, StoryObj } from '@storybook/nextjs';
import { withGlobalWrapper } from '../../../../.storybook/decorators';

const meta: Meta = {
  title: 'Global/HTML Elements/Table/Table with Column and Row Headers',
  decorators: [withGlobalWrapper],
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

const TableWithColumnAndRowHeaders: StoryObj = {
  render: () => {
    return (
      <>
        <table>
          <caption>Table caption</caption>
          <thead>
            <tr>
              <th></th>
              <th scope="col">Table Heading A</th>
              <th scope="col">Table Heading B</th>
              <th scope="col">Table Heading C</th>
              <th scope="col">Table Heading D</th>
            </tr>
          </thead>
          <tfoot>
            <tr>
              <th></th>
              <th scope="col">Table Footer A</th>
              <th scope="col">Table Footer B</th>
              <th scope="col">Table Footer C</th>
              <th scope="col">Table Footer D</th>
            </tr>
          </tfoot>
          <tbody>
            <tr>
              <th scope="row">Table Heading 1</th>
              <td>Table Cell A1</td>
              <td>Table Cell B1</td>
              <td>Table Cell C1</td>
              <td>Table Cell D1</td>
            </tr>
            <tr>
              <th scope="row">Table Heading 2</th>
              <td>Table Cell A2</td>
              <td>Table Cell B2</td>
              <td>Table Cell C2</td>
              <td>Table Cell D2</td>
            </tr>
            <tr>
              <th scope="row">Table Heading 3</th>
              <td>Table Cell A3</td>
              <td>Table Cell B3</td>
              <td>Table Cell C3</td>
              <td>Table Cell D3</td>
            </tr>
            <tr>
              <th scope="row">Table Heading 4</th>
              <td>Table Cell A4</td>
              <td>Table Cell B4</td>
              <td>Table Cell C4</td>
              <td>Table Cell D4</td>
            </tr>
          </tbody>
        </table>
      </>
    );
  },
  storyName: 'Table with Column and Row Headers',
};

export default meta;
export { TableWithColumnAndRowHeaders };
