import React, { useState } from 'react';

import NU_logo from 'assets/NU_logo.svg';

import { LogoImage, LogoText, LogoWrapper } from '../styles';
import MobileNavList from './MobileNavList/MobileNavList';
import { MenuButton, NavBar } from './styles';

const MobileNav: React.FC = () => {
	const [menuIsOpen, setMenuIsOpen] = useState(false);

	const toggleMenuIsOpen = () => (menuIsOpen ? setMenuIsOpen(false) : setMenuIsOpen(true));

	const handleMenuClick = () => {
		toggleMenuIsOpen();
	};

	return (
		<NavBar menuIsOpen={menuIsOpen}>
			<div>
				<nav className="mobileNavWrapper">
					<a href="/">
						<LogoWrapper>
							<LogoImage src={NU_logo} alt="NU" />
							<LogoText>NITRUTSAV 2023</LogoText>
						</LogoWrapper>
					</a>

					<div onClick={toggleMenuIsOpen} className="btn__container">
						<MenuButton menuIsOpen={menuIsOpen}>
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
