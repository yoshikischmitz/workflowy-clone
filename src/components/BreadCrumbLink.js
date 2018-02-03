import React from 'react'
import {connect} from 'react-redux'

let BreadCrumbLink = ({id, children, dispatch}) => (
	<a href="#" onClick={() => dispatch({type: "CHANGE_ROOT", id: id, cursorPosition: 0})}>
		{ children }
	</a>
)

BreadCrumbLink = connect()(BreadCrumbLink)

export default BreadCrumbLink
