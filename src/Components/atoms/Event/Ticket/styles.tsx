import Heading4 from 'Components/atoms/Typography/Heading4';
import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = styled.div`
	${tw`
    relative
    bg-background-secondary
    flex
    flex-col-reverse
    w-[328px]
    sm:w-[384px]
    md:h-[468px]
    md:flex-row
    md:w-auto
		rounded-lg
  `}
	box-shadow: 0 0 6px 1px rgba(0, 0, 0, 0.1);
`;

export const LeftCard = styled.div`
	${tw`
    p-4
    w-full
    md:max-w-[743px]
    md:h-full
    md:shrink-[2]
    md:p-6
  `}
	@media (max-width: 880px) {
		border-top: dashed 2px #95959566;
	}
`;

export const RightCard = styled.div`
	${tw`
    p-4
    flex
    flex-col
    gap-6
    relative
    w-full
    h-[330px]
    sm:h-[384px]
    md:w-[408px]
    md:h-full
    md:p-6
    md:pl-12
  `}
	@media (min-width: 880px) {
		border-left: dashed 2px #95959566;
	}
`;

const Circle = styled.div`
	${tw`
		absolute
		h-9
		w-9
		md:h-12
		md:w-12
	`}
	border-radius: 100%;
	background-color: var(--background-primary);
`;

export const Circle1 = styled(Circle)`
	bottom: 0;
	left: 0;
	transform: translate(-50%, 50%);
	box-shadow: inset -8px 0 3px -7px rgba(0, 0, 0, 0.1);

	@media (min-width: 880px) {
		top: 0;
		transform: translate(-50%, -50%);
		box-shadow: inset 0 -10px 3px -7px rgba(0, 0, 0, 0.1);
	}
`;

export const Circle2 = styled(Circle)`
	bottom: 0;
	right: 0;
	transform: translate(50%, 50%);
	box-shadow: inset 8px 0 3px -7px rgba(0, 0, 0, 0.1);

	@media (min-width: 880px) {
		left: 0;
		transform: translate(-50%, 50%);
		box-shadow: inset 0 10px 3px -7px rgba(0, 0, 0, 0.1);
	}
`;

export const Description = styled.li`
	${tw`
    h-[332px]
    overflow-y-auto
    flex
    flex-col
    gap-3
    my-4
    pr-3
  `}

	&::-webkit-scrollbar-track {
		display: none;
	}
	&::-webkit-scrollbar {
		width: 8px;
	}

	&::-webkit-scrollbar-thumb {
		border-radius: 20px;
		background-color: #dadada;
	}
`;

export const Head = styled.div`
	${tw`
    flex
    gap-4
  `}
`;

export const Poster = styled.img`
	${tw`
		w-[56px]
    md:w-[72px]
	`}
`;

export const Heading = styled(Heading4)`
	${tw`
    inline-block
    md:block
  `}
`;

export const Close = styled.img`
	${tw`
    cursor-pointer
    absolute
    top-0
    left-0
    h-5
    w-5
  `}
	transform: translate(-50%, -50%);
`;
