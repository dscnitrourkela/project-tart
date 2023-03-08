import React from 'react';

import { Image, ImageConatiner, ItemContainer, TickerIcon } from './styles';

interface TickerItemProps {
	image?: string;
	alt?: string;
}

const TickerItem: React.FC<TickerItemProps> = ({ image, alt }) => {
	return (
		<ItemContainer>
			<ImageConatiner>
				<TickerIcon src="TickerImg.svg" alt="IMG" />
				<Image src={image} alt={alt} />
			</ImageConatiner>
		</ItemContainer>
	);
};

export default TickerItem;
