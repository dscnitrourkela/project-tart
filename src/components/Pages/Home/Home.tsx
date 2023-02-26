import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import { Navbar, Footer } from 'Components/molecules';

const Wrapper = styled.div`
	${tw`
 h-60
 `};
`;

const Button: React.FC = () => {
	return (
		<Wrapper>
			<Navbar />
			<h1>Homepage</h1>
			<Footer />
		</Wrapper>
	);
};

export default Button;
