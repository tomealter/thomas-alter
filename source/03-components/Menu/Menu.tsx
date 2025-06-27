'use client';

import clsx from 'clsx';
import { GessoComponent } from 'gesso';
import Link from 'next/link';
import { ReactNode, type JSX } from 'react';
import styles from './menu.module.css';

interface MenuItem {
  title: ReactNode;
  url: string;
  inActiveTrail?: boolean;
  below?: MenuItem[];
}

interface BaseMenuProps extends GessoComponent {
  items: MenuItem[];
}

interface MenuProps extends BaseMenuProps {
  itemClasses?: string | string[];
  linkClasses?: string | string[];
}

interface MenuLinksProps extends MenuProps {
  menuLevel: number;
}

function MenuLinks({
  items,
  menuLevel,
  modifierClasses,
  itemClasses,
  linkClasses,
}: MenuLinksProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // If href is an anchor, scroll to the element
    if (e.currentTarget.href.includes('#')) {
      const { hash } = e.currentTarget;
      const element = document.querySelector(hash);
      if (element) {
        const elementPosition =
          element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementPosition - 100,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <ul
      className={clsx(
        styles.menu,
        menuLevel === 0 ? modifierClasses : styles.subnav,
      )}
    >
      {items.map((item, i) => (
        <li
          key={i}
          className={clsx(
            styles.item,
            item.below && 'has-subnav',
            item.inActiveTrail && 'in-active-trail',
            itemClasses,
          )}
        >
          <Link
            href={item.url}
            className={clsx(styles.link, linkClasses)}
            onClick={handleClick}
          >
            {item.title}
          </Link>
          {item.below && (
            <MenuLinks menuLevel={menuLevel + 1} items={item.below} />
          )}
        </li>
      ))}
    </ul>
  );
}

function Menu({
  items,
  modifierClasses,
  itemClasses,
  linkClasses,
}: MenuProps): JSX.Element {
  return (
    <MenuLinks
      menuLevel={0}
      items={items}
      modifierClasses={modifierClasses}
      itemClasses={itemClasses}
      linkClasses={linkClasses}
    />
  );
}

export default Menu;
export { MenuLinks };
export type { BaseMenuProps, MenuItem, MenuLinksProps, MenuProps };
