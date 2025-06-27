import { useGSAP } from '@gsap/react';
import clsx from 'clsx';
import { GessoComponent } from 'gesso';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { JSX, useRef } from 'react';
import styles from './marquee.module.css';

interface MarqueeProps extends GessoComponent {
  text?: string;
}

function Marquee({ modifierClasses, text }: MarqueeProps): JSX.Element {
  gsap.registerPlugin(ScrollTrigger);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to('.marquee-text', {
        transform: 'translateX(-120%)',
        ease: 'none',
        scrollTrigger: {
          trigger: '.inner',
          start: 'top top',
          end: '+=1800',
          scrub: 1,
          pin: true,
          markers: false,
          invalidateOnRefresh: true,
        },
      });
    },
    { scope: marqueeRef },
  );

  return (
    <div className={clsx(styles.wrapper, modifierClasses)} ref={marqueeRef}>
      <div className={clsx(styles.inner, 'inner')}>
        <p className={clsx(styles.text, 'marquee-text')}>{text}</p>
      </div>
    </div>
  );
}

export type { MarqueeProps };
export default Marquee;
