import React from 'react';

import { Body2, Heading2 } from 'Components/atoms/';

import ProfileCard from './ProfileCard';
import { Grid, InfoContainer, InfoHeader, Profile, ProfileContainer } from './styles';

const ProfileSection: React.FC = () => {
	return (
		<>
			<Profile>
				<Heading2 bold>Your Profile</Heading2>
				<ProfileContainer>
					{[1, 2, 3, 4, 5].map((x) => (
						<InfoContainer key={x}>
							<InfoHeader>Name</InfoHeader>
							<Body2>Enter your name</Body2>
						</InfoContainer>
					))}
				</ProfileContainer>
				<Heading2 bold>Registered Events</Heading2>
			</Profile>
			<Grid>
				{[1, 2, 3, 4, 5, 6].map((x) => (
					<ProfileCard key={x} />
				))}
			</Grid>
		</>
	);
};

export default ProfileSection;
