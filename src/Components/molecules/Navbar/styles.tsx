import styled from 'styled-components';
import tw from 'twin.macro';

export const LogoWrapper = styled.div`
	${tw`
    flex
    flex-row
    gap-1
    h-[100%]
    md:py-3
    py-1
    content-center
`}
`;

export const LogoImage = styled.img`
	${tw`
    h-[100%]
    my-auto
    `}
`;
export const LogoText = styled.p`
	${tw`
    font-Poppins
    font-medium
    text-base
    leading-6
    text-color-secondary
    my-auto
`}
`;

// export const ResponsiveMenu = styled.div`
// 	${tw`
//     flex
//     md:static
//     absolute
//     flex-col
//     md:flex-row
//     md:justify-around
//     top-[-100%]
//     w-full

// `}
// `;
export const NavList = styled.ul`
	${tw`
    flex
    md:flex-row
    gap-6
    list-none
    my-auto
    md:py-7
    md:static 
    absolute
    flex-col
    top-[-300%]
`}
`;

export const NavItem = styled.div`
	${tw`
`}
`;

export const ButtonWrapper = styled.div`
	${tw`
    md:py-[10px]
    md:static 
    absolute
    top-[-300%]
`}
`;

// export const MenuButton = styled.img`
// 	background: transparent;
// 	${tw`
//     py-7
//     cursor-pointer
//     `}
// `;
