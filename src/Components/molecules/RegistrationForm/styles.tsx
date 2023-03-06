import styled from 'styled-components';
import tw from 'twin.macro';

export const Wrapper = styled.div`
	${tw`
    w-full
    px-3
    my-10
    flex
    flex-col
    gap-8
    max-w-[820px]
    items-center
    xl:items-start
  `}
`;

export const Form = styled.form`
	${tw`
    w-full
    flex
    flex-wrap
    justify-center
  `}
	gap: 57px 68px;
	@media (max-width: 768px) {
		gap: 24px;
	}
`;

export const ButtonContainer = styled.div<{ margin?: string }>`
	${tw`
    flex
    gap-12
    justify-center
  `}
	margin-top: ${(props) => props.margin};
`;
