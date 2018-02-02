import uuid from 'uuid'

function listItem(content, parentId){
	return {
		id: uuid(),
		content: content,
		parent: parentId
	}
}

function insertAt(arr, findObj, insertObj, offset){
	const index = arr.indexOf(findObj)
	const left = arr.slice(0, index + offset)
	const right = arr.slice(index + offset, arr.length)
	const newArr = left.concat([insertObj], right)
	return newArr
}

function findChildIndex(itemOnItems, parentId, childId) {
	return itemOnItems[parentId].indexOf(childId)
}

function removeChild(itemOnItems, parent, child){
	const childIndex = findChildIndex(itemOnItems, parent, child)
	const siblings = Object.assign([], itemOnItems[parent])
	siblings.splice(childIndex, 1)
	return siblings
}

function applyShiftLeft(state, action){
	// When we shift left, we get parented to our grandparent,
	// if such a node exists. If it does, in the grandparent's 
	// list of children, we should appear immediately after 
	// our parent
	
	// 1. Find grandparent:
	const ownId = action.id
	const parent = action.parent
	const grandparent = state.items[parent].parent

	if(grandparent){
		// 2. grandparent exists, remove self from parent's list
		// of children:
		let parentChildrenUpdate = removeChild(state.itemOnItems, parent, ownId)
		// 3. become child of grandparent:
		const grandparentChildrenUpdate = insertAt(state.itemOnItems[grandparent], parent, ownId, 1)
		// 4. update our entry in items:
		const ownUpdate = Object.assign({}, state.items[ownId], {parent: grandparent})
		const itemsUpdate = Object.assign({}, state.items, {[ownId]: ownUpdate})

		const itemOnItemsUpdate = Object.assign({}, state.itemOnItems, {
			[grandparent]: grandparentChildrenUpdate,
			[parent]: parentChildrenUpdate
		})

		return {items: itemsUpdate, itemOnItems: itemOnItemsUpdate, focus: {id: ownId, cursorPosition: action.cursorPosition}}
	} else {
		return {}
	}
}

function applyShiftRight(state, action){
	// when we shift right, we get parented to the sibling above us
	// if there is such a sibling
	const ownId = action.id
	const siblings = Object.assign([], state.itemOnItems[action.parent])
	const ownIndex = findChildIndex(state.itemOnItems, action.parent, ownId)

	const precedingSiblingsExist = ownIndex > 0
	if(precedingSiblingsExist){
		// Reparent the current node to the immediately 
		// preceding sibling:
		// 1. parent self to the upper sibling
		const siblingIndex = ownIndex - 1
		const siblingId = siblings[siblingIndex]
		const siblingChildren = Object.assign([], state.itemOnItems[siblingId])
		siblingChildren.push(ownId)
		// 2. remove self from current parent
		siblings.splice(ownIndex, 1)
		// 3. assign the update to itemOnItems:
		const itemOnItemsUpdate = Object.assign({}, state.itemOnItems, 
			{
				[siblingId]: siblingChildren, 
				[action.parent]: siblings
			})
		// 4. Update own item entry:
		const itemsUpdate = Object.assign({}, state.items,
			{
				[ownId]: Object.assign({}, state.items[ownId], {parent: siblingId})
			}
		)
		return {items: itemsUpdate, itemOnItems: itemOnItemsUpdate, focus: {id: ownId, cursorPosition: action.cursorPosition}}
	} else {
		return {}
	}
}

function generateInitialState(){
	let root = listItem("", null)
	let child = listItem("", root.id)
	let child2 = listItem("レベル１", root.id)
	let child2Child1 = listItem("レベル２", child2.id)
	let child2Child1Child = listItem("レベル３", child2Child1.id)
	let child2Child2 = listItem("レベル２", child2.id)

	let map = {}
	let items = [root, child]

  items.forEach((item) => {
		map[item.id] = item
	})

	return {
		items: map,
		root: root.id,
		focus: {id: child.id, cursorPosition: 0},
		itemOnItems:{
			[root.id]: [child.id],
			[child.id]: []
		}
	}
}

const initialState = generateInitialState()

function listApp(state = initialState, action){
  const id = action.id
	const focus = state.focus

	switch(action.type){
	case('ADD_ITEM'):
			const parent = action.parent
			const cursorPosition = action.cursorPosition
			const originalItem = state.items[id]
			const left = originalItem.content.slice(0, cursorPosition)
			const right = originalItem.content.slice(cursorPosition, originalItem.content.length)

			const newItemTop = {
				content: left,
				parent: parent,
				id: id
			}

			const newItemBottom = {
				content: right,
				parent: parent,
				id: uuid()
			}

			const itemsUpdate = {
				[newItemTop.id]: newItemTop,
				[newItemBottom.id]: newItemBottom
			}

			const currentItemChildrenCount = state.itemOnItems[id].length

			let itemOnItemsUpdate
			if(right.length === 0 && currentItemChildrenCount > 0){
				const itemsOfItem = state.itemOnItems[id]
				const updateChildItemOnItems = insertAt(itemsOfItem, itemsOfItem[0], newItemBottom.id, 0)
				itemOnItemsUpdate = Object.assign({}, state.itemOnItems, {[id]: updateChildItemOnItems}, {[newItemBottom.id]: []})
			} else {
				const updateParentItemOnItems = insertAt(state.itemOnItems[parent], id, newItemBottom.id, 1)
				itemOnItemsUpdate = Object.assign({}, state.itemOnItems, {[parent]: updateParentItemOnItems})
				itemOnItemsUpdate[newItemBottom.id] = itemOnItemsUpdate[id]
				itemOnItemsUpdate[id] = []
			}

			const newItems =  Object.assign({}, state.items, itemsUpdate)

			let focusUpdate
			if(action.cursorPosition === 0){
			  focusUpdate = {focus: {id: id, cursorPosition: 0}}
			} else {
			  focusUpdate = {focus: {id: newItemBottom.id, cursorPosition: 0}}
			}

			return Object.assign({}, state, {items: newItems}, {itemOnItems: itemOnItemsUpdate}, focusUpdate)
  case('EDIT_ITEM'):
			const itemEditUpdate = {
				[id]: {content: action.content, id: id, parent: action.parent}
			}
			const itemsEditUpdate = Object.assign({}, state.items, itemEditUpdate)

			return Object.assign({}, state, {items: itemsEditUpdate}, {focus: {id: id, cursorPosition: action.cursorPosition }})
	case("SHIFT_ITEM_LEFT"):
			return Object.assign({}, state, applyShiftLeft(state, action))
	case("SHIFT_ITEM_RIGHT"):
			return Object.assign({}, state, applyShiftRight(state, action))
	case("MOVE_FOCUS_UP"):
			// change the focus to the node that is visually immediately above the current node
			// 1. find the immediately preceding sibling of the current node:
			if(action.parent){
				const siblings = state.itemOnItems[action.parent]
				const ownIndex = siblings.indexOf(action.id)
				if(siblings.length > 1 && ownIndex > 0){
					let nearestRelative = siblings[ownIndex - 1]
					let relativeChildren = state.itemOnItems[nearestRelative]
					// 2. Go through the last child of each relative, finding a child that has no children of its own:
					while(relativeChildren.length !== 0){
						nearestRelative = state.itemOnItems[nearestRelative][relativeChildren.length - 1]
						relativeChildren = state.itemOnItems[nearestRelative]
					}
					return Object.assign({}, state, {focus: {id: nearestRelative, cursorPosition: 0}})
				} else {
					// 2. Go to our parent:
					return Object.assign({}, state, {focus: {id: action.parent, cursorPosition: 0}})
				}
			} else {
				return state
			}
	case("MOVE_FOCUS_DOWN"):
			// change the focus to the node that is visually immediately below the current node
			if(action.parent){
				const ownChildren = state.itemOnItems[action.id]
				if(ownChildren.length > 0){
					return Object.assign({}, state, {focus: {id: ownChildren[0], cursorPosition: 0}})
				} else {
					let currentNode = action.id
					let siblings = state.itemOnItems[action.parent]
					let currentNodeIndex = siblings.indexOf(currentNode)
					while(siblings && currentNodeIndex === siblings.length - 1){
						currentNode = state.items[currentNode].parent
						siblings = state.itemOnItems[state.items[currentNode].parent]
						if(!siblings) 
							return state
						currentNodeIndex = siblings.indexOf(currentNode)
					}
					const newFocus = siblings[currentNodeIndex + 1]
					return Object.assign({}, state, {focus: {id: newFocus, cursorPosition: 0}})
				}
			} else {
				return state
			}
	case("CHANGE_FOCUS"):
			return Object.assign({}, state, {focus: {id: action.id, cursorPosition: action.cursorPosition}})
	default:
			return state
	}
}

export default listApp
