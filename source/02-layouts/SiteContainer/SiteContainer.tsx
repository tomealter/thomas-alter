import SvgTaBackground from '@/source/01-global/icon/icons/TaBackground';
import { GessoComponent } from 'gesso';
import { JSX, ReactNode } from 'react';
import styles from './site-container.module.css';

interface SiteContainerProps extends GessoComponent {
  children: ReactNode;
}

function SiteContainer({ children }: SiteContainerProps): JSX.Element {
  return (
    <div className={styles['site-container']}>
      {children}
      <SvgTaBackground className={styles.background} />
    </div>
  );
}

export default SiteContainer;
export type { SiteContainerProps };
