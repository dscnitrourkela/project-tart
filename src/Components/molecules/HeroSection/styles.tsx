import styled, { keyframes } from 'styled-components';
import tw from 'twin.macro';

export const SectionContainer = styled.div`
	background: radial-gradient(103.68% 187.3% at -3.69% 53.57%, #fff0e2 0%, #feffce 100%), #ffffff;
	${tw`
    max-h-screen
    overflow-x-hidden
    overflow-y-hidden
    py-20
    flex
    items-center
    justify-center
    md:p-36
    lg:p-40
  `}
`;

export const Container = styled.div`
	${tw`
    px-4 
 `};
`;

export const Img = styled.img`
	${tw`
   mb-8
 `};
`;

export const ButtonWrapper = styled.div`
	${tw`
    flex
    flex-col
    justify-center
    mt-16
    gap-4
    md:mt-8
    md:gap-20
    md:flex-row
 `};
`;

// // TICKER

export const TickerContainer = styled.div`
	background: #545454;
	${tw`
    w-full 
    overflow-hidden
    mb-16
  `}
`;

export const ticker = keyframes`
  0% {
    transform: translate(50vw, 0);
  }
  100% {
    transform: translate(-200%, 0);
  }
`;

export const TickerMover = styled.div`
	${tw`
    inline-block
    whitespace-nowrap
  `}
	animation: ${ticker} 15s linear 0s infinite;
	&:hover {
		animation-play-state: paused;
	}
`;

export const ItemContainer = styled.div`
	display: inline-block;
	margin: 0.5rem 0.5rem;
	height: auto;
	width: auto;
	${tw`
  h-40
  md:h-auto
  `}
`;

// Ticker Item

export const TickerIcon = styled.img`
	display: inline-block;
	vertical-align: middle;
	${tw`
  h-40
  md:h-48
  `}
`;

export const Image = styled.img`
	${tw`
  absolute  
  rounded
  inset-0
  z-10
  w-full
  h-3/4
  translate-y-5
  md:translate-y-6
`}
`;

export const ImageConatiner = styled.div`
	${tw`
  relative 
  `}
`;
