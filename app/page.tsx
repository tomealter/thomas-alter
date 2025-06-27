import Grid from '@/source/02-layouts/Grid/Grid';
import Section from '@/source/02-layouts/Section/Section';
import AnimatedText from '@/source/03-components/AnimatedText/AnimatedText';
import Card from '@/source/03-components/Card/Card';
import ContactMenu from '@/source/03-components/ContactMenu/ContactMenu';
import Hero from '@/source/03-components/Hero/Hero';
import Marquee from '@/source/03-components/Marquee/Marquee';
import RichText from '@/source/03-components/RichText/RichText';
import { Metadata } from 'next';
import LandingPage from '../source/04-templates/LandingPage/LandingPage';

const title = 'Thomas Alter - Portfolio';

export const metadata: Metadata = {
  title,
  description:
    'Thomas Alter is a front-end engineer with a passion for animation and design systems.',
};

function Home() {
  return (
    <LandingPage title="Homepage" hidePageTitle={true}>
      <Hero tagline="Front end engineer with a passion for animation and design systems" />
      <Marquee
        text="Hard Work // Happy Clients"
        modifierClasses="marquee--work"
      />
      <Section title="Work">
        <Grid numCols={3}>
          <Card
            url="https://resilience.si.edu/"
            title="Smithsonian Kaleidoscope"
            summary="Kaleidoscope is a project funded by Adrienne Arsht and produced by the Smithsonian Institution that celebrates different perspectives of resilience through the lens of history, art, science, and culture."
            eyebrow="NextJs | Storybook"
            imageSrc="/images/work/sikscope.jpg"
          />
          <Card
            url="https://www.dmv.virginia.gov"
            title="Virginia DMV"
            summary="Strive to provide customers with the information they need to comply with state laws and regulations; to ensure the accurate, secure and efficient issuing of customers’ credentials; and to improve the safety of Virginia's highway system."
            eyebrow="Drupal | Storybook"
            imageSrc="/images/work/va-dmv.jpg"
          />
          <Card
            url="https://marchofdimes.org"
            title="March of Dimes"
            summary="Committed to ending preventable maternal health risks and death, ending preventable preterm birth and infant death and closing the health equity gap for all families."
            eyebrow="Drupal | Storybook"
            imageSrc="/images/work/march-of-dimes.jpg"
          />
          <Card
            url="https://www.becomingvisible.si.edu/"
            title="Becoming Visible"
            summary="When women are invisible in American history, it’s a loss for all of us. We all benefit from a clear view of our past."
            eyebrow="NextJs | Storybook"
            imageSrc="/images/work/sawhm.jpg"
          />
          <Card
            url="https://nrdc50.org/"
            title="NRDC 50th Anniversary"
            summary="NRDC uses law, science, and the collective power of people to tackle the world’s pressing environmental problems from every angle. And we’ve been winning for 50 years."
            eyebrow="Drupal | Storybook"
            imageSrc="/images/work/nrdc.jpg"
          />
          <Card
            url="https://nmaahc.si.edu"
            title="National Museum of African American History and Culture"
            summary="The National Museum of African American History and Culture is the only national museum dedicated to the documentation of African American life, history, and culture."
            eyebrow="Drupal | Storybook"
            imageSrc="/images/work/nmaahc.jpg"
          />
          <Card
            url="https://www.alexandriava.gov/"
            title="Alexandria City VA"
            summary="Alexandria, Virginia, is a city on the Potomac River, just south of Washington, DC. It’s known for its Old Town, with brick sidewalks and well-preserved 18th- and 19th-century buildings."
            eyebrow="Drupal | Storybook"
            imageSrc="/images/work/alexandria.png"
          />
          <Card
            url="https://vball-schedule.vercel.app/"
            title="Volleyball Schedule App"
            summary="Custom app I built for my volleyball team to help us keep track of our schedule and results."
            eyebrow="NextJs | Storybook"
            imageSrc="/images/work/vball.webp"
          />
          <Card
            url="https://www.wildhope.tv/"
            title="HHMI Wild Hope"
            summary="Wild Hope shines a light on the mavericks and changemakers who are restoring and protecting our natural world. The movement has begun."
            eyebrow="Wordpress | Storybook"
            imageSrc="/images/work/wild-hope.png"
          />
          <Card
            url="https://trinitychurchnyc.org/"
            title="Trinity Church Wall Street"
            summary="Trinity Church Wall Street is a historic church in New York City that has been a center of worship and community for over 300 years."
            eyebrow="Wordpress | Storybook"
            imageSrc="/images/work/tcws.webp"
          />
          <Card
            url="https://www.biointeractive.org/"
            title="HHMI BioInteractive"
            summary="BioInteractive is a project funded by the Howard Hughes Medical Institute that provides interactive learning experiences for students and educators."
            eyebrow="Drupal | Storybook"
            imageSrc="/images/work/hhmi-bio.png"
          />
          <Card
            url="https://www.pcori.org/"
            title="PCORI"
            summary="PCORI helps people make informed healthcare decisions, and improves healthcare delivery and outcomes, by producing and promoting high-integrity, evidence-based information that comes from research guided by patients, caregivers, and the broader healthcare community."
            eyebrow="Drupal | PatternLab"
            imageSrc="/images/work/pcori.jpg"
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
  );
}

export default Home;
