import React from 'react';

import { Ticket } from 'Components/atoms/Event';
import { TicketDataProps } from 'Components/atoms/Event/Ticket/types';

import { BackDrop } from './styles';

interface modalProps {
	data: TicketDataProps;
	onClick: () => void;
	handleBook: (eventId: string) => Promise<void>;
	disabled?: boolean;
}

const Modal: React.FC<modalProps> = ({ data, onClick, handleBook, disabled = true }) => {
	return (
		<>
			<BackDrop onClick={onClick}>
				<Ticket data={data} onClick={onClick} handleBook={handleBook} disabled={disabled} />
			</BackDrop>
		</>
	);
};

export default Modal;
