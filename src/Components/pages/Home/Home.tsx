import React from 'react';

import { About, EventSection, FAQSection, HeroSection, Ticker } from 'Components/molecules';

const Home: React.FC = () => {
	return (
		<>
			<HeroSection />
			<Ticker />
			<About />
			<EventSection />
			<FAQSection />
		</>
	);
};

export default Home;
