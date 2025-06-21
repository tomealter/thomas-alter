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
const SvgTaBackground = ({
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
      viewBox="0 0 1216.2 640"
      className={clsx('icon', modifierClasses)}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M600.3,17.8l-84.7,154.2h-112.6v205l-96.9,176.4c-4.6,8.4-16.7,8.3-21.1-.2l-85-160.5v-220.8h-116.9L1.4,17.6C-2.8,9.6,3,0,12,0h577.8c9.1,0,14.9,9.8,10.5,17.8Z" />
      <path d="M899.2,640h-242.1l-35.5-67.2c-4.5-8.5-16.5-8.6-21.1-.2l-36.9,67.4h-242.2c-9.1,0-14.9-9.8-10.5-17.8l107.7-196.2,114.5-208.6,71.9-130.9c4.6-8.4,16.7-8.3,21.1.2l283.7,535.7c4.2,8-1.6,17.6-10.6,17.6Z" />
      <path d="M802,303h287.8c9.1,0,14.9,9.8,10.5,17.8l-146.5,266.7c-4.6,8.4-16.7,8.3-21.1-.2l-141.3-266.7c-4.2-8,1.6-17.6,10.6-17.6h0Z" />
      <path d="M1204.2,491h-135.9c-9.1,0-14.9-9.8-10.5-17.8l69.2-126.6c4.6-8.4,16.7-8.3,21.2.2l66.7,126.6c4.2,8-1.6,17.6-10.6,17.6h0Z" />
      <path d="M1204.2,491h-135.9c-9.1,0-14.9-9.8-10.5-17.8l69.2-126.6c4.6-8.4,16.7-8.3,21.2.2l66.7,126.6c4.2,8-1.6,17.6-10.6,17.6h0Z" />
    </svg>
  );
};
export default SvgTaBackground;
