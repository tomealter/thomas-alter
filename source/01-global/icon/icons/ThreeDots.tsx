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
const SvgThreeDots = ({
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
      viewBox="0 0 30 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx('icon', modifierClasses)}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <circle
        cx={26.5001}
        cy={3.50006}
        r={3.22222}
        transform="rotate(-180 26.5001 3.50006)"
        fill="#0D0D0D"
      />
      <circle
        cx={15.2222}
        cy={3.50006}
        r={3.22222}
        transform="rotate(-180 15.2222 3.50006)"
        fill="#0D0D0D"
      />
      <circle
        cx={3.94453}
        cy={3.50006}
        r={3.22222}
        transform="rotate(-180 3.94453 3.50006)"
        fill="#0D0D0D"
      />
    </svg>
  );
};
export default SvgThreeDots;
