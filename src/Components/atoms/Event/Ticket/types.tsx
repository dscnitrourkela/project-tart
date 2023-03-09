export interface TicketDataProps {
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
	id?: string;
}
