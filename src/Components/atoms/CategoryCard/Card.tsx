import React from 'react';

import {
	ButtonText,
	ButtonIcon,
	Clap,
	Clapdown,
	Clapup,
	Container,
	Description,
	DownSpan,
	Link,
	PopImage,
	Rotor,
	UpSpan,
	DescriptionBox,
} from './styles';

const Card: React.FC = () => {
	return (
		<Container className="group">
			<Clap>
				<PopImage src="PopImage.svg" alt="PopImage" />
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
				<Description>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere voluptas asperiores neque reprehenderit earum
					in, vero soluta officiis dolore eaque cum ipsam ut, architecto, magnam iste illo. Iure vitae ipsa repellendus
					quos.
				</Description>
				<Link>
					<ButtonText>Proshows</ButtonText>
					<ButtonIcon width="4%" height="auto" src="Vector.svg" />
				</Link>
			</DescriptionBox>
		</Container>
	);
};

export default Card;
