import React from 'react'

const BreadCrumb = ({entries}) => {
	let breadCrumb = []
	if(entries.length > 0){
		entries.forEach((x) => {
			breadCrumb.push(<a href="#"> { x } </a>)
			breadCrumb.push(">")
		})
		breadCrumb.pop()
	}
	return (
		<div className="breadCrumb">
		  { breadCrumb }
	  </div>
	)
}

export default BreadCrumb
