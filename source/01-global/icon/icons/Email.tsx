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
const SvgEmail = ({
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
      viewBox="0 0 20 20"
      className={clsx('icon', modifierClasses)}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M10,20c-1.4,0-2.7-.3-3.9-.8s-2.3-1.2-3.2-2.1-1.6-2-2.1-3.2-.8-2.5-.8-3.9.3-2.7.8-3.9,1.2-2.3,2.1-3.2,2-1.6,3.2-2.1,2.5-.8,3.9-.8,2.7.3,3.9.8,2.3,1.2,3.2,2.1,1.6,2,2.1,3.2.8,2.5.8,3.9v1.5c0,1-.3,1.8-1,2.5s-1.5,1-2.5,1-1.1-.1-1.7-.4-1-.6-1.3-1.1c-.5.5-1,.8-1.6,1.1s-1.2.4-1.9.4c-1.4,0-2.6-.5-3.5-1.5s-1.5-2.2-1.5-3.5.5-2.6,1.5-3.5,2.2-1.5,3.5-1.5,2.6.5,3.5,1.5,1.5,2.2,1.5,3.5v1.5c0,.4.1.8.4,1.1s.6.5,1.1.5.8-.2,1.1-.5.4-.7.4-1.1v-1.5c0-2.2-.8-4.1-2.3-5.7s-3.4-2.3-5.7-2.3-4.1.8-5.7,2.3-2.3,3.4-2.3,5.7.8,4.1,2.3,5.7,3.4,2.3,5.7,2.3h5v2h-5ZM10,13c.8,0,1.5-.3,2.1-.9s.9-1.3.9-2.1-.3-1.5-.9-2.1-1.3-.9-2.1-.9-1.5.3-2.1.9-.9,1.3-.9,2.1.3,1.5.9,2.1,1.3.9,2.1.9Z" />
    </svg>
  );
};
export default SvgEmail;
