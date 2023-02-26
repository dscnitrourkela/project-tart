import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import { ButtonProps } from './types';

const Wrapper = styled.div`
	${tw`
 h-60
 `};
`;

const Button: React.FC<ButtonProps> = ({ btnText = 'Button' }) => {
	return (
		<Wrapper>
			<h1>{btnText}</h1>
		</Wrapper>
	);
};

export default Button;
