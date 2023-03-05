import React from 'react';

import Card from 'Components/atoms/CategoryCard/Card';

import { Container } from './styles';

const EventSection: React.FC = () => {
	return (
		<Container>
			{[1, 2, 3, 4].map((key) => (
				<Card key={key} />
			))}
		</Container>
	);
};

export default EventSection;
