import { v4 } from 'node-uuid';

export const initScript = () => ({
  type: 'RESET_SEARCH'
})

export default initScript;

export const addTodo = text => ({
  type: 'ADD_TODO',
  id: v4(),
  text
})


export const resetToDo = () => ({
  type: 'RESET_TODO'
})


export const downloadList = (statusEnabled) => ({
  type: 'DOWNLOAD_TODO',
  statusEnabled
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const removeTodo = id => ({
  type: 'REMOVE_TODO',
  id
})

export const copyToClipboard = (id, text) => ({
  type: 'COPY_TO_CLIPBOARD',
  id,
  text
})

export const search = key => ({
  type: 'SEARCH',
  key
})

/*export const copyToClipboard = (text) => {
  var aux = document.createElement("input");
  aux.setAttribute("value", text);
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  console.log("Copied: "+aux.value);
  alert("Copied: "+aux.value);
  document.body.removeChild(aux);
};*/

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
  SEARCH_ALL: 'SEARCH_ALL'
}
