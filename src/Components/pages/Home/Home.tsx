import React from 'react';

import { About, FAQSection, HeroSection, Ticker } from 'Components/molecules';

const Home: React.FC = () => {
	return (
		<>
			<HeroSection />
			<Ticker />
			<About />
			<FAQSection />
		</>
	);
};

export default Home;
