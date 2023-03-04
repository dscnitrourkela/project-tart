import React, { useState } from 'react';

import { ShowCard } from 'Components/atoms/Event';
import { EventHero, Modal } from 'Components/molecules/Event';
import { Events } from 'Constants/Constants';
import { useParams } from 'react-router-dom';

import { Container, ShowsWrapper } from './styles';
import { EventParams } from './types';

const EventPage: React.FC = () => {
	const { eventName } = useParams<EventParams>();

	const [modal, setModal] = useState(false);
	const [eventIndex, setEventIndex] = useState(0);
	const handleClick = (index: number) => {
		setEventIndex(index);
		setModal(true);
	};
	const handleClose = () => {
		setModal(false);
	};

	const { title, description, image, events } = Events.filter((event) => event.slugName === eventName)[0];
	return (
		<>
			{modal && <Modal data={events[eventIndex]} onClick={handleClose} />}
			<Container isModalOpen={modal}>
				<EventHero title={title} description={description} image={image} />
				<ShowsWrapper>
					{events.map((event, index) => {
						return <ShowCard key={index} data={event} onClick={() => handleClick(index)} />;
					})}
				</ShowsWrapper>
			</Container>
		</>
	);
};

export default EventPage;
