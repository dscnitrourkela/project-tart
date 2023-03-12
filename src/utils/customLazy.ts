import React from 'react';

const CustomLazy = (importString: string): React.LazyExoticComponent<React.ComponentType<React.ReactNode>> =>
	React.lazy(() => {
		return Promise.all([import(`../${importString}`), new Promise((resolve) => setTimeout(resolve, 1000))]).then(
			([exportedComponent]) => exportedComponent,
		);
	});

export default CustomLazy;
