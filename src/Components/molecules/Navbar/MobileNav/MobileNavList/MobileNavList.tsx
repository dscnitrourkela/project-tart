import React, { useContext } from 'react';

import { Body1, Button } from 'Components/atoms';
import { NavListItems } from 'Constants/Constants';
import { AuthContext } from 'utils/AuthContext';
import { googleSignIn, signout } from 'utils/userAuth';

import { MobileNavItem, MobileNavList, MobileViewList } from '../styles';

type MobileNavProps = {
	handleMenuClick?: () => void;
};

const MobileNavListComp: React.FC<MobileNavProps> = () => {
	const { user } = useContext(AuthContext);
	const handleLogin = () => {
		user ? signout() : googleSignIn();
	};

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
					<Button btnText={user ? 'LOGOUT' : 'LOGIN'} onClick={handleLogin}></Button>
				</div>
			</MobileNavList>
		</MobileViewList>
	);
};

export default MobileNavListComp;
