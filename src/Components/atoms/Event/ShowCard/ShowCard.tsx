import React from 'react';

import { Body1, Body2, Button, ButtonText, Heading3 } from 'Components/atoms';

import { BottomCard, Circle1, Circle2, Container, Poster, TopCard, Venue } from './styles';
import { CardProps } from './types';

const ShowCard: React.FC<{ data: CardProps; onClick: () => void }> = ({ data, onClick }) => {
	const { title, club, date, month, time, venue, poster } = data;

	return (
		<Container>
			<TopCard>
				<Poster src={poster} />
				<Heading3 bold>{title}</Heading3>
				<Body2 bold>{club}</Body2>
				<Venue>
					<Body1 bold>
						{date}th {month}, {time}
					</Body1>
					<Body1 bold>{venue}</Body1>
				</Venue>
				<Circle1 />
				<Circle2 />
			</TopCard>
			<BottomCard>
				<Button btnText="Book Slots" full />
				<ButtonText onClick={onClick}>Know More</ButtonText>
			</BottomCard>
		</Container>
	);
};

export default ShowCard;
