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
		case('Tab'):
			e.preventDefault()
			let type
			if(e.shiftKey){
				type = "SHIFT_ITEM_LEFT"
			} else {
				type = "SHIFT_ITEM_RIGHT"
			}
			return {
				type: type,
				id: props.id,
				cursorPosition: offset,
				parent: props.parent
			}
		default:
			const text = e.target.innerText
			const action =  {
				type: 'EDIT_ITEM',
				id: props.id,
				content: e.target.innerText,
				cursorPosition: offset,
				parent: props.parent
			}
			return action
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

	const myProps = {
		id: ownProps.id,
		content: item.content,
		children: childNodes
	}

	if(state.focus.id === id){
		myProps.focus = state.focus.cursorPosition
	}

	return myProps
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		handleKeyDown: (e, value) =>{
		  const action = handleKeyDown(e, ownProps)

			if(action){
				dispatch(action)
			}
		}
	}
}

const ItemContainer = connect(mapStateToProps, mapDispatchToProps)(Item)

export default ItemContainer
