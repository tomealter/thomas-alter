import SvgCodepen from '@/source/01-global/icon/icons/Codepen';
import SvgEmail from '@/source/01-global/icon/icons/Email';
import SvgGithub from '@/source/01-global/icon/icons/Github';
import SvgLinkedin from '@/source/01-global/icon/icons/Linkedin';
import clsx from 'clsx';
import { GessoComponent } from 'gesso';
import Link from 'next/link';
import { JSX } from 'react';
import styles from './contact-menu.module.css';

type ContactMenuProps = GessoComponent;

function ContactMenu({ modifierClasses }: ContactMenuProps): JSX.Element {
  return (
    <div className={clsx(styles.wrapper, modifierClasses)}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link href="#0" className={styles.link}>
            <span className="u-visually-hidden">GitHub</span>
            <SvgGithub className={styles.icon} />
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="#0" className={styles.link}>
            <span className="u-visually-hidden">LinkedIn</span>
            <SvgLinkedin className={styles.icon} />
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="#0" className={styles.link}>
            <span className="u-visually-hidden">Codepen</span>
            <SvgCodepen className={styles.icon} />
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="#0" className={styles.link}>
            <span className="u-visually-hidden">Email</span>
            <SvgEmail className={styles.icon} />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export type { ContactMenuProps };
export default ContactMenu;
