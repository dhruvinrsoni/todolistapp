import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'
console.log("containers/FilterLink.js: Called");
const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter,
  backColor: ownProps.backColor
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

/* import React from 'react';
import { Link } from 'react-router-dom';
import { VisibilityFilters } from '../actions'

const FilterLink = ({filter, children}) => (
	<Link
		to={filter === VisibilityFilters.SHOW_ALL ? '' : filter}
		style={{
			textDecoration: 'none',
			color: 'black',
	}}>
		{children}
	</Link>
);
export default FilterLink; */