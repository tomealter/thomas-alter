import Constrain, {
  styles as constrainStyles,
} from '@/source/02-layouts/Constrain/Constrain';
import { useGSAP } from '@gsap/react';
import clsx from 'clsx';
import { GessoComponent } from 'gesso';
import gsap from 'gsap';
import { JSX, useRef } from 'react';
import styles from './rich-text.module.css';

interface RichTextProps extends GessoComponent {
  children: React.ReactNode;
}

function RichText({ modifierClasses, children }: RichTextProps): JSX.Element {
  const richTextRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (richTextRef.current) {
        const fadeInElements = richTextRef.current.querySelectorAll('.fade-in');
        fadeInElements.forEach(element => {
          gsap.fromTo(
            element,
            {
              autoAlpha: 0,
              duration: 1,
              ease: 'power2.inOut',
            },
            {
              autoAlpha: 1,
              duration: 1,
              ease: 'power2.inOut',
              scrollTrigger: {
                trigger: element,
                start: 'top 95%',
                end: 'top 75%',
                scrub: 1,
                invalidateOnRefresh: true,
              },
            },
          );
        });
      }
    },
    { scope: richTextRef },
  );

  return (
    <div className={clsx(styles.wrapper, modifierClasses)} ref={richTextRef}>
      <Constrain modifierClasses={constrainStyles['constrain--small']}>
        <div className={styles.content}>{children}</div>
      </Constrain>
    </div>
  );
}

export type { RichTextProps };
export default RichText;
