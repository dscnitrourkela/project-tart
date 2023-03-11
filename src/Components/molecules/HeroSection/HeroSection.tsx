import React, { useContext, useEffect } from 'react';

import { Button } from 'Components/atoms';
import useMediaQuery from 'Hooks/useMediaQuery';
import { AuthContext } from 'utils/AuthContext';
import { googleSignIn } from 'utils/userAuth';

import { ButtonWrapper, Container, Img, SectionContainer } from './styles';

const HeroSection: React.FC = () => {
	const isMobileView = useMediaQuery('(max-width: 544px)');
	const { user, userData, loading } = useContext(AuthContext);
	const [registered, setRegistered] = React.useState(false);

	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		!user && googleSignIn();
	};

	useEffect(() => {
		if (loading === false && (userData.festID?.includes('nitrutsav-2023') || userData?.rollNumber)) {
			setRegistered(true);
		}
	}, [loading, userData]);

	return (
		<>
			<SectionContainer>
				<Container>
					<Img src="NU_Branding.svg" alt="NU"></Img>
					<ButtonWrapper>
						<Button fullWidth={isMobileView} btnText="Explore More" link={'/event/flagship'} />
						<Button
							fullWidth={isMobileView}
							filled
							btnText={registered ? 'View Profile' : 'Register Now'}
							onClick={handleClick}
							link={registered ? '/profile' : '/register'}
						/>
					</ButtonWrapper>
				</Container>
			</SectionContainer>
		</>
	);
};

export default HeroSection;
