import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';

import { SVGIcon } from 'Components/atoms';
import {
	ButtonIcon,
	ButtonText,
	Clap,
	Clapdown,
	Clapup,
	Container,
	Description,
	DescriptionBox,
	DownSpan,
	Link,
	PopImage,
	Rotor,
	UpSpan,
} from './styles';
import { CategoryCardProps } from './types';

import { ReactComponent as rotor } from 'assets/Rotor.svg';
import { ReactComponent as arrow } from 'assets/Vector.svg';

const Card: React.FC<CategoryCardProps> = ({ title, description, image, link }) => {
	const history = useHistory();
	const [rotorColor, setRotorColor] = useState<string>('#ACACAC');
	const [arrowColor, setArrowColor] = useState<string>('#03016B');

	const handleEventCardClick = () => {
		history.push(`/event/${link}`);
	};
	return (
		<Container
			onMouseOver={() => {
				setRotorColor('#03016B');
				setArrowColor('#fff');
			}}
			onMouseOut={() => {
				setRotorColor('#ACACAC');
				setArrowColor('#03016B');
			}}
			onClick={handleEventCardClick}
			className="group">
			<Clap>
				<PopImage src={image} alt={`${title} Category`} />
				<Rotor>
					<SVGIcon Icon={rotor} color={rotorColor} />
				</Rotor>
				<Clapup>
					{Array(10)
						.fill(null)
						.map((key) => (
							<UpSpan key={key} />
						))}
				</Clapup>
				<Clapdown>
					{Array(10)
						.fill(null)
						.map((key) => (
							<DownSpan key={key} />
						))}
				</Clapdown>
			</Clap>
			<DescriptionBox>
				<Description>{description}</Description>
				<Link>
					<ButtonText>{title}</ButtonText>
					<ButtonIcon>
						<SVGIcon Icon={arrow} color={arrowColor} />
					</ButtonIcon>
				</Link>
			</DescriptionBox>
		</Container>
	);
};

export default Card;
