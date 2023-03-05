import styled from 'styled-components';
import tw from 'twin.macro';

export const Wrapper = styled.div`
	${tw`
    flex
    flex-col
    gap-12
    md:flex-row
    md:items-center
  `}
`;

export const Title = styled.div`
	background: linear-gradient(81.68deg, #6b014e -4.79%, #03016b 103.83%);
	color: transparent;
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	margin-bottom: 32px;
`;

export const Image = styled.img`
	${tw`
    w-1/2
    mx-auto
  `}
`;
