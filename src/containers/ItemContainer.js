import {connect} from 'react-redux'
import Item from '../components/Item'
import React from 'react'

function handleKeyDown(e, props) {
	const offset = window.getSelection().anchorOffset
	switch(e.key){
		case('Enter'):
			e.preventDefault()
			return {
				type: 'ADD_ITEM',
				id: props.id,
				cursorPosition: offset,
				parent: props.parent
			}
		default:
			return null
	}
}

const mapStateToProps = (state, ownProps) => {
	const id = ownProps.id
	const depth = ownProps.depth + 1
	const item = state.items[id]
	const childrenIds = state.itemOnItems[id] || []

	const childNodes = childrenIds.map((childId) => (
			<ItemContainer key={childId} parent={id} id={childId} depth={depth}/>
	))

	return {
		id: ownProps.id,
		content: item.content,
		children: childNodes
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		handleKeyDown: (e) =>{
			const action = handleKeyDown(e, ownProps)
			if(action){
				dispatch(action)
			}
		}
	}
}

const ItemContainer = connect(mapStateToProps, mapDispatchToProps)(Item)

export default ItemContainer
