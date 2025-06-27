'use client';

import SvgTaBackground from '@/source/01-global/icon/icons/TaBackground';
import { useGSAP } from '@gsap/react';
import { GessoComponent } from 'gesso';
import gsap from 'gsap';
import { JSX, ReactNode, useRef } from 'react';
import styles from './site-container.module.css';

interface SiteContainerProps extends GessoComponent {
  children: ReactNode;
}

function SiteContainer({ children }: SiteContainerProps): JSX.Element {
  const siteContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(siteContainerRef.current, {
      opacity: 1,
      duration: 1,
      ease: 'power2.inOut',
    });
  });

  return (
    <div className={styles['site-container']} ref={siteContainerRef}>
      {children}
      <SvgTaBackground className={styles.background} />
    </div>
  );
}

export default SiteContainer;
export type { SiteContainerProps };
