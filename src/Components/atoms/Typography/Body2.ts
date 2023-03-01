import styled from 'styled-components';
import tw from 'twin.macro';

import { Props } from './types';

export default styled.h1<Props>`
	font-weight: ${(props) => (props.bold ? 300 : 500)};
	${tw`
      text-color-primary

      text-sm
      leading-5

      sm:text-base
      sm:leading-5
  `}
`;
