import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';

import { LogoImage, LogoText, LogoWrapper } from '../styles';
import MobileNavList from './MobileNavList/MobileNavList';
import { MenuButton, NavBar } from './styles';

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
						<LogoImage
							src="https://res.cloudinary.com/dme9vltjf/image/upload/v1677841432/NITRUtsav/Mask_group_yulpep.svg"
							alt="NU"
						/>
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
