'use client';

import SvgThomasAlterLogo from '@/source/01-global/icon/icons/ThomasAlterLogo';
import { useGSAP } from '@gsap/react';
import clsx from 'clsx';
import { GessoComponent } from 'gesso';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { JSX, useRef } from 'react';
import styles from './hero.module.css';

interface HeroProps extends GessoComponent {
  tagline?: string;
}

function Hero({ modifierClasses, tagline }: HeroProps): JSX.Element {
  gsap.registerPlugin(ScrollTrigger);
  const heroRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const introTl = gsap.timeline();
      // Animate hero in on load
      introTl.fromTo(
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
      introTl.fromTo(
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
        '<',
      );
      introTl.fromTo(
        ['.tagline', '.scroll'],
        {
          autoAlpha: 0,
        },
        {
          duration: 1,
          ease: 'power3.inOut',
          autoAlpha: 1,
        },
        '>',
      );

      // On scroll animate hero out
      const outroTl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: '+=600',
          pin: true,
          scrub: 0.3,
          invalidateOnRefresh: true,
        },
      });
      outroTl
        .to('.logo', {
          ease: 'none',
          scale: 14,
          duration: 1,
          autoAlpha: 0,
          position: 'absolute',
        })
        .to(
          '.content',
          {
            autoAlpha: 0,
            duration: 0.2,
            ease: 'none',
          },
          '<',
        );
    },
    { scope: heroRef },
  );

  return (
    <div
      className={clsx(styles.wrapper, modifierClasses)}
      ref={heroRef}
      id="home"
    >
      <div className={clsx(styles.inner, 'inner')}>
        <h1 className="u-visually-hidden">Thomas Alter</h1>
        <SvgThomasAlterLogo className={clsx(styles.logo, 'logo')} />
        <div className={clsx(styles.content, 'content')}>
          <div className={clsx(styles.scroll, 'scroll')}>Scroll</div>
          <div className={clsx(styles.tagline, 'tagline')}>
            <p>{tagline}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export type { HeroProps };
export default Hero;
