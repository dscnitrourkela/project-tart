import styled from 'styled-components';
import tw from 'twin.macro';

import { Props } from './types';

export default styled.h1<Props>`
	font-weight: ${(props) => (props.bold ? 500 : 300)};
	${tw`
      text-color-primary

      text-base
      leading-6

      sm:text-lg
      sm:leading-7
  `}
`;
