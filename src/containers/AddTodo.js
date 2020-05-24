import React from 'react'
import { connect } from 'react-redux'
import { addTodo, resetToDo } from '../actions'
console.log("containers/AddTodo.js: Inside. Returning the <form> of input and submit");
const AddTodo = ({ dispatch }) => {
  let input
	console.log("containers/AddTodo.js: Inside AddTodo. Returning");
  return (
    <div>
      <form
		onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = '' 
        }}
        style={{textAlign:'center'}}
      >
        <input style={{backgroundColor:'lightgoldenrodyellow'}} ref={node => (input = node)} />
		<br /><br />
        <button type="submit" style={{backgroundColor:'deepskyblue', padding:'6px', marginRight:'9px'}}>Add Todo</button>
        <button type="button" style={{backgroundColor:'orangered', padding:'6px', marginLeft:'9px'}} onClick={()=>{if(window.confirm("Are You Sure You Want to Delete entire List?")){dispatch(resetToDo())}return;}}>Clear All</button>
      </form>
    </div>
  )
}

export default connect()(AddTodo)