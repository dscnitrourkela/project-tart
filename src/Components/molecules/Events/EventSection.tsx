import React from 'react';

import Card from 'Components/atoms/CategoryCard/Card';
import { Events } from 'Constants/Constants';

import { Container } from './styles';

const EventSection: React.FC = () => {
	return (
		<Container>
			{Events.map(({ slugName, description, image, title }) => {
				return <Card key={slugName} description={description} image={image} title={title} link={slugName} />;
			})}
		</Container>
	);
};

export default EventSection;
