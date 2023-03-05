import React from 'react';

import { Body2 } from 'Components/atoms';
import { AboutContent } from 'Constants/Constants';

import { AboutHeading, Container, Content, Embed, Trailer } from './styles';

const About: React.FC = () => {
	const { title, description, trailerLink } = AboutContent;
	return (
		<Container>
			<Content>
				<AboutHeading>{title}</AboutHeading>
				<Body2>{description}</Body2>
			</Content>
			<Trailer>
				<Embed
					src={trailerLink}
					title="NITRUTSAV 2023 Official Trailer"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowFullScreen></Embed>
			</Trailer>
		</Container>
	);
};

export default About;
