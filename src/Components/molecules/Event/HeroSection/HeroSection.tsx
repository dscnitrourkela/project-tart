import React from 'react';

import { Body1, Heading1 } from 'Components/atoms';

import { Image, Title, Wrapper } from './styles';
import { HeroSectionProps } from './types';

const EventHero: React.FC<HeroSectionProps> = ({ title, description, image }) => {
	return (
		<Wrapper>
			<div>
				<Title>
					<Heading1 bold>{title}</Heading1>
				</Title>
				<Body1>{description}</Body1>
			</div>
			<Image src={image} alt="Event Hero" loading="lazy" />
		</Wrapper>
	);
};

export default EventHero;
