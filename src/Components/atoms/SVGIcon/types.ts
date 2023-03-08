import { FunctionComponent, SVGProps } from 'react';

export interface SVGIconProps {
	Icon: FunctionComponent<SVGProps<SVGSVGElement>>;
	color?: string;
}
