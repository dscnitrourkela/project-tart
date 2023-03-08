import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
	height: 100vh;
	width: 100vw;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Image = styled.img`
	height: 50%;
	width: 100%;
`;

const TxnHeading = styled.h1`
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 700;
	font-size: 64px;
	margin-top: 5%;
	background: #10c358;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	background-clip: text;
	-webkit-text-fill-color: transparent;
	margin-bottom: 20px;

	@media (max-width: 1200px) {
		font-size: 36px;
	}
	@media (max-width: 769px) {
		font-size: 28px;
		margin-bottom: 0px;
	}
`;

const TxnSuccessScreen: React.FC = () => {
	return (
		<Container>
			<Image
				src="https://res.cloudinary.com/dnylc640l/image/upload/v1678309574/Nitrutsav-23/assets/txn-success_unfepa.svg"
				alt="Txn Success"
			/>
			<TxnHeading>PAYMENT SUCCESSFUL!!!</TxnHeading>
		</Container>
	);
};

export default TxnSuccessScreen;
