import React from 'react';

import { Body2, Heading2 } from 'Components/atoms/';
import { avenueApi } from 'utils/api';
import { AuthContext } from 'utils/AuthContext';

import ProfileCard from './ProfileCard';
import { Grid, InfoContainer, InfoHeader, Profile, ProfileContainer } from './styles';
import { RegisteredEventProps } from './type';

const profileInfo = ['Name', 'Email', 'College', 'City', 'State'];

interface eventData {
	id: string;
	name: string;
	description: string;
	startDate: string;
	endDate: string;
	orgID: string;
	poster: string;
	prizes: string;
	venue: string;
}

const ProfileSection: React.FC = () => {
	const { userData, loading, accessToken } = React.useContext(AuthContext);
	const [registeredEvents, setRegisteredEvents] = React.useState<eventData[]>([]);
	const [parsedEvents, setParsedEvents] = React.useState<RegisteredEventProps[]>([]);

	const fetchUserEvents = React.useCallback(async () => {
		try {
			const { data: eventList } = await avenueApi.get(`/user/registration`, {
				params: {
					userID: userData.id,
				},
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			});

			setRegisteredEvents(eventList.filter((event: eventData) => event.orgID.includes('640892e9f785cdd0afcd8ccf')));

			const parsedEvents = registeredEvents.map((event: eventData) => {
				const name = JSON.parse(event.name);
				const date = new Date(event.startDate);

				return {
					title: name.heading,
					club: name.subHeading,
					date: date.getDate(),
					month: date.toDateString().split(' ')[1],
					time: `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`,
					venue: 'LA',
					orgID: event.orgID,
					prizes: name.prizeAmount,
					poster: event.poster
						? event.poster
						: 'https://res.cloudinary.com/dujqfyato/image/upload/v1677924775/TART/Frame_586_ibkz1d.svg',
				};
			});

			setParsedEvents(parsedEvents);
		} catch (err) {
			return null;
		}
	}, [registeredEvents, userData.id, accessToken]);

	React.useEffect(() => {
		fetchUserEvents();
	}, [loading, fetchUserEvents]);

	return (
		<>
			<Profile>
				<Heading2 bold>Your Profile</Heading2>
				<ProfileContainer>
					{profileInfo.map((key) => (
						<InfoContainer key={key}>
							<InfoHeader>{key}</InfoHeader>
							<Body2>{userData[key.toLowerCase() as keyof typeof userData]}</Body2>
						</InfoContainer>
					))}
				</ProfileContainer>
				<Heading2 bold>Registered Events</Heading2>
			</Profile>
			<Grid>
				{parsedEvents.map((event: RegisteredEventProps) => (
					<ProfileCard key={event.title} event={event} />
				))}
			</Grid>
		</>
	);
};

export default ProfileSection;
