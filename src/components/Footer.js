import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions'
console.log("components/Footer.js: Called.");
const Footer = () => (
  <div>
  <div>
    <span>Show: </span>
	{" "}
    <FilterLink filter={VisibilityFilters.SHOW_ALL} backColor='lightgrey'>All</FilterLink>
	{", "}
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE} backColor='yellow'>Active</FilterLink>
	{", "}
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED} backColor='lightgreen'>Completed</FilterLink> 
  </div>
  <br />
  <div style={{textAlign:'right'}}>Developed with &#10084; By: <a style={{fontSize:'1.2em', fontWeight:'bold'}} rel="noopener noreferrer" target="_blank" href="https://github.com/dhruvinrsoni">@dhruvinrsoni</a></div>
  </div>
)

export default Footer