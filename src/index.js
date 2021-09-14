import React from 'react'
import { render } from 'react-dom'
import Root from './components/Root';
import configureStore from './configureStore';
import * as serviceWorker from './serviceWorker';
import initScript from './actions'

import 'bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();
store.dispatch(initScript());

render(
  <Root store={store} />,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
