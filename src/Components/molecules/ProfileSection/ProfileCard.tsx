import React from 'react';

import { Body1, Button, Caption } from 'Components/atoms/';

import { Circle1, Circle2, Container, DetailsText, Head, Heading, Poster, RightCard, Title } from './styles';

const ProfileCard: React.FC = () => {
	return (
		<Container>
			<RightCard>
				<Head>
					<Poster src="https://res.cloudinary.com/dujqfyato/image/upload/v1677924775/TART/Frame_586_ibkz1d.svg" />
					<div>
						<Title bold>Euphony Live</Title>
						<Caption bold>Euphony</Caption>
					</div>
				</Head>
				<Body1 bold>
					Venue : <Heading>LA LAWNS</Heading>
				</Body1>
				<Body1 bold>
					Time : <Heading>14:40, 13th Nov, March</Heading>
				</Body1>
				<Body1 bold>
					Prizes : <Heading>Worth 50k</Heading>
				</Body1>
				<Button fullWidth filled success btnText="Slots Booked" />
				<DetailsText style={{ textAlign: 'center' }}>View Details</DetailsText>
				<Circle1 />
				<Circle2 />
			</RightCard>
		</Container>
	);
};

export default ProfileCard;
