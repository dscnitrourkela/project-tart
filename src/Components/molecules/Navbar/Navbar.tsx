import React from 'react';

import useMediaQuery from 'Hooks/useMediaQuery';

import DesktopNavbar from './DesktopNavbar';
import MobileNav from './MobileNav';

const Navbar: React.FC = () => {
	const isMobileView = useMediaQuery('(max-width: 969px)');
	return isMobileView ? <MobileNav /> : <DesktopNavbar />;
};

export default Navbar;
