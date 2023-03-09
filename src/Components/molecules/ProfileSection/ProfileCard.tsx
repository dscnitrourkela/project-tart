import React from 'react';

import { Body1, Button, Caption } from 'Components/atoms/';

import { Circle1, Circle2, Container, Head, Heading, Poster, RightCard, Title } from './styles';
import { RegisteredEventProps } from './type';

const ProfileCard: React.FC<{ event: RegisteredEventProps }> = ({ event }) => {
	const { club, date, time, title, month, orgID, poster, prizes, venue } = event;

	return (
		<Container>
			<RightCard>
				<Head>
					<Poster src={poster} />
					<div>
						<Title bold>{title}</Title>
						<Caption bold>{club}</Caption>
					</div>
				</Head>
				<Body1 bold>
					Venue : <Heading>{venue}</Heading>
				</Body1>
				<Body1 bold>
					Time :{' '}
					<Heading>
						{time}, {date} {month}
					</Heading>
				</Body1>
				<Body1 bold>
					Prizes : <Heading>Worth {prizes}</Heading>
				</Body1>
				<Button fullWidth filled btnText="Slot booked" success />
				<Circle1 />
				<Circle2 />
			</RightCard>
		</Container>
	);
};

export default ProfileCard;
