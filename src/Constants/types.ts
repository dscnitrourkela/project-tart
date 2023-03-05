export interface EventShow {
	name: string;
	orgID: string;
	startDate: string;
	place?: string;
	time?: string;
	prizes?: string;
	about?: string;
	contacts?: {
		name?: string;
		phone?: string;
	}[];
}

export interface EventData {
	slugName: string;
	title: string;
	description?: string;
	image?: string;
}
