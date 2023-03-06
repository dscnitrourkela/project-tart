import './App.css';

import React from 'react';

import Routes from 'Routes';
import AuthContextProvider from 'utils/AuthContext';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const App: React.FC = () => {
	return (
		<AuthContextProvider>
			<QueryClientProvider client={queryClient}>
				<Routes />
			</QueryClientProvider>
		</AuthContextProvider>
	);
};

export default App;
