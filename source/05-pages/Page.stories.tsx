import { Meta, StoryObj } from '@storybook/react';
import { WYSIWYG } from '../03-components/Wysiwyg/Wysiwyg.stories';
import PageTemplate, { PageProps } from '../04-templates/Page/Page';
import PageWrapper from './page-wrappers/default';

interface PageStoryArgs {
  page: PageProps;
}

const settings: Meta<PageStoryArgs> = {
  title: 'Pages/Page',
};

const Page: StoryObj<PageStoryArgs> = {
  render: args => (
    <PageWrapper>
      <PageTemplate {...args.page} />
    </PageWrapper>
  ),
  args: {
    page: {
      title: 'Page Title',
      children: WYSIWYG.render && <WYSIWYG.render {...WYSIWYG.args} />,
    },
  },
};

export default settings;
export { Page };
