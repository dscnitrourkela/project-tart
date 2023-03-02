import styled from 'styled-components';
import tw from 'twin.macro';

import { Props } from './types';

export default styled.p<Props>`
	font-weight: ${(props) => (props.bold ? 700 : 400)};
	${tw`
      text-color-primary

      text-sm
      leading-4
  `}
`;
