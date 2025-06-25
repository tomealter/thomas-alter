import { Meta, StoryObj } from '@storybook/nextjs';
import Grid from '../02-layouts/Grid/Grid';
import Section from '../02-layouts/Section/Section';
import Card from '../03-components/Card/Card';
import Hero, { HeroProps } from '../03-components/Hero/Hero';
import { Default as HeroStory } from '../03-components/Hero/Hero.stories';
import Marquee from '../03-components/Marquee/Marquee';
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
        <Marquee
          text="Hard Work // Happy Clients"
          modifierClasses="marquee--work"
        />
        <Section title="Work">
          <Grid numCols={3}>
            <Card
              url="#0"
              title="Virginia DMV"
              summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              eyebrow="Drupal | Storybook"
              imageSrc="/images/work/va-dmv.jpg"
            />
            <Card
              url="#0"
              title="Smithsonian Kaleidoscope"
              summary="Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              eyebrow="NextJs | Storybook"
              imageSrc="/images/work/sikscope.jpg"
            />
            <Card
              url="#0"
              title="March of Dimes"
              summary="Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              eyebrow="Drupal | Storybook"
              imageSrc="/images/work/march-of-dimes.jpg"
            />
            <Card
              url="#0"
              title="Virginia DMV"
              summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              eyebrow="Drupal | Storybook"
              imageSrc="/images/work/va-dmv.jpg"
            />
            <Card
              url="#0"
              title="Smithsonian Kaleidoscope"
              summary="Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              eyebrow="NextJs | Storybook"
              imageSrc="/images/work/sikscope.jpg"
            />
            <Card
              url="#0"
              title="March of Dimes"
              summary="Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              eyebrow="Drupal | Storybook"
              imageSrc="/images/work/march-of-dimes.jpg"
            />
            <Card
              url="#0"
              title="Virginia DMV"
              summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              eyebrow="Drupal | Storybook"
              imageSrc="/images/work/va-dmv.jpg"
            />
            <Card
              url="#0"
              title="Smithsonian Kaleidoscope"
              summary="Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              eyebrow="NextJs | Storybook"
              imageSrc="/images/work/sikscope.jpg"
            />
            <Card
              url="#0"
              title="March of Dimes"
              summary="Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              eyebrow="Drupal | Storybook"
              imageSrc="/images/work/march-of-dimes.jpg"
            />
            <Card
              url="#0"
              title="Virginia DMV"
              summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              eyebrow="Drupal | Storybook"
              imageSrc="/images/work/va-dmv.jpg"
            />
            <Card
              url="#0"
              title="Smithsonian Kaleidoscope"
              summary="Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              eyebrow="NextJs | Storybook"
              imageSrc="/images/work/sikscope.jpg"
            />
            <Card
              url="#0"
              title="March of Dimes"
              summary="Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              eyebrow="Drupal | Storybook"
              imageSrc="/images/work/march-of-dimes.jpg"
            />
          </Grid>
        </Section>
        <Marquee text="Too Many Hobbies // Not Enough Time" />
        <Section title="About">
          <h3>About Me</h3>
        </Section>
      </LandingPage>
    </PageWrapper>
  ),
};
Homepage.args = {
  hero: HeroStory.args,
};

export default settings;
export { Homepage };
