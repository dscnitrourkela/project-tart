import styled from 'styled-components';
import tw from 'twin.macro';

import Body2 from '../Typography/Body2';
import Heading3 from '../Typography/Heading3';

export const PopImage = styled.img`
	position: absolute;
	left: 10%;
	top: 20%;
	transition: transform 500ms;
	z-index: -9;
	transform: translateY(-10px);

	${tw`
	mx-auto
	h-64
	w-96
`}
`;

export const Description = styled(Body2)`
	color: #616161;
	overflow: hidden;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 6;
	${tw`
text-center 
px-6
mt-8
`};
`;

export const Clap = styled.div`
	${tw`
relative 
rounded-t-xl
`}
`;
export const Rotor = styled.div`
	height: 65px;
	z-index: 299;
	${tw`
absolute 
`}
`;

export const Clapup = styled.div`
	transition: transform 0.4s ease-out;
	${tw`
flex 
justify-center
p-0.5
bg-zinc-200 
mb-0.5 
rounded-t-xl
origin-left
group-hover:-rotate-[30deg]
`}
	z-index:90;
`;
export const Clapdown = styled.div`
	${tw`
flex 
justify-center
p-0.5
bg-zinc-200 
rounded-b-xl
origin-left
`}
	position: inherit;
	z-index: 199;
`;

export const DescriptionBox = styled.div`
	border-radius: 0 0 12px 12px;
	${tw`
flex
flex-col
bg-background-secondary

`}
	z-index: 299;
`;

export const Link = styled.span`
	${tw`
flex
	flex-row	
	justify-center
	items-center
	mt-6
	gap-2
	cursor-pointer
	`}
`;
export const ButtonText = styled(Heading3)`
	background: -webkit-linear-gradient(81.68deg, #6b014e -4.79%, #03016b 103.83%);
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	${tw`
	md:text-[40px]
`}
`;
export const ButtonIcon = styled.div`
	transition: transform 0.4s ease-out;
	margin-top: '0.2em';
	${tw`
group-hover:rotate-45
`}
`;

export const UpSpan = styled.span`
	clip-path: polygon(0 0, 65% 0, 100% 100%, 35% 100%);
	background: linear-gradient(81.68deg, #6b014e -4.79%, #03016b 103.83%);
	${tw`
p-3.5
`}
`;
export const DownSpan = styled.span`
	clip-path: polygon(35% 1%, 100% 0, 65% 100%, 0 100%);
	background: linear-gradient(81.68deg, #6b014e -4.79%, #03016b 103.83%);
	${tw`
p-3.5
`}
`;

export const Container = styled.div`
	height: 500px;
	${tw`
	flex
	flex-col
	justify-end
	rounded
	max-w-lg
	cursor-pointer
`}
	z-index: 90;
	&:hover ${PopImage} {
		z-index: 99;
		transform: translateY(-200px);
		top: 0;
	}
`;
