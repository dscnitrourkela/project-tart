import React, { Suspense } from 'react';

import { Footer, Navbar } from 'Components/molecules';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

const Homepage = React.lazy(() => import('Components/pages/Home'));
const Playground = React.lazy(() => import('Components/pages/Playground'));
const EventPage = React.lazy(() => import('Components/pages/Event'));
const Register = React.lazy(() => import('Components/pages/Register'));

const Routes: React.FC = () => {
	return (
		<Suspense fallback={<h1>Loading...</h1>}>
			<Navbar />
			<Router basename="/">
				<Switch>
					<Route exact path="/" component={Homepage} />
					<Route exact path="/event/:eventName" component={EventPage} />
					<Route path="/playground" component={Playground} />
					<Route path="/register" component={Register} />
				</Switch>
			</Router>
			<Footer />
		</Suspense>
	);
};

export default Routes;
