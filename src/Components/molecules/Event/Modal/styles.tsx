import styled from 'styled-components';
import tw from 'twin.macro';

export const BackDrop = styled.div`
	z-index: 1000;
	width: 100vw;
	height: 100vh;
	background-color: #ffffff55;
	backdrop-filter: blur(10px);
	position: sticky;
	left: 0%;
	top: 0%;
	${tw`
    py-6
    flex
    justify-center
    items-center
    overflow-y-auto
    md:h-screen
    md:py-0
  `}
`;
