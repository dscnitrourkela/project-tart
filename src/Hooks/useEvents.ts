import { useMemo } from 'react';

import { avenueApi } from 'utils/api';

import { useQuery } from '@tanstack/react-query';

import { EventData, EventProps, useEventHook } from './types';

const fetchEvents = (event: string) =>
	avenueApi.get('/events', { params: { type: event, orgID: '640892e9f785cdd0afcd8ccf' } });

const useEvents = (event: string): useEventHook => {
	const { data, isLoading } = useQuery({
		queryKey: ['events', event],
		queryFn: () => fetchEvents(event),
	});

	const events = useMemo<EventProps[]>(() => {
		return data?.data
			?.map((event: EventData) => {
				const name = JSON.parse(event.name);
				const description = JSON.parse(event.description);
				const date = new Date(event.startDate);

				return {
					title: name.heading,
					club: name.subHeading,
					date: date.getDate(),
					month: date.toDateString().split(' ')[1],
					time: `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`,
					description: description,
					venue: 'LA',
					prizes: name.prizeAmount,
					poster: event.poster
						? event.poster
						: 'https://res.cloudinary.com/dujqfyato/image/upload/v1677924775/TART/Frame_586_ibkz1d.svg',
					// poster: 'https://res.cloudinary.com/dujqfyato/image/upload/v1677924775/TART/Frame_586_ibkz1d.svg',
				};
			})
			.sort((a: EventProps, b: EventProps) => +a.date - +b.date);
	}, [data]);

	return { events, isLoading };
};

export default useEvents;
