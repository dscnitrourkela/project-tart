import React, { useContext, useEffect } from 'react';

import { Button } from 'Components/atoms';
import useMediaQuery from 'Hooks/useMediaQuery';
import { AuthContext } from 'utils/AuthContext';

import { ButtonWrapper, Container, Img, SectionContainer } from './styles';

const HeroSection: React.FC = () => {
	const isMobileView = useMediaQuery('(max-width: 544px)');
	const { user, userData, loading } = useContext(AuthContext);
	const [registered, setRegistered] = React.useState(false);

	// const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
	// 	e.preventDefault();
	// 	!user && googleSignIn();
	// };

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
						<a
							href="https://drive.google.com/file/d/1ihSZ-PbWi3ONg4WE2QFE1vR_Id9cdJuy/view?usp=sharing"
							target="_blank"
							rel="noopener noreferrer">
							<Button fullWidth={isMobileView} btnText="View Brochure" />
						</a>
						<Button
							fullWidth={isMobileView}
							filled
							disabled={!user}
							btnText={registered ? 'View Profile' : 'Registrations Closed'}
							link={registered ? '/profile' : '/'}
						/>
					</ButtonWrapper>
				</Container>
			</SectionContainer>
		</>
	);
};

export default HeroSection;
