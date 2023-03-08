import React from 'react';

import { TickerContainer, TickerMover } from './styles';
import TickerItem from './TickerItem';

const Ticker: React.FC = () => {
	const TickerItems = [
		{
			image: 'https://res.cloudinary.com/dnylc640l/image/upload/v1678305866/Nitrutsav-23/carousel/1_prmlqf.jpg',
			alt: 'Alt text 1',
		},
		{
			image: 'https://res.cloudinary.com/dnylc640l/image/upload/v1678305865/Nitrutsav-23/carousel/4_aj3qyg.jpg',
			alt: 'Alt text 2',
		},
		{
			image: 'https://res.cloudinary.com/dnylc640l/image/upload/v1678305864/Nitrutsav-23/carousel/5_qpcu6a.jpg',
			alt: 'Alt text 3',
		},
		{
			image: 'https://res.cloudinary.com/dnylc640l/image/upload/v1678305864/Nitrutsav-23/carousel/3_vba2xj.jpg',
			alt: 'Alt text 4',
		},
		{
			image: 'https://res.cloudinary.com/dnylc640l/image/upload/v1678305873/Nitrutsav-23/carousel/2_ukppil.jpg',
			alt: 'Alt text 5',
		},
		{
			image: 'https://res.cloudinary.com/dnylc640l/image/upload/v1678305872/Nitrutsav-23/carousel/7_qcubvq.jpg',
			alt: 'Alt text 6',
		},
		{
			image: 'https://res.cloudinary.com/dnylc640l/image/upload/v1678305871/Nitrutsav-23/carousel/6_vegf57.jpg',
			alt: 'Alt text 7',
		},
	];

	return (
		<TickerContainer>
			<TickerMover>
				{TickerItems.map(({ image, alt }) => {
					return <TickerItem key={alt} image={image} alt={alt} />;
				})}
				<div style={{ margin: '0 20vw', display: 'inline-block' }} />
				{TickerItems.map(({ image, alt }) => {
					return <TickerItem key={alt} image={image} alt={alt} />;
				})}
				<div style={{ margin: '0 20vw', display: 'inline-block' }} />
				{TickerItems.map(({ image, alt }) => {
					return <TickerItem key={alt} image={image} alt={alt} />;
				})}
			</TickerMover>
		</TickerContainer>
	);
};

export default Ticker;
