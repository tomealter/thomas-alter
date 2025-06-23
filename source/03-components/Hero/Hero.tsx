import SvgThomasAlterLogo from '@/source/01-global/icon/icons/ThomasAlterLogo';
import { useGSAP } from '@gsap/react';
import clsx from 'clsx';
import { GessoComponent } from 'gesso';
import gsap from 'gsap';
import { JSX, useRef } from 'react';
import styles from './hero.module.css';

interface HeroProps extends GessoComponent {
  tagline?: string;
}

function Hero({ modifierClasses, tagline }: HeroProps): JSX.Element {
  const heroRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        '.logo-1',
        {
          x: '100%',
          autoAlpha: 0,
        },
        {
          duration: 1.75,
          ease: 'power4.inOut',
          x: 0,
          autoAlpha: 1,
        },
      );
      gsap.fromTo(
        '.logo-2',
        {
          x: '-100%',
          autoAlpha: 0,
        },
        {
          duration: 1.75,
          ease: 'power4.inOut',
          x: 0,
          autoAlpha: 1,
        },
      );
      gsap.fromTo(
        ['.tagline', '.scroll'],
        {
          autoAlpha: 0,
        },
        {
          duration: 1,
          ease: 'power3.inOut',
          autoAlpha: 1,
          delay: 1.25,
        },
      );
    },
    { scope: heroRef },
  );

  return (
    <div className={clsx(styles.wrapper, modifierClasses)} ref={heroRef}>
      <div className={styles.inner}>
        <h1 className="u-visually-hidden">Thomas Alter</h1>
        <SvgThomasAlterLogo className={styles.logo} />
        <div className={clsx(styles.scroll, 'scroll')}>Scroll</div>
        <div className={clsx(styles.tagline, 'tagline')}>
          <p>{tagline}</p>
        </div>
      </div>
    </div>
  );
}

export type { HeroProps };
export default Hero;
