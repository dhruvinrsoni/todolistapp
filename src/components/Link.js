import React from 'react'
import PropTypes from 'prop-types'
console.log("components/Link.js: Called");
const Link = ({ backColor, active, children, onClick }) => (
  <button
    onClick={onClick}
    disabled={active}
    style={{
      margin: '4px', borderRadius:'9px', backgroundColor:backColor, padding:'6px'
    }}
  >
    {children}
  </button>
)

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  backColor: PropTypes.string.isRequired
}

export default Link