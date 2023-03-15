import styled, { keyframes } from 'styled-components';
import tw from 'twin.macro';

import { DisplayProps } from './types';

const grow = keyframes`
  0% { height: 0; }
  25% { height: 25%; }
  50% { height: 50%; }
  75% { height: 75%; }
  100% { height: auto; }
`;

const shrink = keyframes`
  0% { height: auto; }
  25% { height: 75%; }
  50% { height: 50%; }
  75% { height: 25%; }
  100% { height: 0; }
`;

export const Container = styled.div<DisplayProps>`
	${tw`
    px-2
    rounded
    bg-background-secondary
    md:px-6
    cursor-pointer
  `}
`;
export const Question = styled.div<DisplayProps>`
	border-bottom: ${(props) => (props.$display ? '1px solid #D9D9D9' : 'none')};
	${tw`
    flex
    justify-between
    py-3.5
    md:py-4
  `}
`;

export const Answer = styled.div<DisplayProps>`
	animation: ${(props) => (props.answered ? grow : shrink)} 0.2s linear;
	overflow: hidden;
	display: ${(props) => (props.$display ? 'block' : 'none')};
	${tw`
    py-3
    md:py-4  
  `}
`;

export const FAQButton = styled.button<DisplayProps>`
	transform: ${(props) => (props.answered ? 'rotate(0deg)' : 'rotate(-180deg)')};
	transition: transform 0.5s ease-in-out;
	${tw`
    focus:outline-none
  `}
`;
