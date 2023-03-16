import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = styled.div`
	${tw`
    max-w-[1200px]
    mx-auto
    px-4
    mt-20
    mb-10
  `}
`;

export const Wrapper = styled.div<{ brcol: string }>`
	border: 2px solid transparent;
	transition: 0.5s;
	&:hover {
		border: 2px solid ${(props) => props.brcol};
	}

	@media (max-width: 720px) {
		border: 2px solid ${(props) => props.brcol};
	}
	${tw`
    flex
    flex-col
    gap-0
    md:gap-7
    rounded-xl
    md:rounded-3xl
    p-5
    md:py-12
    md:px-9
    bg-background-secondary
    shadow
    `}
	@media (max-width: 900px) {
		grid-column: span 7;
	}
`;

export const SponsorContainer = styled.div`
	${tw`
    w-full
    grid
    gap-[10px]
    justify-center
  `}
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

	@media (max-width: 1380px) {
		grid-template-columns: repeat(auto-fit, minmax(85px, 1fr));
	}
	@media (max-width: 639px) {
		grid-template-columns: repeat(2, minmax(50px, 1fr));
	}
`;

export const SponsorLogo = styled.div`
	${tw`
    p-3 
    m-auto
    justify-center
    align-middle
  `}
`;
