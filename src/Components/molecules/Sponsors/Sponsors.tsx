import React from 'react';

// Components
import { Heading2, Heading3 } from 'Components/atoms/';
// Assets
import { sponsors } from 'Constants/Constants';

import { Container, SponsorContainer, SponsorLogo, Wrapper } from './styles';

const Sponsors: React.FC = () => {
	const sponsorDetails = [
		{
			title: 'TITLE SPONSORS',
			sponsors: sponsors.title,
			bcolor: '#A020F0',
			span: 'span 3',
			grid: 'repeat(auto-fit, minmax(200px, 1fr))',
			gap: '30px',
		},
		{
			title: 'GOLD SPONSORS',
			sponsors: sponsors.gold,
			bcolor: '#00FF00',
			span: 'span 2',
			grid: 'repeat(auto-fit, minmax(200px, 1fr))',
		},
		{
			title: 'SILVER SPONSORS',
			sponsors: sponsors.silver,
			bcolor: '#0000FF',
			grid: 'repeat(auto-fit, minmax(200px, 1fr))',
			span: 'span 5',
		},
		{
			title: 'BRONZE SPONSORS',
			sponsors: sponsors.bronze,
			bcolor: '#FFA500',
			grid: 'repeat(auto-fit, minmax(200px, 1fr))',
			span: 'span 5',
		},
	];

	return (
		<Container>
			<div className="w-full  mb-9">
				<Heading2 bold>SPONSORS</Heading2>
			</div>
			<div className="w-full grid gap-9 ">
				{sponsorDetails.map((details) => (
					<Wrapper
						key={details.title}
						brcol={details.bcolor}
						style={{
							gridColumnEnd: details.span,
						}}>
						<Heading3 bold>{details.title}</Heading3>

						<SponsorContainer style={{ gap: details.gap, gridTemplateColumns: details.grid }}>
							{details.sponsors.map(({ src, alt, size, link, name }) => (
								<SponsorLogo key={name}>
									{src ? (
										<a href={link} target="_blank" rel="noopener noreferrer">
											<img src={src} alt={alt} style={{ width: size }} />
										</a>
									) : (
										<div />
									)}
								</SponsorLogo>
							))}
						</SponsorContainer>
					</Wrapper>
				))}
			</div>
		</Container>
	);
};

export default Sponsors;
