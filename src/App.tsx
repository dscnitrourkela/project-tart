import './App.css';

import React from 'react';

import Routes from 'Routes';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const App: React.FC = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<Routes />
		</QueryClientProvider>
	);
};

export default App;
