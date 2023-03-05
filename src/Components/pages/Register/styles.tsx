import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = styled.div`
	${tw`
    flex
  `}
`;

export const ImageContainer = styled.img`
	${tw`
    hidden
    md:block
    h-screen
  `}
`;

export const Logo = styled.img`
	${tw`
    mb-10
    w-[200px]
    max-w-[337px]
    sm:w-1/3
  `}
`;

export const RegisterWrapper = styled.div`
	${tw`
    flex
    flex-col
    items-center
    w-full
    my-5
  `}
`;
