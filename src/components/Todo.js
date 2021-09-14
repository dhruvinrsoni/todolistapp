import React from 'react'
import PropTypes from 'prop-types'
import Item from './Item'
//import copyicon from '../images/copy.png';

console.log("components/Todo.js: Called");
const Todo = ({ buttonOnClick, onClick, copyText, id, completed, text, visible }) => (
<React.Fragment>
  <li id={id}
    onClick={onClick}
    style={{
       display: visible?'list-item':'none', cursor:'pointer', backgroundColor:completed ? 'lightgreen' : 'yellow', color:'black', padding:'6px', borderRadius:'9px', margin:'3px'
    }}
  >
  {/*<button onClick={copyText}>
  <img style={{verticalAlign:'middle'}} src={copyicon} alt="Copy icon" width="15" height="15" /></button>
  &nbsp;<b style={{color:'darkblue', wordWrap:'break-word'}}><i className="item">{text}</i></b>
	<button style={{float:'right', backgroundColor:'orangered', color:'white', borderRadius:'9px', fontWeight:'bold'}} onClick={buttonOnClick}>X</button>*/}
  <Item buttonOnClick={buttonOnClick} copyText={copyText} text={text} id={id} completed={completed} visible={visible}/>
  </li>
 
</React.Fragment>
)

/*const copyToClipboard = (text) => {
  //var elementId = obj.id;
  var aux = document.createElement("input");
  aux.setAttribute("value", text);
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  //elementId.innerHTML="<div style='font-weight: bold;font-size: larger;text-align: center;background-color: lightgrey;'>Copied!...</div>";
  //setTimeout(function(){elementId.innerHTML=aux.value;}, 1000);
  console.log("Copied: "+aux.value);
  document.body.removeChild(aux);
};*/

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  buttonOnClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  copyText: PropTypes.func.isRequired
}

export default Todo