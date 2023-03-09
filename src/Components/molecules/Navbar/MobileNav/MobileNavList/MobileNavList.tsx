import React, { useContext } from 'react';

import { Body1, Button } from 'Components/atoms';
import { NavListItems } from 'Constants/Constants';
import { useHistory } from 'react-router-dom';
import { AuthContext } from 'utils/AuthContext';
import { googleSignIn, signout } from 'utils/userAuth';

import { MobileNavItem, MobileNavList, MobileViewList } from '../styles';

type MobileNavProps = {
	handleMenuClick?: () => void;
};

const MobileNavListComp: React.FC<MobileNavProps> = () => {
	const history = useHistory();

	const { user, userData } = useContext(AuthContext);
	const handleLogin = async () => {
		if (user) {
			signout();
			history.push('/');
		} else {
			await googleSignIn();
			userData?.name ? history.push('/profile') : history.push('/register');
		}
	};

	return (
		<MobileViewList>
			<MobileNavList>
				{NavListItems.map((item) => (
					<a href={item.src} key={item.index}>
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
