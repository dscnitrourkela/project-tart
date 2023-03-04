import styled from 'styled-components';
import tw from 'twin.macro';

import { Props } from './types';

export default styled.p<Props>`
	font-weight: ${(props) => (props.bold ? 500 : 300)};
	${tw`
      text-color-primary

      text-sm
      leading-5

      sm:text-base
      sm:leading-5
  `}
`;
