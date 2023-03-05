import React from 'react';

import { Body1, Body2, Button, Caption, Heading1, Heading2, Heading3, Heading4, NavText } from 'Components/atoms';
import { About, FAQSection, HeroSection } from 'Components/molecules';
import Ticker from 'Components/molecules/HeroSection/Ticker';

const Playground: React.FC = () => {
	return (
		<>
			<span style={{ marginTop: '500px' }}>Hello</span>
			<Button btnText="Label" filled={true} success={true} />
			<Heading1>Heading 1</Heading1>
			<Heading2>Heading 2</Heading2>
			<Heading3>Heading 3</Heading3>
			<Heading4>Heading 4</Heading4>
			<Body1 bold>Body 1</Body1>
			<Body2>Body 2</Body2>
			<Caption>Caption</Caption>
			<NavText>Nav</NavText>
			<div>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit impedit molestias minima, molestiae incidunt
					officiis voluptas non? Nemo quidem delectus quae minima eligendi. Quibusdam fugit distinctio, dolore iste
					porro esse error iure earum placeat sequi labore commodi qui quis ipsum tenetur, itaque quae cumque dicta
					sunt. Veritatis sit dolore aut sint? Repellendus.
				</p>
			</div>

			<About />
			<FAQSection />
			<HeroSection />
			<Ticker />
		</>
	);
};

export default Playground;
