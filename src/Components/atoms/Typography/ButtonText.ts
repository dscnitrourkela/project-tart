import styled from 'styled-components';
import tw from 'twin.macro';

export default styled.p<{ disabled?: boolean }>`
	font-weight: 500;
	cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

	${tw`
      text-inherit

      text-sm
      leading-5

      sm:text-base
      sm:leading-6
  `}
`;
