import React from 'react'
import { connect } from 'react-redux'
import { addTodo, resetToDo } from '../actions'
//import pasteicon from '../images/paste.png'
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

          input.focus();
        }}
        style={{textAlign:'center'}}
      >
        <input className='form-control' placeholder='Enter Here...' style={{backgroundColor:'lightgoldenrodyellow'}} ref={node => (input = node)} autoFocus />
		<br />
        <button className="btn btn-danger" type="button" style={{backgroundColor:'orangered', padding:'6px'}} onClick={()=>{if(window.confirm("Are You Sure You Want to Delete entire List?")){dispatch(resetToDo())}input.focus();return;}}>Clear All</button>
        &nbsp;
        &nbsp;
        <button className="btn btn-primary" type="submit" style={{backgroundColor:'deepskyblue', padding:'6px'}}>
          Add "To Do"
        </button>
        &nbsp;
        &nbsp;
        {/*<button className="btn btn-primary" type="submit" style={{backgroundColor:'deepskyblue', padding:'6px'}} onClick={paste}>
          <img src={pasteicon} width="20" height="20" />
         Paste
      </button>*/}
      </form>
    </div>
  )
}

export default connect()(AddTodo)