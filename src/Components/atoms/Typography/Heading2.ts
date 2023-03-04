import styled from 'styled-components';
import tw from 'twin.macro';

import { Props } from './types';

export default styled.h2<Props>`
	font-weight: ${(props) => (props.bold ? 600 : 400)};
	${tw`
      text-color-primary

      text-4xl
      leading-12

      sm:text-8xl
      sm:leading-16
  `}
`;
