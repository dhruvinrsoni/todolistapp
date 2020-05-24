import { createStore } from 'redux'
import rootReducer from './reducers'
import { loadState, saveState } from './localStorage'
import throttle from 'lodash/throttle';

console.log("index.js: App Starting...");

const configureStore = () => {
	const persistedState = loadState();
	const store = createStore(
		rootReducer, 
		persistedState
	);
	console.log("index.js: createStore(rootReducer) created.");

	store.subscribe(throttle(() =>{
		saveState({
			todos: store.getState().todos
		});
	}, 1000));
	
	return store;
};

export default configureStore;