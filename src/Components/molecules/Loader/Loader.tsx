import React from 'react';

import styled, { keyframes } from 'styled-components';

const Wrapper = styled.div`
	height: 100vh;
	width: 100vw;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const rotation = keyframes`
0% { transform: rotate(0deg) }
    100% { transform: rotate(360deg) }
`;

const Spinner = styled.span`
	width: 48px;
	height: 48px;
	border: 5px solid blue;
	border-bottom-color: #ff3d00;
	border-radius: 50%;
	display: inline-block;
	animation: ${rotation} 1s linear infinite;
`;

const Loader: React.FC = () => {
	return (
		<Wrapper>
			<Spinner />
		</Wrapper>
	);
};

export default Loader;
