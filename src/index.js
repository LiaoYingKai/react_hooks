import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Page/home';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxs from './reduxs';

let store = createStore(
	reduxs,
	applyMiddleware(logger),
);

function App() {
	return (
		<Provider store={store}>
			<Home/>
		</Provider>
	);
}

ReactDOM.render(<App/>, document.getElementById('App'));
