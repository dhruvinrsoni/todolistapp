import { VisibilityFilters } from '../actions'

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
	console.log("reducer/visibilityFilter.js: Action: VisibilityFilters");
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
	console.log("reducer/visibilityFilter.js: case 'SET_VISIBILITY_FILTER'. return ", action.filter);
      return action.filter
    default:
	console.log("reducer/visibilityFilter.js: case 'default'. return ", state);
      return state
  }
}

export default visibilityFilter