import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import store, { history } from './store';
import Routes from './routes';
import registerServiceWorker from './registerServiceWorker';
import createMuiTheme from 'material-ui/styles/theme';
import { MuiThemeProvider } from 'material-ui/styles';

import 'semantic-ui-css/semantic.min.css';
import './index.css';

const theme = createMuiTheme();

ReactDOM.render(
	<MuiThemeProvider theme={theme}>
	<Provider store={ store() } >
		<ConnectedRouter history={ history }>
			<div>
				<Routes />
			</div>
		</ConnectedRouter>
	</Provider>
	</MuiThemeProvider>,
	document.getElementById( 'root' )
);

registerServiceWorker();
