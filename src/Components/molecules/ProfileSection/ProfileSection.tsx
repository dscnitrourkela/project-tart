import { Heading2, Body2 } from 'Components/atoms';
import React from 'react';
import { Profile, InfoHeader, InfoContainer, ProfileContainer } from './styles';
import { RightCard } from 'Components/atoms/Event/Ticket/styles';
const ProfileSection: React.FC = () => {
	return (
		<Profile>
			<Heading2 bold>Your Profile</Heading2>
			<ProfileContainer>
				<InfoContainer>
					<InfoHeader>Name</InfoHeader>
					<Body2>Enter your name</Body2>
				</InfoContainer>
				<InfoContainer>
					<InfoHeader>Name</InfoHeader>
					<Body2>Enter your name</Body2>
				</InfoContainer>
				<InfoContainer>
					<InfoHeader>Name</InfoHeader>
					<Body2>Enter your name</Body2>
				</InfoContainer>
				<InfoContainer>
					<InfoHeader>Name</InfoHeader>
					<Body2>Enter your name</Body2>
				</InfoContainer>
				<InfoContainer>
					<InfoHeader>Name</InfoHeader>
					<Body2>Enter your name</Body2>
				</InfoContainer>
			</ProfileContainer>
			<Heading2 bold>Registered Events</Heading2>
		</Profile>
	);
};

export default ProfileSection;
