import { valueProps } from 'Constants/types';

export interface LabelProps {
	focus?: boolean;
}

export interface InputProps {
	objectKey: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
	onBlur: (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => void;
	values: valueProps;
}
