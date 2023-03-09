import React from 'react';

import { Body1, Body2, Button, Caption, Heading4 } from 'Components/atoms/';

import {
	Circle1,
	Circle2,
	Close,
	Container,
	Description,
	Head,
	Heading,
	LeftCard,
	Poster,
	RightCard,
	Title,
	X,
} from './styles';
import { TicketDataProps } from './types';

interface TicketProps {
	data: TicketDataProps;
	onClick: () => void;
	handleBook: (eventId: string) => Promise<void>;
	disabled?: boolean;
}

const Ticket: React.FC<TicketProps> = ({ data, onClick, handleBook, disabled = true }) => {
	const { title, venue, club, time, date, month, prizes, description, contact, poster, id } = data;

	return (
		<Container>
			{/* <Close src="close.svg" alt="close" onClick={onClick} /> */}
			<Close onClick={onClick}>
				<X>X</X>
			</Close>
			<LeftCard>
				<Heading4>About</Heading4>
				<Description>
					{description.map(({ id, desc }) => (
						<ul key={id}>
							<Body2>{desc}</Body2>
						</ul>
					))}
				</Description>
				<Body1 bold>
					For more details contact: {contact ? contact.map(({ name, phone }) => `${name} ${phone}`) : 'TBA'}
				</Body1>
			</LeftCard>
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
				<Button fullWidth filled btnText="Book Slots" onClick={() => handleBook(id ?? '')} disabled={disabled} />
				<Circle1 />
				<Circle2 />
			</RightCard>
		</Container>
	);
};

export default Ticket;
