import React from 'react';

import { NavLink } from 'react-router-dom';

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

const Card: React.FC<CategoryCardProps> = ({ title, description, image, link }) => {
	return (
		<Container className="group">
			<Clap>
				<PopImage src={image} alt={`${title} Category`} />
				<Rotor src="Rotor.svg" alt="alt" />
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
					<ButtonText>
						<NavLink to={`/event/${link}`}>{title}</NavLink>
					</ButtonText>
					<ButtonIcon width="4%" height="auto" src="Vector.svg" />
				</Link>
			</DescriptionBox>
		</Container>
	);
};

export default Card;
