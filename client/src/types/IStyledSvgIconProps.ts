import {FunctionComponent, SVGProps} from 'react';

export interface IStyledSvgIconProps {
  component: FunctionComponent<SVGProps<SVGSVGElement> & { title: string | undefined; }>;
  inheritViewBox: true;
}
