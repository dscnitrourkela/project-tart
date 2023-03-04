import React, { Suspense } from 'react';

import { HashRouter as Router, Route, Switch } from 'react-router-dom';

const Homepage = React.lazy(() => import('Components/pages/Home'));
const Playground = React.lazy(() => import('Components/pages/Playground'));
const EventPage = React.lazy(() => import('Components/pages/Event'));

const Routes: React.FC = () => {
	return (
		<Suspense fallback={<h1>Loading...</h1>}>
			<Router basename="/">
				<Switch>
					<Route exact path="/" component={Homepage} />
					<Route exact path="/event/:eventName" component={EventPage} />
					<Route path="/playground" component={Playground} />
				</Switch>
			</Router>
		</Suspense>
	);
};

export default Routes;
