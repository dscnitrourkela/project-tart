import React, { useState } from 'react';

import { LogoImage, LogoText, LogoWrapper } from '../styles';
import MobileNavList from './MobileNavList/MobileNavList';
// import { NavListItems } from 'Constants/Constants';
import { MenuButton, NavBar } from './styles';

// const newScrollObject = () => {
// 	// eslint-disable-next-line
// 	const SmoothScroll = require('smooth-scroll');
// 	return new SmoothScroll('', {
// 		offset: () => 690,
// 	});
// };

//   const handleScroll = (id) => {
//     if (typeof window !== 'undefined' && id) {
//       const isHome = window.location.pathname === '/';
//       if (isHome) {
//         const scroll = newScrollObject();
//         const anchor = document.getElementById(id);
//         scroll.animateScroll(anchor);
//       }
//     }
//   };

const MobileNav: React.FC = () => {
	const [menuIsOpen, setMenuIsOpen] = useState(false);

	const toggleMenuIsOpen = () => (menuIsOpen ? setMenuIsOpen(false) : setMenuIsOpen(true));

	const handleMenuClick = () => {
		toggleMenuIsOpen();
		//   handleScroll(id);
	};

	return (
		<NavBar menuIsOpen={menuIsOpen}>
			<div>
				<nav className="mobileNavWrapper">
					{/* <Logo
						src="https://res.cloudinary.com/dme9vltjf/image/upload/v1677841432/NITRUtsav/Mask_group_yulpep.svg"
						alt="NU"
					/> */}
					<LogoWrapper>
						<LogoImage
							src="https://res.cloudinary.com/dme9vltjf/image/upload/v1677841432/NITRUtsav/Mask_group_yulpep.svg"
							alt="NU"
						/>
						<LogoText>NITRUTSAV 2K23</LogoText>
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
