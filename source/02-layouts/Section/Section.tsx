import { useGSAP } from '@gsap/react';
import clsx from 'clsx';
import { ConstrainComponent } from 'gesso';
import gsap from 'gsap';
import { ElementType, JSX, ReactNode, useRef } from 'react';
import Constrain from '../Constrain/Constrain';
import styles from './section.module.css';

interface SectionProps extends ConstrainComponent {
  children?: ReactNode;
  title?: string;
  titleElement?: ElementType;
}

function Section({
  children,
  title,
  titleElement: TitleElement = 'h2',
  modifierClasses,
  hasConstrain = true,
  constrainClasses,
}: SectionProps): JSX.Element {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        '.title',
        {
          autoAlpha: 1,
        },
        {
          autoAlpha: 0,
          duration: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'bottom 75%',
            end: 'bottom 50%',
            scrub: 0,
            invalidateOnRefresh: true,
          },
        },
      );
    },
    { scope: sectionRef },
  );

  return (
    <section
      className={clsx(styles.section, modifierClasses)}
      ref={sectionRef}
      id={title?.toLowerCase()}
    >
      <Constrain isHidden={!hasConstrain} modifierClasses={constrainClasses}>
        <div className={styles['title-wrapper']}>
          {title && (
            <TitleElement className={clsx(styles.title, 'title')}>
              {title}
            </TitleElement>
          )}
        </div>
        <div className={styles.content}>{children}</div>
      </Constrain>
    </section>
  );
}

export default Section;
export type { SectionProps };
