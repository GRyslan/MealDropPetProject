import {FunctionComponent, SVGProps} from 'react';

export interface StyledSvgIconPropsInterface {
  component: FunctionComponent<SVGProps<SVGSVGElement> & { title?: string | undefined; }>;
  inheritViewBox: true;
}
