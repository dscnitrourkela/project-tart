import React, { useState } from 'react';

import { ShowCard } from 'Components/atoms/Event';
import { EventHero, Modal } from 'Components/molecules/Event';
import { Events } from 'Constants/Constants';
import useEvents from 'Hooks/useEvents';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { avenueApi } from 'utils/api';
import { AuthContext } from 'utils/AuthContext';

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

	const { title, description, image } = Events.filter((event) => event.slugName === eventName)[0];
	const { events } = useEvents(eventName);

	const { userData, accessToken } = React.useContext(AuthContext);

	const handleBook = async (eventId: string) => {
		try {
			const { data: registeredEvent } = await avenueApi.post(
				'/user/registration',
				{
					userID: userData.id,
					eventID: eventId,
				},
				{
					headers: {
						Authorization: `Bearer ${accessToken}`,
					},
				},
			);

			if (registeredEvent.userID === userData.id) {
				toast.success('Event registered successfully');
			} else {
				toast.error('Event registration failed');
			}
		} catch (err) {
			toast.error((err as Error).message);
		}
	};

	return (
		<>
			{modal && <Modal data={events[eventIndex]} onClick={handleClose} handleBook={handleBook} />}
			<Container isModalOpen={modal}>
				<EventHero title={title} description={description} image={image} />
				<ShowsWrapper>
					{events?.map((event, index) => {
						return <ShowCard key={index} data={event} onClick={() => handleClick(index)} handleBook={handleBook} />;
					})}
				</ShowsWrapper>
			</Container>
		</>
	);
};

export default EventPage;
