import './App.css';

import React from 'react';

import { ToastContainer } from 'react-toastify';
import Routes from 'Routes';
import AuthContextProvider from 'utils/AuthContext';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const App: React.FC = () => {
	return (
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
	);
};

export default App;
