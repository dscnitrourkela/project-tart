import React from 'react';

import { Footer, Navbar } from 'Components/molecules';
import styled from 'styled-components';
import tw from 'twin.macro';

const Wrapper = styled.div`
	${tw`
 h-60
 `};
`;

const Home: React.FC = () => {
	return (
		<Wrapper>
			<Navbar />
			<h1>Homepage</h1>
			<Footer />
		</Wrapper>
	);
};

export default Home;
