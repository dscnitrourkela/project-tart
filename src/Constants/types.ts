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
		optionValues?: string[];
		caption?: string;
	};
}

export interface userDataType {
	id?: string;
	name?: string;
	email?: string;
	mobile?: string;
	gender?: string;
	state?: string;
	city?: string;
	college?: string;
	stream?: string;
	rollNumber?: string;
	festID?: string;
	referredBy?: string;
}
