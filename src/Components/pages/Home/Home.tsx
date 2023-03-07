import React from 'react';

import { About, EventSection, FAQSection, HeroSection, Ticker } from 'Components/molecules';

const Home: React.FC = () => {
	return (
		<div className="overflow-x-hidden">
			<HeroSection />
			<Ticker />
			<About />
			<EventSection />
			<FAQSection />
		</div>
	);
};

export default Home;
