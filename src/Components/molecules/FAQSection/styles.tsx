import { Heading2 } from 'Components/atoms';
import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = styled.div`
	${tw`
    mx-4
    my-16
    md:max-w-[1200px]
    md:mx-auto
    md:px-4
    md:my-20
  `}
`;

export const FAQContainer = styled.div`
	${tw`
    flex
    flex-col
    gap-3
    md:gap-2.5
  `}
`;

export const Title = styled(Heading2)`
	${tw`
    pb-6
    md:pb-12
  `}
`;
