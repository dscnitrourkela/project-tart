import styled from 'styled-components';
import tw from 'twin.macro';

import { Props } from './types';

export default styled.h1<Props>`
	font-weight: ${(props) => (props.bold ? 600 : 400)};
	@media (min-width: 720px) {
		font-weight: ${(props) => (props.bold ? 700 : 500)};
	}
	${tw`
      text-color-primary

      text-8xl
      leading-16

      sm:text-11xl
      sm:leading-24
  `}
`;
