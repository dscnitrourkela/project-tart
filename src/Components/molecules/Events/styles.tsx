// export const Container = styled.div`
// 	${tw`
//     flex
//     flex-row
//     flex-wrap
//     justify-center
//     gap-10
//     mx-4
//     my-16
//     md:max-w-[1200px]
//     md:mx-auto
//     md:px-4
//     md:my-20
//   `}
// `;

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
