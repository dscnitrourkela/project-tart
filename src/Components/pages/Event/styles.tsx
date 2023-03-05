import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = styled.div<{ isModalOpen: boolean }>`
	${tw`
    mt-32
    px-4
    flex
    flex-col
    gap-16
    max-w-[1200px]
    md:px-6
    lg:mx-auto
    lg:px-0
  `}
	height: ${({ isModalOpen }) => (isModalOpen ? '80vh' : 'auto')};
	overflow: ${({ isModalOpen }) => (isModalOpen ? 'hidden' : 'auto')};
`;

export const ShowsWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 36px 24px;
`;
