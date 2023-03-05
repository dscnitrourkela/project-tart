import React from 'react';

import { Body1, Body2, Button, Caption, Heading1, Heading2, Heading3, Heading4, NavText } from 'Components/atoms';

const Playground: React.FC = () => {
	return (
		<>
			<span style={{ marginTop: '500px' }}>Hello</span>
			<Button btnText="Label" filled={true} success={true} />
			<Heading1>Heading 1</Heading1>
			<Heading2>Heading 2</Heading2>
			<Heading3>Heading 3</Heading3>
			<Heading4>Heading 4</Heading4>
			<Body1 bold>Body 1</Body1>
			<Body2>Body 2</Body2>
			<Caption>Caption</Caption>
			<NavText>Nav</NavText>
		</>
	);
};

export default Playground;
