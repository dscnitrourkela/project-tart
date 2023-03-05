import React from 'react';

import { Body1, Button } from 'Components/atoms';
import { NavListItems } from 'Constants/Constants';

import { MobileNavItem, MobileNavList, MobileViewList } from '../styles';

type MobileNavProps = {
	handleMenuClick?: () => void;
};

const MobileNavListComp: React.FC<MobileNavProps> = () => {
	return (
		<MobileViewList>
			<MobileNavList>
				{NavListItems.map((item) => (
					<a href="{item.src}" key={item.index}>
						<MobileNavItem>
							<Body1>{item.name}</Body1>
						</MobileNavItem>
					</a>
				))}
				<div className="mx-auto   pt-[75.5px]">
					<Button btnText="LOGIN"></Button>
				</div>
			</MobileNavList>
		</MobileViewList>
	);
};

export default MobileNavListComp;
