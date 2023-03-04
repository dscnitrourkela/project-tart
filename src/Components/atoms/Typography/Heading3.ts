import styled from 'styled-components';
import tw from 'twin.macro';

import { Props } from './types';

export default styled.h3<Props>`
	font-weight: ${(props) => (props.bold ? 500 : 400)};
	@media (min-width: 720px) {
		font-weight: ${(props) => (props.bold ? 600 : 400)};
	}
	${tw`
      text-color-primary

      text-2xl
      leading-9

      sm:text-4xl
      sm:leading-12
  `}
`;
