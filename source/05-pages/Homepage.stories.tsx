import { Meta, StoryObj } from '@storybook/nextjs';
import Hero, { HeroProps } from '../03-components/Hero/Hero';
import { Default as HeroStory } from '../03-components/Hero/Hero.stories';
import LandingPage from '../04-templates/LandingPage/LandingPage';
import PageWrapper from './page-wrappers/default';

interface HomepageStoryArgs {
  hero: Partial<HeroProps>;
}

const settings: Meta<HomepageStoryArgs> = {
  title: 'Pages/Homepage',
};

const Homepage: StoryObj<HomepageStoryArgs> = {
  render: () => (
    <PageWrapper>
      <LandingPage title="Homepage" hidePageTitle={true}>
        <Hero {...HeroStory.args} />
      </LandingPage>
    </PageWrapper>
  ),
};
Homepage.args = {
  hero: HeroStory.args,
};

export default settings;
export { Homepage };
