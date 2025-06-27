import Constrain, {
  styles as constrainStyles,
} from '@/source/02-layouts/Constrain/Constrain';
import { useGSAP } from '@gsap/react';
import clsx from 'clsx';
import { GessoComponent } from 'gesso';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { JSX, useRef } from 'react';
import styles from './animated-text.module.css';

interface AnimatedTextProps extends GessoComponent {
  text: string;
}

function AnimatedText({
  text,
  modifierClasses,
}: AnimatedTextProps): JSX.Element {
  const animatedTextRef = useRef<HTMLDivElement>(null);
  gsap.registerPlugin(SplitText);

  useGSAP(
    () => {
      const splitText = new SplitText('.text', {
        type: 'words',
      });

      gsap.fromTo(
        splitText.words,
        {
          y: 20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: animatedTextRef.current,
            start: 'top 90%',
            end: 'top 25%',
            scrub: 1,
            invalidateOnRefresh: true,
          },
        },
      );
    },
    { scope: animatedTextRef },
  );

  return (
    <div
      className={clsx(styles.wrapper, modifierClasses)}
      ref={animatedTextRef}
    >
      <Constrain modifierClasses={constrainStyles['constrain--small']}>
        <p className={clsx(styles.text, 'text')}>{text}</p>
      </Constrain>
    </div>
  );
}

export type { AnimatedTextProps };
export default AnimatedText;
