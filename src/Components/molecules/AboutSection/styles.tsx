import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = styled.div`
	height: fit-content;
	width: 85%;
	margin: 0 auto;
	margin-top: 10%;
	margin-bottom: 10%;
	display: flex;
	gap: 5%;
	flex-direction: row;
	align-items: center;

	@media (max-width: 1024px) {
		flex-direction: column;
	}
`;

export const Embed = styled.iframe`
	width: 588px;
	height: 328px;
	border-radius: 16px;
	margin-top: 0;

	@media (max-width: 1024px) {
		margin-top: 8%;
		height: 280px;
		width: 500px;
	}
	@media (max-width: 769px) {
		margin-top: 10%;
		height: 230px;
		width: 360px;
	}
`;

export const AboutHeading = styled.h1`
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 700;
	font-size: 64px;
	background: linear-gradient(81.68deg, #6b014e -4.79%, #03016b 103.83%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	background-clip: text;
	text-fill-color: transparent;
	margin-bottom: 20px;

	@media (max-width: 1200px) {
		font-size: 36px;
	}
	@media (max-width: 769px) {
		font-size: 28px;
		margin-bottom: 0px;
	}
`;

export const Content = styled.div`
	${tw`
	`}
`;

export const Trailer = styled.div``;
