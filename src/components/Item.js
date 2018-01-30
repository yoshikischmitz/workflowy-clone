import React from 'react'

const Item = ({id, content, children, depth}) => {
	return(
		<div style={{"padding-left": (depth * 0.3) + 'em' }}>
			<div className="itemListContent">
			   { content }
			</div>
			<div className="itemListChildren">
				{ children }
			</div>
		</div>
	)
}

export default Item
