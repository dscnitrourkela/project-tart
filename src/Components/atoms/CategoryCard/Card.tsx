import React from 'react';

import { ReactComponent as rotor } from 'assets/Rotor.svg';
import { ReactComponent as arrow } from 'assets/Vector.svg';
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

const Card: React.FC<CategoryCardProps> = ({ title, description, image, link }) => {
	return (
		<React.Fragment>
			<a href={`/event/${link}`}>
				<Container className="group">
					<Clap>
						<PopImage src={image} alt={`${title} Category`} loading="lazy" />
						<Rotor>
							<SVGIcon Icon={rotor} color="#ACACAC" />
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
								<SVGIcon Icon={arrow} color="#03016B" />
							</ButtonIcon>
						</Link>
					</DescriptionBox>
				</Container>
			</a>
		</React.Fragment>
	);
};

export default Card;
