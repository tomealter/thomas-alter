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
const SvgArrowAngled = ({
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
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx('icon', modifierClasses)}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M10.6593 3.75494L2.05024 12.364L0.636027 10.9497L9.24505 2.34072L1.32546 2.34072L1.34313 0.343146H12.6568V11.6569L10.6593 11.6745L10.6593 3.75494Z"
        fill="#0D0D0D"
      />
    </svg>
  );
};
export default SvgArrowAngled;
