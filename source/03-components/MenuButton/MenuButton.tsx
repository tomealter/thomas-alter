import SvgClose from '@/source/01-global/icon/icons/Close';
import clsx from 'clsx';
import { GessoComponent } from 'gesso';
import { JSX } from 'react';
import SvgThreeDots from '../../01-global/icon/icons/ThreeDots';
import styles from './menu-button.module.css';

interface MenuButtonProps extends GessoComponent {
  isOpen: boolean;
  onClick: () => void;
}

function MenuButton({
  modifierClasses,
  isOpen,
  onClick,
}: MenuButtonProps): JSX.Element {
  return (
    <button
      className={clsx(
        styles.button,
        modifierClasses,
        isOpen && styles['is-open'],
      )}
      onClick={onClick}
    >
      <span className="u-visually-hidden">
        {isOpen ? 'Close menu' : 'Open menu'}
      </span>
      <SvgThreeDots className={styles.icon} />
      <SvgClose className={styles.close} />
    </button>
  );
}

export type { MenuButtonProps };
export default MenuButton;
