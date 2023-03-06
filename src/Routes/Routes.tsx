import React, { Suspense } from 'react';

import { Footer, Navbar } from 'Components/molecules';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

const Homepage = React.lazy(() => import('Components/pages/Home'));
const Playground = React.lazy(() => import('Components/pages/Playground'));
const EventPage = React.lazy(() => import('Components/pages/Event'));
const ProfilePage = React.lazy(() => import('Components/pages/Profile'));
const PageNotFound = React.lazy(() => import('Components/pages/PageNotFound'));

const Routes: React.FC = () => {
	return (
		<Suspense fallback={<h1>Loading...</h1>}>
			<Navbar />
			<Router basename="/">
				<Switch>
					<Route exact path="/" component={Homepage} />
					<Route exact path="/event/:eventName" component={EventPage} />
					<Route exact path="/playground" component={Playground} />
					<Route exact path="/profile" component={ProfilePage} />
					<Route exact path="*" component={PageNotFound} />
				</Switch>
			</Router>
			<Footer />
		</Suspense>
	);
};

export default Routes;
