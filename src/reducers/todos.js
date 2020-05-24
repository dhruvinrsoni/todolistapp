const todos = (state = [], action) => {
	console.log("reducer/todos.js: Action: todos ");
  switch (action.type) {
    case 'ADD_TODO':
	console.log("reducer/todos.js: case 'ADD_TODO'. return",[
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]);
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'RESET_TODO':
	console.log("reducer/todos.js: case 'RESET_TODO'. return",[
      ]);
      return [
      ]
    case 'TOGGLE_TODO':
	console.log("reducer/todos.js: case 'TOGGLE_TODO'. return", state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      ));
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      )
	 case 'REMOVE_TODO':
	console.log("reducer/todos.js: case 'REMOVE_TODO'. return", state.map(todo =>
        todo.id === action.id ? {  } : todo
      ));
      return state.map(todo =>
        todo.id === action.id ? {  } : todo
      )
	 case 'DOWNLOAD_TODO':
	console.log("reducer/todos.js: case 'DOWNLOAD_TODO'. return", state.map(todo => todo));
      return state.map(todo => todo)
    default:
	console.log("reducer/todos.js: case 'default'. return", state);
      return state
  }
}

export default todos