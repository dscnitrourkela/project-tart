import React from 'react';
import { NavListItems } from 'Constants/Constants';
import { MobileNavList } from '../styles';
import { Button, Body1 } from 'Components/atoms';
import { MobileViewList } from '../styles';
import { MobileNavItem } from '../styles';

type MobileNavProps = {
	handleMenuClick: () => void;
};

function MobileNavListComp({ handleMenuClick }: MobileNavProps) {
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
}

export default MobileNavListComp;
