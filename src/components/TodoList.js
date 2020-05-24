import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'
console.log("components/TodoList.js: Called");
const TodoList = ({ todos, toggleTodo, removeTodo }) => (

<React.Fragment>
  <b><ol>
    {todos.map(todo => todo.id?(
      <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} buttonOnClick={() => removeTodo(todo.id)} />
    ):null)}
  </ol></b>
   <button type="button" style={{backgroundColor:'', padding:'6px', marginLeft:'9px', borderRadius:'15px'}} onClick={()=>{downloadTxtFile(0)}}>Download this List</button>
   <button type="button" style={{backgroundColor:'greenyellow', padding:'6px', marginLeft:'9px', borderRadius:'15px'}} onClick={()=>{downloadTxtFile(1)}}>Download this List With Status</button>
</React.Fragment>
)

const downloadTxtFile = (statusEnabled) => {
    const element = document.createElement("a");
	var itemsArr = document.getElementsByClassName("item");
	var textStr="";
	for(var i=0;i<itemsArr.length; i++)
	{
		if(statusEnabled){
			if(itemsArr[i].parentNode.parentNode.style.textDecoration!=='none')
				textStr+= "DONE:- " ;
			else 
				textStr+= "NOT-DONE:- " ;
		}	
		textStr+= itemsArr[i].innerText+" \r\n";
	}
    //const file = new Blob([document.getElementById('myInput').innerHTML], {type: 'text/plain'});
    const file = new Blob([textStr], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "My To-Do List.txt";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  }

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired, 
  removeTodo: PropTypes.func.isRequired
}

export default TodoList