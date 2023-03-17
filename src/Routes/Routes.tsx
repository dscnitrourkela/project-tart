import React, { Suspense } from 'react';

import { Footer, Loader, Navbar } from 'Components/molecules';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Homepage = React.lazy(() => import('Components/pages/Home'));
const Playground = React.lazy(() => import('Components/pages/Playground'));
const EventPage = React.lazy(() => import('Components/pages/Event'));
// const Register = React.lazy(() => import('Components/pages/Register'));
const ProfilePage = React.lazy(() => import('Components/pages/Profile'));
const PageNotFound = React.lazy(() => import('Components/pages/PageNotFound'));
const RegistrationsClosed = React.lazy(() => import('Components/pages/RegistrationsClosed'));

const Routes: React.FC = () => {
	return (
		<Suspense fallback={<Loader />}>
			<Router basename="/">
				<Navbar />
				<Switch>
					<Route exact path="/" component={Homepage} />
					<Route path="/event/:eventName" component={EventPage} />
					<Route exact path="/playground" component={Playground} />
					<Route exact path="/register" component={RegistrationsClosed} />
					<Route exact path="/profile" component={ProfilePage} />
					<Route exact path="/closed" component={RegistrationsClosed} />
					<Route exact path="/loader" component={Loader} />
					<Route exact path="*" component={PageNotFound} />
				</Switch>
				<Footer />
			</Router>
		</Suspense>
	);
};

export default Routes;
