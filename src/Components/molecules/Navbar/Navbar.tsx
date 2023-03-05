import React from 'react';
import DesktopNavbar from './DesktopNavbar';
import MobileNav from './MobileNav';

import useMediaQuery from 'Hooks/useMediaQuery';

const Navbar = () => {
	const isMobileView = useMediaQuery('(max-width: 969px)');

	return isMobileView ? <MobileNav /> : <DesktopNavbar />;
};

export default Navbar;
