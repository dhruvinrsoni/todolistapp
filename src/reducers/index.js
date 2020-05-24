import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
console.log("reducer/index.js: combineReducers({ todos,  visibilityFilter})");
export default combineReducers({
  todos,
  visibilityFilter
})