import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = styled.div`
	${tw`
    flex
    flex-row
    flex-wrap
    gap-10
    justify-center
    px-4
    my-16
    max-w-[1200px]
    mx-auto  
    md:my-20
    lg:justify-between
  `}
`;
