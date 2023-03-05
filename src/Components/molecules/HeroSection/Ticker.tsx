import React from 'react';
import { Heading2 } from 'Components/atoms';

import TickerItem from './TickerItem';
import { TickerContainer, TickerMover, ItemContainer } from './styles';

const Ticker: React.FC = () => {
	return (
		<TickerContainer>
			<TickerMover>
				{[1, 2, 3, 4, 5, 6, 7].map((key) => {
					return <TickerItem key={key} />;
				})}
				<div style={{ margin: '0 20vw', display: 'inline-block' }} />
				{[1, 2, 3, 4, 5, 6, 7].map((key) => {
					return <TickerItem key={key} />;
				})}
				<div style={{ margin: '0 20vw', display: 'inline-block' }} />
				{[1, 2, 3, 4, 5, 6, 7].map((key) => {
					return <TickerItem key={key} />;
				})}
			</TickerMover>
		</TickerContainer>
	);
};

export default Ticker;
