import { connect } from 'react-redux'
import { toggleTodo, removeTodo, copyToClipboard, search, downloadList } from '../actions'
import TodoList from '../components/TodoList'
import { VisibilityFilters } from '../actions'
console.log("containers/VisibleTodoList.js: Called.");
const getVisibleTodos = (todos, filter) => {
	console.log("containers/VisibleTodoList.js: Inside getVisibleTodos");
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
	console.log("containers/VisibleTodoList.js:  case VisibilityFilters.SHOW_ALL: return", todos);
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
	console.log("containers/VisibleTodoList.js: case VisibilityFilters.SHOW_COMPLETED: return", todos.filter(t => t.completed));
      return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
	console.log("containers/VisibleTodoList.js: case VisibilityFilters.SHOW_ACTIVE: return", todos.filter(t => !t.completed));
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
  searchKey: state.searchKey
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)), 
  removeTodo: id => dispatch(removeTodo(id)),
  copyToClipboard: (id, text) => dispatch(copyToClipboard(id, text)),
  downloadTxtFile: (statusEnabled) => dispatch(downloadList(statusEnabled)),
  search: searchKey => dispatch(search(searchKey))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)