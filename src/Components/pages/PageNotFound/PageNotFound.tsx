import React from 'react';

import error from 'assets/404.svg';
import { Body1, Button } from 'Components/atoms';
import { useHistory } from 'react-router-dom';

import { Center, Heading, Image, Wrapper } from './styles';

const PageNotFound: React.FC = () => {
	const history = useHistory();

	const handleGoHome = (e: { preventDefault: () => void }) => {
		e.preventDefault();
		history.push('/');
	};

	return (
		<>
			<Wrapper>
				<Image src={error} alt="404 - Page Not Found" />
			</Wrapper>
			<Heading>OOPS!!!</Heading>
			<Body1 style={{ textAlign: 'center' }}>The page you are looking for doesn&apos;t exist.</Body1>
			<Center>
				<Button onClick={handleGoHome} filled btnText="Go Home" />
			</Center>
		</>
	);
};

export default PageNotFound;
