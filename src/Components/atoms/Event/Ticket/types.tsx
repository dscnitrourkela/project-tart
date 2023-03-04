export interface TicketProps {
	title: string;
	club: string;
	venue: string;
	time: string;
	date: string;
	month: string;
	prizes: string;
	description: {
		id: number;
		text: string;
	}[];
	contact?: {
		name: string;
		phone: string;
	}[];
	poster: string;
}
