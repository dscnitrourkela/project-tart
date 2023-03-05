import styled from 'styled-components';
import tw from 'twin.macro';
import Body2 from '../Typography/Body2';
import Heading3 from '../Typography/Heading3';

export const Container = styled.div`
	height: 580px;
	${tw`
	flex
	flex-col
	justify-end
    rounded
    bg-background-secondary
	max-w-lg
`}
`;

export const Description = styled(Body2)`
	color: #616161;
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
export const Rotor = styled.img`
	height: 65px;
	${tw`
	absolute 
	z-10
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
	group-hover:-rotate-45
`}
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
`;

export const PopImage = styled.img`
	${tw`
	hidden
	mx-auto
	h-64
	w-96
	group-hover:block
`}
`;

export const Link = styled.span`
	${tw`
	flex
	flex-row	
	justify-center
	items-center
	mt-6
	gap-2
`}
`;
export const ButtonText = styled(Heading3)`
	background: -webkit-linear-gradient(81.68deg, #6b014e -4.79%, #03016b 103.83%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	${tw`
	
`}
`;
export const ButtonIcon = styled.img`
	transition: transform 0.4s ease-out;
	margintop: '0.2em';
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
