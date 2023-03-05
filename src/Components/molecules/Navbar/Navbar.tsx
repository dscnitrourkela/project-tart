import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import { Button } from 'Components/atoms';

const Wrapper = styled.div`
	${tw`
 h-60
 `};
`;

const Navbar: React.FC = () => {
	return (
		<Wrapper>
			<h1>Navbar</h1>
			<Button btnText="Nav Button" />
		</Wrapper>
	);
};

export default Navbar;
