import React, { useContext } from 'react';

import { Button, NavText } from 'Components/atoms';
import { NavListItems } from 'Constants/Constants';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import tw from 'twin.macro';
import { AuthContext } from 'utils/AuthContext';
import { googleSignIn, signout } from 'utils/userAuth';
import NU_logo from 'assets/NU_logo.svg';

import { ButtonWrapper, LogoImage, LogoText, LogoWrapper, NavItem, NavList } from './styles';

const Wrapper = styled.header`
	box-shadow: 0px 2px 20px rgba(65, 65, 65, 0.1);
	background: rgb(255, 255, 255, 0.7);
	backdrop-filter: blur(10px);

	${tw`
	flex
	flex-row
 	justify-between
	align-middle
 	md:px-32
	pl-[6.83px]
	md:h-[80px]
	h-[40px]
	sticky
	top-0
	z-[500]
	w-full
	overflow-hidden
 `};
`;

const DesktopNavbar: React.FC = () => {
	const { user, userData } = useContext(AuthContext);
	const history = useHistory();

	const handleLogoClick = () => {
		history.push('/');
	};

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
		<Wrapper>
			<LogoWrapper onClick={handleLogoClick}>
				<LogoImage
					// src="https://res.cloudinary.com/dme9vltjf/image/upload/v1677841432/NITRUtsav/Mask_group_yulpep.svg"
					src={NU_logo}
					alt="NU"
				/>
				<LogoText>NITRUTSAV 2023</LogoText>
			</LogoWrapper>

			<NavList>
				{NavListItems.map((item) => (
					<a href={item.src} key={item.index}>
						<NavItem>
							<NavText>{item.name}</NavText>
						</NavItem>
					</a>
				))}
			</NavList>

			<ButtonWrapper>
				<Button btnText={user ? 'LOGOUT' : 'LOGIN'} onClick={handleLogin}></Button>
			</ButtonWrapper>
		</Wrapper>
	);
};

export default DesktopNavbar;
