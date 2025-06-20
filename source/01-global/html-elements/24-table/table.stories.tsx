import { Meta, StoryObj } from '@storybook/nextjs';
import { withGlobalWrapper } from '../../../../.storybook/decorators';

const meta: Meta = {
  title: 'Global/HTML Elements/Table',
  decorators: [withGlobalWrapper],
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

const Table: StoryObj = {
  render: () => {
    return (
      <>
        <table>
          <caption>Table caption</caption>
          <thead>
            <tr>
              <th>Table Heading A</th>
              <th>Table Heading B</th>
              <th>Table Heading C</th>
              <th>Table Heading D</th>
            </tr>
          </thead>
          <tfoot>
            <tr>
              <th>Table Footer A</th>
              <th>Table Footer B</th>
              <th>Table Footer C</th>
              <th>Table Footer D</th>
            </tr>
          </tfoot>
          <tbody>
            <tr>
              <td>Table Cell A1</td>
              <td>Table Cell B1</td>
              <td>Table Cell C1</td>
              <td>Table Cell D1</td>
            </tr>
            <tr>
              <td>Table Cell A2</td>
              <td>Table Cell B2</td>
              <td>Table Cell C2</td>
              <td>Table Cell D2</td>
            </tr>
            <tr>
              <td>Table Cell A3</td>
              <td>Table Cell B3</td>
              <td>Table Cell C3</td>
              <td>Table Cell D3</td>
            </tr>
            <tr>
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
};

export default meta;
export { Table };
