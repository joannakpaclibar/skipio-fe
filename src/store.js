import {
	createStore,
	combineReducers,
	applyMiddleware,
	compose
} from 'redux';
import {
	routerMiddleware,
	routerReducer
} from 'react-router-redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import contactReducer from './modules/contacts/reducers';
import messageReducer from './modules/messages/reducers';

export const history = createHistory();

// Initialize store
let store;

// Return a function so we can configure it
export default () => {
	if ( store ) {
		return store;
	}

	// List all reducers
	let reducers = {
		contactReducer,
		messageReducer,
		'routing' : routerReducer
	};

	const initialState = {}
	const enhancers = []
	const middleware = [
		thunk,
		routerMiddleware(history)
	]

	if ( process.env.NODE_ENV === 'development' ) {
		const devToolsExtension = window.devToolsExtension

		if (typeof devToolsExtension === 'function') {
			enhancers.push( devToolsExtension() )
		}
	}

	// enhancers
	const composedEnhancers = compose(
		applyMiddleware( ...middleware ),
		...enhancers
	)

	// create store
	store = createStore(
		combineReducers( reducers ),
		initialState,
		composedEnhancers
	)

	return store;
};