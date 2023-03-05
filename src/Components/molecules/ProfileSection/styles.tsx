import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

export const Profile = styled.div`
	${tw`
lg:ml-[126px]
lg:mr-[290px]
ml-4
mr-6
`}
`;

export const ProfileContainer = styled.div`
	${tw`
grid
lg:grid-cols-3
lg:gap-x-[40px]
lg:gap-y-[46px]
lg:mt-12
mb-[86px]
gap-y-4
grid-cols-1
mt-8
`}
`;

export const InfoContainer = styled.fieldset`
	${tw`
px-3
pb-1
rounded-2xl
border-black
border-[1px]
`}
`;

export const InfoHeader = styled.legend`
	${tw`
        text-sm
        text-color-primary
        font-[500]
    `}
`;
