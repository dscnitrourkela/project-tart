import React from 'react';

import { SVGIconProps } from './types';

const SVGIcon: React.FC<SVGIconProps> = ({ Icon, color }) => {
	return <Icon fill={color && color} />;
};

export default SVGIcon;
