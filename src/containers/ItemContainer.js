import {connect} from 'react-redux'
import Item from '../components/Item'
import React from 'react'

const mapStateToProps = (state, ownProps) => {
	const id = ownProps.id
	const depth = ownProps.depth + 1

	const item = state.items[id]

	const childrenIds = state.itemOnItems[id] || []

	const childNodes = childrenIds.map((childId) => {
		const child = state.items[childId]
		return(
			<ItemContainer id={childId} depth={depth}/>
		)
	})

	return {
		id: ownProps.id,
		content: item.content,
		children: childNodes
	}
}

const ItemContainer = connect(mapStateToProps, null)(Item)
export default ItemContainer
