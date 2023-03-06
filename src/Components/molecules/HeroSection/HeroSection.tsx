import React from 'react';

import { Button } from 'Components/atoms';
import useMediaQuery from 'Hooks/useMediaQuery';

import { ButtonWrapper, Container, Img, SectionContainer } from './styles';

const HeroSection: React.FC = () => {
	const isMobileView = useMediaQuery('(max-width: 544px)');
	return (
		<>
			<SectionContainer>
				<Container>
					<Img src="NU_Branding.svg" alt="NU"></Img>
					<ButtonWrapper>
						<Button fullWidth={isMobileView} btnText="Explore More " />
						<Button fullWidth={isMobileView} filled btnText="Register Now" />
					</ButtonWrapper>
				</Container>
			</SectionContainer>
		</>
	);
};

export default HeroSection;
