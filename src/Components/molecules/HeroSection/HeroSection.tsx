import React from 'react';

import { Container, Img, ButtonWrapper, SectionContainer } from './styles';
import { Button } from 'Components/atoms';

const HeroSection: React.FC = () => {
	return (
		<>
			<SectionContainer>
				<Container>
					<Img src="NU_Branding.svg" alt="NU"></Img>
					<ButtonWrapper>
						<Button btnText="Explore More " />
						<Button filled btnText="Register Now" />
					</ButtonWrapper>
				</Container>
			</SectionContainer>
		</>
	);
};

export default HeroSection;
