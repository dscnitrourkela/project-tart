import React from 'react';

import NU_logo from 'assets/NU_logo.svg';
import { Body1, Body2, Caption } from 'Components/atoms';
import { footer } from 'Constants/Constants';

import {
	A,
	Container,
	ContentWrapper,
	CopyrightWrapper,
	EventWrapper,
	FooterWrapper,
	Logo,
	LogoWrapper,
	PrimaryContainer,
	SecondaryContainer,
	Span,
	Wrapper,
} from './styles';

const Footer: React.FC = () => {
	return (
		<Wrapper>
			<Container>
				<FooterWrapper>
					<PrimaryContainer>
						<EventWrapper>
							<LogoWrapper>
								<Logo src={NU_logo} alt={footer.Logo.alt} />
								<Body2 bold>{footer.Logo.title}</Body2>
							</LogoWrapper>

							<Caption>{footer.Logo.about}</Caption>
						</EventWrapper>

						<ContentWrapper>
							<Body1 bold style={{ marginBottom: '1em' }}>
								{footer.ImpLinks.title}
							</Body1>
							{footer.ImpLinks.impLinks.map((Link, key) => (
								<A href={`/event/${Link.href}`} target="_blank" key={key}>
									<Body2 style={{ lineHeight: '1.5em' }}>{Link.text}</Body2>
								</A>
							))}
						</ContentWrapper>
					</PrimaryContainer>
					<SecondaryContainer>
						<ContentWrapper>
							<Body1 bold style={{ marginBottom: '1em' }}>
								{footer.Timings.title}
							</Body1>

							<Span>
								<Body2 bold>Weekdays:</Body2>
								<Body2 style={{ lineHeight: '1.5em' }}>{footer.Timings.weekdays}</Body2>
							</Span>
							<Span>
								<Body2 bold>Saturday,Sunday:</Body2>
								<Body2 style={{ lineHeight: '2em' }}>{footer.Timings.weekends}</Body2>
							</Span>
						</ContentWrapper>
						<ContentWrapper>
							<Body1 bold style={{ marginBottom: '1em' }}>
								Contact us:
							</Body1>
							<Span>
								<Body2 bold>Ashish:</Body2>
								<Body2 style={{ lineHeight: '1.5em' }}>9078240859</Body2>
							</Span>
							<Span>
								<Body2 bold>Dibyani:</Body2>
								<Body2 style={{ lineHeight: '2em' }}>8144933165</Body2>
							</Span>
						</ContentWrapper>
					</SecondaryContainer>
				</FooterWrapper>
				<CopyrightWrapper className="">
					<Body1 bold>{footer.CopyRight}</Body1>
				</CopyrightWrapper>
			</Container>
		</Wrapper>
	);
};

export default Footer;
