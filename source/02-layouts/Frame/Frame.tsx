'use client';

import Menu from '@/source/03-components/Menu/Menu';
import MenuButton from '@/source/03-components/MenuButton/MenuButton';
import { useGSAP } from '@gsap/react';
import clsx from 'clsx';
import { GessoComponent } from 'gesso';
import gsap from 'gsap';
import { JSX, useRef, useState } from 'react';
import styles from './frame.module.css';

interface FrameProps extends GessoComponent {
  children?: React.ReactNode;
}

function Frame({ modifierClasses, children }: FrameProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (isOpen) {
        gsap.to('.menu-link', {
          delay: 0.25,
          duration: 0.25,
          ease: 'power3.inOut',
          opacity: 1,
          stagger: 0.15,
          y: 0,
          visibility: 'visible',
        });
      } else {
        gsap.to('.menu-link', {
          duration: 0,
          opacity: 0,
          y: '-=12px',
          visibility: 'hidden',
        });
      }
    },
    { dependencies: [isOpen], scope: menuRef },
  );

  return (
    <div className={clsx(styles.wrapper, modifierClasses)}>
      <div
        className={clsx(styles['menu-wrapper'], isOpen && styles['is-open'])}
        ref={menuRef}
      >
        <div className={styles.button}>
          <MenuButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
        </div>
        <Menu
          modifierClasses={styles.menu}
          itemClasses={styles['menu-item']}
          linkClasses={clsx(styles['menu-link'], 'menu-link')}
          items={[
            {
              title: 'Home',
              url: '#top',
            },
            {
              title: 'Work',
              url: '#work',
            },
            {
              title: 'About',
              url: '#about',
            },
          ]}
        />
        <span className={clsx(styles['menu-curve'], styles.top)} />
        <span className={clsx(styles['menu-curve'], styles.bottom)} />
      </div>
      {children}
    </div>
  );
}

export type { FrameProps };
export default Frame;
