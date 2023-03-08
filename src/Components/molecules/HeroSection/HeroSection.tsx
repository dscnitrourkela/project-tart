import React, { useContext } from 'react';

import { Button } from 'Components/atoms';
import useMediaQuery from 'Hooks/useMediaQuery';
import { AuthContext } from 'utils/AuthContext';
import { googleSignIn } from 'utils/userAuth';

import { ButtonWrapper, Container, Img, SectionContainer } from './styles';

const HeroSection: React.FC = () => {
	const isMobileView = useMediaQuery('(max-width: 544px)');
	const { user } = useContext(AuthContext);

	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		user && googleSignIn();
	};

	return (
		<>
			<SectionContainer>
				<Container>
					<Img src="NU_Branding.svg" alt="NU"></Img>
					<ButtonWrapper>
						<Button fullWidth={isMobileView} btnText="Explore More " />
						<Button
							fullWidth={isMobileView}
							filled
							btnText={user ? 'View Profile' : 'Register Now'}
							onClick={handleClick}
							link={user ? '/profile' : '/register'}
						/>
					</ButtonWrapper>
				</Container>
			</SectionContainer>
		</>
	);
};

export default HeroSection;
