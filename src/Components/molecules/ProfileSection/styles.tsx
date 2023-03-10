import { Button } from 'Components/atoms';
import Heading4 from 'Components/atoms/Typography/Heading4';
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
    mb-[20px]
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
    cursor-default
`}
`;

export const InfoHeader = styled.legend`
	${tw`
    text-sm
    text-color-primary
    font-[500]
    `}
`;

export const Container = styled.div`
	${tw`
    relative
    bg-background-secondary
    flex
    flex-col-reverse
    w-[328px]
    sm:w-fit
    // md:h-[468px]
    md:flex-row
	rounded-lg
  `}
	box-shadow: 0 0 6px 1px rgba(0, 0, 0, 0.1);
	height: fit-content;
	margin: 5% auto;
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
    md:w-[350px]
    md:h-full
    md:p-6
    md:pl-12
  `}
	@media (min-width: 880px) {
		border-left: dashed 2px #95959566;
	}
`;

export const Head = styled.div`
	${tw`
    flex
    gap-4
    truncate
    min-h-[72px]
  `}
`;

export const Poster = styled.img`
	${tw`
		w-[72px]
    h-auto
    md:w-[72px]
	`}
`;

export const Title = styled(Heading4)`
	${tw`
    truncate
    max-w-[150px]
    sm:max-w-[180px]
  `}
`;

export const Heading = styled(Heading4)`
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 500;
	font-size: 24px;
	line-height: 36px;
	color: #414141;
	${tw`
    inline-block
    md:block
  `}
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
	transform: translate(0%, 50%);
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

export const Btn = styled(Button)`
	width: 100%;
`;

export const Grid = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	gap: 20px;
`;

export const EventContainer = styled.div`
	max-width: 1200px;
	margin: 40px auto;
	padding: 0 20px;
`;
