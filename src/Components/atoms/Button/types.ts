export interface StyleProps {
	filled?: boolean;
	success?: boolean;
	full?: boolean;
	fullWidth?: boolean;
}

export interface ButtonProps {
	btnText: string;
	filled?: boolean;
	success?: boolean;
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void | Promise<void>;
	fullWidth?: boolean;
	disabled?: boolean;
	link?: string;
}
