import React from 'react'
import PropTypes from 'prop-types'
import copyicon from '../images/copy.png';

console.log("components/Item.js: Called");
const Item = ({ buttonOnClick, copyText, id, text, completed, visible }) => (
<React.Fragment>
  {/*<li 
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none', cursor:'pointer', backgroundColor:completed ? 'lightgreen' : 'orange', color:'black', padding:'6px', borderRadius:'9px', margin:'3px'
    }}
    >*/}
  
  <img style={{ display: visible?'':'none', verticalAlign:'middle', marginTop:'-6px', marginBottom:'-6px'}} src={copyicon} alt="Copy icon" width="21" height="21" onClick={(e)=>{e.stopPropagation();copyText(id, text);}}/>
  &nbsp;&nbsp;
  <b style={{display: visible?'':'none',textDecoration: visible?(completed ? 'line-through' : 'none'):'none', color:'darkblue', wordWrap:'break-word'}}>
    <i id={id+'item'} className="item">
      {text}
    </i>
  </b>
	<button className='btn btn-basic' style={{verticalAlign:'middle', padding: 'revert', float:'right'/*, backgroundColor:'orangered'*/, borderRadius:'9px', fontWeight:'bold'}} onClick={buttonOnClick}>
    X
  </button>
 
</React.Fragment>
)

Item.propTypes = {
  buttonOnClick: PropTypes.func.isRequired,
  copyText: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  visible: PropTypes.bool.isRequired
}

export default Item