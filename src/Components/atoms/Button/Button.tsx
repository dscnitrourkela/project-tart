import React from 'react';

import { ButtonText } from 'Components/atoms';
import styled from 'styled-components';
import tw from 'twin.macro';

import { ButtonProps, StyleProps } from './types';

const Wrapper = styled.button<StyleProps>`
	display: flex;
	justify-content: center;
	width: ${(props) => (props.fullWidth ? '100%' : 'fit-content')};
	border-color: ${(props) => (props.success ? '#5BDB8E' : 'transparent')};
	border-style: solid;
	border-width: 2px;
	cursor: pointer;
	background: ${(props) =>
		props.filled
			? !props.success
				? 'linear-gradient(81.68deg, #6B014E -4.79%, #03016B 103.83%)'
				: '#FFFFFF'
			: ' linear-gradient(#F1F0F9, #F1F0F9) padding-box, linear-gradient(81.68deg, #6B014E -4.79%, #03016B 103.83%) border-box'};
	color: ${(props) =>
		props.filled
			? props.success
				? '#5BDB8E'
				: '#FFFFFF'
			: 'linear-gradient(81.68deg, #6B014E -4.79%, #03016B 103.83%)'};
	${tw`
    flex
    justify-center
    gap-6
	justify-center
	items-center
    px-[32px]
    py-[10px]
    sm:px-[48px]  
    sm:py-[18px]
    rounded-xl
  `}
`;

const Button: React.FC<ButtonProps> = ({
	btnText = 'button',
	filled = false,
	success = false,
	full = false,
	fullWidth = false,
}) => {
	return (
		<Wrapper filled={filled} success={success} full={full} fullWidth={fullWidth}>
			<ButtonText>{btnText}</ButtonText>
			{success && <img src="tick.svg" />}
		</Wrapper>
	);
};

export default Button;
