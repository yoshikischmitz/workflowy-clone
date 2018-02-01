import React from 'react'

const Item = ({id, content, children, depth, handleKeyDown}) => {
	return(
		<div style={{paddingLeft: (depth * 0.3) + 'em' }}>
			<div 
				className="itemListEditor" 
				ref={function(e){if(e != null) e.contentEditable=true;}} 
				onKeyDown={handleKeyDown}
			>
			   { content }
			</div>
			<div className="itemListChildren">
				{ children }
			</div>
		</div>
	)
}

export default Item
