import React from 'react'
import BreadCrumbLink from './BreadCrumbLink'

const BreadCrumb = ({entries}) => {
	let breadCrumb = []
	if(entries.length > 0){
		entries.forEach((x) => {
			breadCrumb.push(
				<BreadCrumbLink 
					id={ x.id }
					key={ x.id }>
					{ x.content }
				</BreadCrumbLink>
			)
			breadCrumb.push(<div className="breadCrumbSeparator">{">"}</div>)
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
