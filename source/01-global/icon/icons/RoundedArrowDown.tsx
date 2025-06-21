// organize-imports-ignore
// This component is automatically generated.
// SVGs should be added to icon/svgs.
// See the project documentation for more information.
// tslint:disable:ordered-imports
import clsx from 'clsx';
import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
  isHidden?: boolean;
  modifierClasses?: string | string[];
}
const SvgRoundedArrowDown = ({
  modifierClasses,
  isHidden,
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => {
  return (
    <svg
      role={title ? 'img' : undefined}
      aria-hidden={isHidden ? 'true' : 'false'}
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 22"
      className={clsx('icon', modifierClasses)}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M1.6,0h20.7c.8,0,1.2.8.9,1.5l-10.5,19.8c-.4.7-1.4.7-1.8,0L.7,1.5C.4.8.9,0,1.6,0Z" />
    </svg>
  );
};
export default SvgRoundedArrowDown;
