import styled from 'styled-components';
import tw from 'twin.macro';

export const Wrapper = styled.div`
	${tw`
	w-full
	bg-background-secondary
    mt-16 
    shadow-inner
 `};
`;

export const Container = styled.div`
	${tw`
    pb-12
    md:max-w-[1200px] 
    md:mx-auto
    md:py-16 
    md:px-4
    `};
`;

export const FooterWrapper = styled.div`
	${tw`
	flex 
    flex-col
    border-b-2  
    py-6 
    mx-12
    md:mx-0
    md:justify-around 
    md:flex-row 
    lg:px-10 
    mb-10
    lg:gap-16
    `};
`;

export const PrimaryContainer = styled.div`
	${tw`
    flex 
    flex-col
    justify-center
    items-center
    md:justify-start
    lg:flex-row 
    md:items-start 
    md:gap-2
    lg:gap-20
    `};
`;

export const SecondaryContainer = styled.div`
	${tw`
    flex
    flex-col
    justify-center
    lg:flex-row
    lg:gap-28
    `};
`;

export const LogoWrapper = styled.div`
	${tw`
	flex
    flex-wrap
	flex-row
    items-center 
    justify-between 
    gap-2
    mb-6
 `};
`;

export const ContentWrapper = styled.div`
	${tw`
	flex
    flex-col
    items-center
    md:items-start
    mb-4
 `};
`;

export const Span = styled.div`
	${tw`
	flex
    flex-row
    gap-2
    items-center
 `};
`;
export const A = styled.a`
	${tw`
	cursor-pointer
 `};
`;

export const CopyrightWrapper = styled.div`
	${tw`
flex 
text-center
justify-center
px-12
`};
`;

export const Logo = styled.img`
	${tw`
	h-8 
    w-8
 `};
`;
