import { Meta, StoryObj } from '@storybook/nextjs';
import Grid from '../02-layouts/Grid/Grid';
import Section from '../02-layouts/Section/Section';
import AnimatedText from '../03-components/AnimatedText/AnimatedText';
import Card from '../03-components/Card/Card';
import ContactMenu from '../03-components/ContactMenu/ContactMenu';
import Hero, { HeroProps } from '../03-components/Hero/Hero';
import { Default as HeroStory } from '../03-components/Hero/Hero.stories';
import Marquee from '../03-components/Marquee/Marquee';
import RichText from '../03-components/RichText/RichText';
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
        <Marquee text="Developer // Woodworker // Dog Lover // Drummer" />
        <Section title="About" modifierClasses="u-spacing-block-end-20">
          <AnimatedText text="I'm a Front-End UI Engineer with 12 years of experience bringing pixels to life. I specialize in building robust design systems and crafting smooth, engaging animations that make interfaces feel just right. Whether it's architecting scalable components, optimizing performance, or theming for modern CMS platforms, I bring both technical precision and creative flair to every project." />
          <RichText>
            <dl>
              <dt className="fade-in">Core Technoligies & Frameworks</dt>
              <dd className="fade-in">
                HTML, CSS, JavaScript, PHP, Twig, React, Next.js
              </dd>
              <dt className="fade-in">Styling & UI</dt>
              <dd className="fade-in">
                SCSS, CSS Modules, Tailwind, Emotion, PostCSS
              </dd>
              <dt className="fade-in">Animation & Interaction</dt>
              <dd className="fade-in">GSAP, Framer Motion, Three.js</dd>
              <dt className="fade-in">Tooling & DevOps</dt>
              <dd className="fade-in">
                Git, Webpack, Docker, DDEV, Buildkite, Jenkins, Vercel, Jira
              </dd>
              <dt className="fade-in">Component & Design System Tools</dt>
              <dd className="fade-in">Storybook, PatternLab</dd>
            </dl>
          </RichText>
          <RichText>
            <h3 className="fade-in">Hit Me Up</h3>
            <p className="fade-in">
              I'm always looking for new opportunities to work on interesting
              projects. If you have a project in mind, or just want to say hi,
              feel free to reach out.
            </p>
            <ContactMenu modifierClasses="fade-in" />
          </RichText>
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
