import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const Wrapper = styled.div`
	${tw`
 h-60
 `};
`;

const Button: React.FC = () => {
	return (
		<Wrapper>
			<h1>Button</h1>
		</Wrapper>
	);
};

export default Button;
