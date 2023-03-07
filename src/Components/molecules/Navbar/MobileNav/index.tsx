import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';

import { LogoImage, LogoText, LogoWrapper } from '../styles';
import MobileNavList from './MobileNavList/MobileNavList';
import { MenuButton, NavBar } from './styles';
import NU_logo from 'assets/NU_logo.svg';

const MobileNav: React.FC = () => {
	const [menuIsOpen, setMenuIsOpen] = useState(false);
	const history = useHistory();

	const toggleMenuIsOpen = () => (menuIsOpen ? setMenuIsOpen(false) : setMenuIsOpen(true));

	const handleMenuClick = () => {
		toggleMenuIsOpen();
	};

	const handleLogoClick = () => {
		history.push('/');
	};

	return (
		<NavBar menuIsOpen={menuIsOpen}>
			<div>
				<nav className="mobileNavWrapper">
					<LogoWrapper onClick={handleLogoClick}>
						<LogoImage src={NU_logo} alt="NU" />
						<LogoText>NITRUTSAV 2023</LogoText>
					</LogoWrapper>

					<div className="btn__container">
						<MenuButton onClick={toggleMenuIsOpen} menuIsOpen={menuIsOpen}>
							<span className="menu_burger" />
						</MenuButton>
					</div>
				</nav>
			</div>

			{menuIsOpen && <MobileNavList handleMenuClick={handleMenuClick} />}
		</NavBar>
	);
};

export default MobileNav;
