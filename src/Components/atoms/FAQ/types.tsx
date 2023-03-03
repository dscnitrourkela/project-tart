import React from 'react';

export interface FAQProps {
	question: string;
	answer: string;
}

export interface DisplayProps {
	children?: React.ReactNode | React.ReactNode[];
	answered?: boolean;
	display?: boolean;
}
