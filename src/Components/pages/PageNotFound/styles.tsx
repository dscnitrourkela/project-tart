import styled, { keyframes } from 'styled-components';

const bounce = keyframes`
        0%   { transform: translateY(0); }
        50%  { transform: translateY(-100px); }
        100% { transform: translateY(0); }
`;

export const Wrapper = styled.div`
	width: 100vw;
	height: 50vh;
	margin-top: 5%;
	display: flex;
	justify-content: center;
	align-items: start;

	@media (max-width: 544px) {
		margin-top: 30%;
	}
`;

export const Image = styled.img`
	margin-top: 5%;
	height: 50%;
	width: auto;
	animation: ${bounce} 2s ease-in-out;
	animation-iteration-count: infinite;
`;

export const Heading = styled.h1`
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 700;
	font-size: 64px;
	text-align: center;
	background: linear-gradient(81.68deg, #6b014e -4.79%, #03016b 103.83%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	background-clip: text;
	text-fill-color: transparent;
	margin-bottom: 10px;

	@media (max-width: 1200px) {
		font-size: 36px;
	}
	@media (max-width: 769px) {
		font-size: 28px;
		margin-bottom: 0px;
	}
`;

export const Center = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 10px;
`;
