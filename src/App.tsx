import React from 'react';
import './App.css';
import styled from 'styled-components';
import tw from 'twin.macro';

import Routes from 'Routes';

const Container = styled.div`
	${tw`
  text-orange-900
  font-extrabold
  text-3xl
  `};
`;

const App: React.FC = () => {
	return (
		<Container>
			<Routes />
		</Container>
	);
};

export default App;
