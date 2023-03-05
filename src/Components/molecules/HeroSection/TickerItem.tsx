import React from 'react';

import { ItemContainer, TickerIcon, Image, ImageConatiner } from './styles';

const TickerItem: React.FC = () => {
	return (
		<ItemContainer>
			<ImageConatiner>
				<TickerIcon src="TickerImg.svg" alt="IMG" />
				<Image src="tree.jpg" alt="alt" />
			</ImageConatiner>
		</ItemContainer>
	);
};

export default TickerItem;
