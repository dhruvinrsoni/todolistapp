import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions'
console.log("components/Footer.js: Called.");
const Footer = () => (
  <div>
    <span>Show: </span>
	{" "}
    <FilterLink filter={VisibilityFilters.SHOW_ALL} backColor='lightgrey'>All</FilterLink>
	{", "}
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE} backColor='orange'>Active</FilterLink>
	{", "}
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED} backColor='lightgreen'>Completed</FilterLink> 
  </div>
)

export default Footer