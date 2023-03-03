import React, { useEffect, useState } from 'react';

import { Body1, Body2 } from 'Components/atoms';

import { Answer, Container, FAQButton, Question } from './styles';
import { FAQProps } from './types';

const FAQ: React.FC<FAQProps> = ({ question = '', answer = '' }) => {
	const [answered, setAnswered] = useState(false);
	const [display, setDisplay] = useState(false);

	useEffect(() => {
		answered
			? setDisplay(true)
			: setTimeout(() => {
					setDisplay(false);
			  }, 300);
	}, [answered, setDisplay]);

	return (
		<Container>
			<Question answered={answered} $display={display}>
				<Body2 bold>{question}</Body2>
				<FAQButton
					answered={answered}
					onClick={() => {
						setAnswered(!answered);
					}}>
					<img height="auto" width="100%" src="FAQ_arrow.svg" />
				</FAQButton>
			</Question>
			<Answer answered={answered} $display={display}>
				<Body1>{answer}</Body1>
			</Answer>
		</Container>
	);
};

export default FAQ;
