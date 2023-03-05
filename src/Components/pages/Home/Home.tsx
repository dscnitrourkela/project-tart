import React from 'react';

import { Footer, Navbar, HeroSection } from 'Components/molecules';
import styled from 'styled-components';
import tw from 'twin.macro';
import Ticker from 'Components/molecules/HeroSection/Ticker';

const Wrapper = styled.div`
	${tw`
 h-60
 `};
`;

const Home: React.FC = () => {
	return (
		<Wrapper>
			<Navbar />
			<HeroSection />
			<Ticker />
			<h1>Homepage</h1>
			<Footer />
		</Wrapper>
	);
};

export default Home;
