'use client';

import SvgArrowAngled from '@/source/01-global/icon/icons/ArrowAngled';
import { useGSAP } from '@gsap/react';
import clsx from 'clsx';
import { GessoComponent } from 'gesso';
import gsap from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import { JSX, useRef } from 'react';
import styles from './card.module.css';

interface CardProps extends GessoComponent {
  url: string;
  title: string;
  imageSrc?: string;
  eyebrow?: string;
  summary?: string;
}

function Card({
  url,
  title,
  imageSrc,
  eyebrow,
  summary,
  modifierClasses,
}: CardProps): JSX.Element {
  const cardRef = useRef<HTMLAnchorElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      cardRef.current,
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top bottom',
          end: '+=200',
          scrub: 1,
          invalidateOnRefresh: true,
        },
      },
    );
  });

  return (
    <Link
      href={url}
      className={clsx(styles.card, modifierClasses)}
      ref={cardRef}
      target="_blank"
    >
      <div className={styles.body}>
        {eyebrow && <div className={styles.eyebrow}>{eyebrow}</div>}
        <h3 className={styles.title}>{title}</h3>
        {summary && <div className={styles.summary}>{summary}</div>}
      </div>
      {imageSrc && (
        <div className={styles.media}>
          <Image
            src={imageSrc}
            alt={title}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            fill
          />
        </div>
      )}
      <div className={styles.icon}>
        <SvgArrowAngled className={styles['icon-arrow']} />
        <SvgArrowAngled className={styles['icon-arrow']} />
      </div>
    </Link>
  );
}

export type { CardProps };
export default Card;
