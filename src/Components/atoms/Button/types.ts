export interface StyleProps {
	filled?: boolean;
	success?: boolean;
	full?: boolean;
}

export interface ButtonProps {
	btnText: string;
	filled?: boolean;
	success?: boolean;
	full?: boolean;
	onClick?: () => void;
}
