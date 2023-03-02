import styled from 'styled-components';
import tw from 'twin.macro';

import { Props } from './types';

export default styled.p<Props>`
	font-weight: 300;
	${tw`
      text-color-primary

      text-xl
      leading-4.5

      sm:text-sm
      sm:leading-5
  `}
`;
