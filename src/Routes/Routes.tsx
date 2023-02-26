import React, { Suspense } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

const Homepage = React.lazy(() => import('Components/pages/Home'));

const Routes: React.FC = () => {
	return (
		<Suspense fallback={<h1>Loading...</h1>}>
			<Router basename="/">
				<Switch>
					<Route exact path="/" component={Homepage} />
					<Route exact path="/playground" component={Homepage} />
				</Switch>
			</Router>
		</Suspense>
	);
};

export default Routes;
