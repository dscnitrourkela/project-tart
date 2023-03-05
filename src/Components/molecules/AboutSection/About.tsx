import React from 'react';

import { Body2, Heading1 } from 'Components/atoms';
import styled from 'styled-components';
import tw from 'twin.macro';

const Container = styled.div`
	${tw`
 mx-12
 my-12
 flex
 flex-row
 `}
`;

const Content = styled.div`
	${tw`
 mx-12
 my-12
 `}
`;

const Trailer = styled.div`
	${tw`
 mx-12
 my-12
 `}
`;

const About: React.FC = () => {
	return (
		<Container>
			<Content>
				<Heading1>NITRUTSAV 2023</Heading1>
				<Body2>
					Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
					aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
					Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
					dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
					amet, consectetur
				</Body2>
			</Content>
			<Trailer>
				<iframe
					width="560"
					height="315"
					src="https://www.youtube.com/embed/AY1Hxf5_hiE"
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowFullScreen></iframe>
			</Trailer>
		</Container>
	);
};

export default About;
