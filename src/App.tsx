import './App.css';

import React from 'react';

import Helmet from 'react-helmet';
import { ToastContainer } from 'react-toastify';
import Routes from 'Routes';
import AuthContextProvider from 'utils/AuthContext';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const App: React.FC = () => {
	return (
		<main>
			<Helmet>
				{/* <!-- HTML Meta Tags --> */}
				<title>NITRUTSAV 2023</title>
				<meta
					name="description"
					content="NITRUTSAV, the Literary and Cultural Fest of NIT Rourkela works to give students a creative outlet to commemorate and introspectively explore their minds filled with ingenuity and innovation."
				/>

				{/* <!-- Google / Search Engine Tags --> */}
				<meta itemProp="name" content="NITRUTSAV 2023" />
				<meta
					itemProp="description"
					content="NITRUTSAV, the Literary and Cultural Fest of NIT Rourkela works to give students a creative outlet to commemorate and introspectively explore their minds filled with ingenuity and innovation."
				/>
				<meta itemProp="image" content="https://nitrutsav.live/NU_Branding.svg" />

				{/* <!-- Facebook Meta Tags --> */}
				<meta property="og:url" content="https://nitrutsav.live" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="NITRUTSAV 2023" />
				<meta
					property="og:description"
					content="NITRUTSAV, the Literary and Cultural Fest of NIT Rourkela works to give students a creative outlet to commemorate and introspectively explore their minds filled with ingenuity and innovation."
				/>
				<meta property="og:image" content="https://nitrutsav.live/NU_Branding.svg" />

				{/* <!-- Twitter Meta Tags --> */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="NITRUTSAV 2023" />
				<meta
					name="twitter:description"
					content="NITRUTSAV, the Literary and Cultural Fest of NIT Rourkela works to give students a creative outlet to commemorate and introspectively explore their minds filled with ingenuity and innovation."
				/>
				<meta name="twitter:image" content="https://nitrutsav.live/NU_Branding.svg" />
			</Helmet>
			<AuthContextProvider>
				<QueryClientProvider client={queryClient}>
					<Routes />
					<ToastContainer
						position="bottom-left"
						autoClose={5000}
						hideProgressBar={false}
						newestOnTop={false}
						closeOnClick
						rtl={false}
						pauseOnFocusLoss
						draggable
						pauseOnHover
						theme="colored"
					/>
				</QueryClientProvider>
			</AuthContextProvider>
		</main>
	);
};

export default App;
