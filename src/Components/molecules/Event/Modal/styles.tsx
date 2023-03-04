import styled from 'styled-components';
import tw from 'twin.macro';

export const BackDrop = styled.div`
	z-index: 10;
	width: 100vw;
	background-color: #ffffff55;
	backdrop-filter: blur(10px);
	${tw`
    py-6
    absolute
    left-0
    top-0
    flex
    justify-center
    items-center
    overflow-y-auto
    md:h-screen
    md:py-0
  `}
`;
