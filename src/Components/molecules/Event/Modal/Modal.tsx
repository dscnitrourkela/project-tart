import React from 'react';

import { Ticket } from 'Components/atoms/Event';
import { TicketProps } from 'Components/atoms/Event/Ticket/types';

import { BackDrop } from './styles';

const Modal: React.FC<{ data: TicketProps; onClick: () => void }> = ({ data, onClick }) => {
	return (
		<>
			<BackDrop onClick={onClick}>
				<Ticket data={data} onClick={onClick} />
			</BackDrop>
		</>
	);
};

export default Modal;
