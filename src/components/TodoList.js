import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'
import installicon from '../images/install.png'
console.log("components/TodoList.js: Called");


const TodoList = ({ searchKey, todos, toggleTodo, removeTodo, copyToClipboard, downloadTxtFile, search }) => (

<React.Fragment>
  <br />
<input className='form-control' placeholder='Search...' id="searchbox"  type='search' style={{backgroundColor:'lightgoldenrodyellow', width:'100%' }} value={searchKey} onChange={(e)=>search(e.target.value)} />
  
  <b><ol style={{paddingInlineStart:'10px'}}>
    {todos.map(todo => (todo.id)?(
      <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} buttonOnClick={() => removeTodo(todo.id)} copyText={() => copyToClipboard(todo.id, todo.text)} />
    ):null)}
  </ol></b>
   <button className="btn btn-warning" type="button" /*style={{backgroundColor:'', padding:'6px', marginLeft:'9px', borderRadius:'15px'}}*/ onClick={()=>{downloadTxtFile(false)}}>
   <img src={installicon} alt="Install icon" width="15" height="15"/>
    &nbsp;List
     </button>
     &nbsp;&nbsp;
   <button className="btn btn-primary" type="button" /*style={{backgroundColor:'greenyellow', padding:'6px', marginLeft:'9px', borderRadius:'15px'}}*/ onClick={()=>{downloadTxtFile(true)}}>
   <img src={installicon} alt="Install icon" width="15" height="15"/>
     &nbsp;List With Status
     </button>
     <br />    <br />
  {/*<button type="button" className="btn btn-primary dropdown-toggle"  data-bs-toggle="dropdown"  aria-haspopup="true" aria-expanded="false">
     <img src={installicon} alt="Install icon" width="15" height="15"/> <span className="caret"></span>
  </button>
  <ul className="dropdown-menu">
    <li><a href="#" onClick={()=>{downloadTxtFile(false)}}>List</a></li>
    <li role="separator" className="divider"></li>
    <li><a href="#" onClick={()=>{downloadTxtFile(true)}}>List With Status</a></li>
    </ul>*/}

  {/*}div className="form-group">
  <label ><img src={installicon} alt="Install icon" width="30" height="30" />:</label>
  <select onClick={() => { downloadTxtFile(document.getElementById('sel1').selectedIndex) }} style={{width:'auto', display:'inline-block'}} className="form-control" id="sel1">
    
    <option value="false" onClick={() => { downloadTxtFile(false) }}>List</option>
    <option value="true"  onClick={() => { downloadTxtFile(true) }}>List With Status</option>
  </select>
  </div>*/}
</React.Fragment>
)

/*const downloadTxtFile = (statusEnabled) => {
    const element = document.createElement("a");
	var itemsArr = document.getElementsByClassName("item");
	var textStr="";
	for(var i=0;i<itemsArr.length; i++)
	{
		if(statusEnabled){
			if(itemsArr[i].parentNode.style.textDecoration!=='none')
				textStr+= "[X] " ;
			else 
				textStr+= "[] " ;
		}	
		textStr+= itemsArr[i].innerText+" \r\n";
	}
    //const file = new Blob([document.getElementById('myInput').innerHTML], {type: 'text/plain'});
    const file = new Blob([textStr], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);

    var date = new Date();
    //var str = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.toString().substr(0,3) + " " +  date.getHours() + "-" + date.getMinutes() + "-" + date.getSeconds();
    var str_with_0 = date.getFullYear() + "-" + ('0' + (date.getMonth() + 1)).slice(-2) + "-" + ('0' + date.getDate()).slice(-2) + " " + date.toString().substr(0,3) + " " +  ('0' + date.getHours()).slice(-2) + "-" + ('0' + date.getMinutes()).slice(-2) + "-" + ('0' + date.getSeconds()).slice(-2);

    element.download = "My To-Do List"+(statusEnabled?" - With Status":"")+" @"+str_with_0+".txt";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  }*/

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      completed: PropTypes.bool,
      text: PropTypes.string
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired, 
  removeTodo: PropTypes.func.isRequired,
  copyToClipboard: PropTypes.func.isRequired,
  downloadTxtFile: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired
}

export default TodoList