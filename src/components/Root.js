import React from 'react';
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history'
import { Route } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App'

const Root = ({store}) => (
<Provider store={store}>
    <Router history={createBrowserHistory}>
		<Route path='/' component={App}/>
    </Router>
  </Provider>
);

export default Root;