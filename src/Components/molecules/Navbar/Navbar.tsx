import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { LogoWrapper, LogoText, NavList, NavItem, ButtonWrapper } from './styles';
import { Button, NavText } from 'Components/atoms';
import { LogoImage } from './styles';
import { NavListItems } from 'Constants/Constants';

const Wrapper = styled.header`
	box-shadow: 0px 2px 20px rgba(65, 65, 65, 0.1);
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
 `};
`;

// function toggleMenu() {

// }
const Navbar: React.FC = () => {
	return (
		<Wrapper>
			<LogoWrapper>
				<LogoImage
					src="https://res.cloudinary.com/dme9vltjf/image/upload/v1677841432/NITRUtsav/Mask_group_yulpep.svg"
					alt="NU"
				/>
				<LogoText>NITRUTSAV 2K23</LogoText>
			</LogoWrapper>

			<NavList>
				{NavListItems.map((item) => (
					<a href="{item.src}" key={item.index}>
						<NavItem>
							<NavText>{item.name}</NavText>
						</NavItem>
					</a>
				))}
			</NavList>

			<ButtonWrapper>
				<Button btnText="LOGIN"></Button>
			</ButtonWrapper>

			<img
				className="pr-[16px] py-[12px] bg-transparent md:hidden cursor-pointer"
				src="https://res.cloudinary.com/dme9vltjf/image/upload/v1677912358/NITRUtsav/Frame_642_fmirqj.png"
				alt=""
			/>
		</Wrapper>
	);
};

export default Navbar;
