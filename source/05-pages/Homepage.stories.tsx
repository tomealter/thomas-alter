import { Meta, StoryObj } from '@storybook/nextjs';
import { CardProps } from '../03-components/Card/Card';
import { Default as CardStory } from '../03-components/Card/Card.stories';
import Hero from '../03-components/Hero/Hero';
import { HeroBgImageProps } from '../03-components/HeroBgImage/HeroBgImage';
import { Default as HeroStory } from '../03-components/HeroBgImage/HeroBgImage.stories';
import LandingPage from '../04-templates/LandingPage/LandingPage';
import PageWrapper from './page-wrappers/default';

interface HomepageStoryArgs {
  card: Partial<CardProps>;
  hero: Partial<HeroBgImageProps>;
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
  card: CardStory.args,
};

export default settings;
export { Homepage };
