import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = styled.div`
	${tw`
    bg-background-secondary
		w-[328px]
    sm:w-[384px]
    border-[1px]
		border-brand-left
		rounded-[8px]
  `}
`;

export const TopCard = styled.div`
	${tw`
		flex
		flex-col
		items-center
		relative
    px-10
    pt-3
    pb-4
    h-[364px]
    sm:h-[460px]
    sm:px-[42px]
    sm:py-6
  `}
	border-bottom: dashed 2px #95959566;
`;

export const BottomCard = styled.div`
	${tw`
		flex
		flex-col
		items-center
		gap-3
    px-5
    py-3
    h-[102px]
    sm:h-[134px]
    sm:p-6
    sm:pb-[50px]
  `}
`;

const Circle = styled.div`
	${tw`
		absolute
		h-8
		w-8
		sm:h-12
		sm:w-12
	`}
	border-radius: 100%;
	background-color: var(--background-primary);
`;

export const Circle1 = styled(Circle)`
	bottom: 0;
	left: 0;
	transform: translate(-50%, 50%);
	border-right: solid 1px #6b014e;
`;

export const Circle2 = styled(Circle)`
	bottom: 0;
	right: 0;
	transform: translate(50%, 50%);
	border-left: solid 1px #6b014e;
`;

export const Poster = styled.img`
	${tw`
		mb-2
	`}
`;

export const Venue = styled.div`
	${tw`
		mt-1
		flex
		w-full
		justify-between
	`}
`;
