import React from 'react'
import PropTypes from 'prop-types'
console.log("components/Todo.js: Called");
const Todo = ({ buttonOnClick, onClick, completed, text }) => (
<React.Fragment>
  <li 
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none', cursor:'pointer', backgroundColor:completed ? 'lightgreen' : 'orange', color:'black', padding:'6px', borderRadius:'9px', margin:'3px'
    }}
  >
    <b style={{color:'darkblue'}}><i className="item">{text}</i></b>
	<button style={{float:'right', backgroundColor:'orangered', color:'black', borderRadius:'9px'}} onClick={buttonOnClick}>X</button>
  </li>
 
</React.Fragment>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  buttonOnClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo