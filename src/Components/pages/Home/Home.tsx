import React from 'react';

import { About, EventSection, FAQSection, HeroSection, Sponsors, Ticker } from 'Components/molecules';

const Home: React.FC = () => {
	return (
		<div className="overflow-x-hidden">
			<HeroSection />
			<Ticker />
			<About />
			<EventSection />
			<Sponsors />
			<FAQSection />
		</div>
	);
};

export default Home;
