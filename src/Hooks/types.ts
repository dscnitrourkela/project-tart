export interface EventData {
	createdAt?: string;
	description: string;
	endDate?: string;
	id: string;
	locationID?: string;
	name: string;
	notes?: string[];
	orgID?: string;
	orgType: string;
	pocID?: string[];
	poster: string;
	priority?: number;
	startDate: string;
	status?: string;
	type?: string;
	updatedAt?: string;
	weekly?: boolean;
}

export interface EventProps {
	title: string;
	club: string;
	venue: string;
	time: string;
	date: string;
	month: string;
	prizes: string;
	description: {
		id: number;
		desc: string;
	}[];
	contact?: {
		name: string;
		phone: string;
	}[];
	poster: string;
}

export interface useEventHook {
	events: EventProps[];
	isLoading: boolean;
}
