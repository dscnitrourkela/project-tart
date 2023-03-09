import React from 'react';

import { Body1, Body2, Button, ButtonText } from 'Components/atoms';

import { BottomCard, Circle1, Circle2, Container, Poster, Title, TopCard, Venue } from './styles';
import { CardProps } from './types';

const ShowCard: React.FC<{ data: CardProps; onClick: () => void; handleBook: (eventId: string) => Promise<void> }> = ({
	data,
	onClick,
	handleBook,
}) => {
	const { title, club, date, month, time, venue, poster, id } = data;

	return (
		<Container>
			<TopCard>
				<Poster src={poster} />
				<Title bold>{title}</Title>
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
				<Button btnText="Book Slots" fullWidth onClick={() => handleBook(id ?? '')} />
				<ButtonText onClick={onClick}>Know More</ButtonText>
			</BottomCard>
		</Container>
	);
};

export default ShowCard;
