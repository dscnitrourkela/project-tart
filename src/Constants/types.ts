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

export interface valueProps {
	[key: string]: {
		value: string;
		placeholder: string;
		readOnly: boolean;
		type: string;
		inputMode: string;
		key: string;
		show: string;
		maxLength?: number;
		minLength?: number;
		errorVisibility?: boolean;
		errorMessage?: string;
		options?: string[];
		caption?: string;
	};
}
