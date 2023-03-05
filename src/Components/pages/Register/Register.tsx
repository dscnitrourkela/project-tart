import React from 'react';

import { RegistrationForm } from 'Components/molecules';

import { Container, ImageContainer, Logo, RegisterWrapper } from './styles';

const Register: React.FC = () => {
	return (
		<Container>
			<ImageContainer src="camera 1.svg" alt="Register image" />
			<RegisterWrapper>
				<Logo src="NU_Branding.svg" alt="Logo" />
				<RegistrationForm />
			</RegisterWrapper>
		</Container>
	);
};

export default Register;
