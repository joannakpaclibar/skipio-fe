import React from 'react';
import { Route } from 'react-router-dom';

/* containers */
import Main from './containers/main';

export class Routes extends React.Component {
	render () {
		return (
			<main>
				<Route exact path="/" component={ Main } />
			</main>
		);
	}
}

export default Routes;