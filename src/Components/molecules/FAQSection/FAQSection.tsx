import React from 'react';

import FAQ from 'Components/atoms/FAQ/FAQ';
import { FAQs } from 'Constants/Constants';

import { Container, FAQContainer, Title } from './styles';

const FAQSection: React.FC = () => {
	return (
		<Container>
			<Title bold>F.A.Q.s</Title>
			<FAQContainer>
				{FAQs.map(({ question, answer }) => (
					<FAQ key={question} question={question} answer={answer} />
				))}
			</FAQContainer>
		</Container>
	);
};

export default FAQSection;
