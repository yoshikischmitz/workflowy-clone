import uuid from 'uuid'

function listItem(content){
	return {
		id: uuid(),
		content: content
	}
}

function insertAt(arr, findObj, insertObj, offset){
	const index = arr.indexOf(findObj)
	const left = arr.slice(0, index + offset)
	const right = arr.slice(index + offset, arr.length)
	const newArr = left.concat([insertObj], right)
	return newArr
}

function generateInitialState(){
	let root = listItem("ルート")
	let child = listItem("レベル１")
	let child2 = listItem("レベル１")
	let subChild = listItem("レベル２")
	let subSubChild = listItem("レベル２")
	let subSubSubChild = listItem("レベル３")

	let map = {}
	let items = [root, child, child2, subChild, subSubChild, subSubSubChild]

  items.forEach((item) => {
		map[item.id] = item
	})

	return {
		items: map,
		root: root.id,
		focus: {id: root.id, cursorPosition: 0},
		itemOnItems:{
			[root.id]: [child.id, child2.id],
			[child.id]: [subChild.id, subSubChild.id],
			[child2.id]: [],
			[subChild.id]: [],
			[subSubChild.id]: [subSubSubChild.id],
			[subSubSubChild.id]: []
		}
	}
}

const initialState = generateInitialState()


function listApp(state = initialState, action){
  const id = action.id
	switch(action.type){
	case('ADD_ITEM'):
			const parent = action.parent
			const cursorPosition = action.cursorPosition
			const originalItem = state.items[id]
			const left = originalItem.content.slice(0, cursorPosition)
			const right = originalItem.content.slice(cursorPosition, originalItem.content.length)

			const newItemTop = {
				content: left,
				id: id
			}

			const newItemBottom = {
				content: right,
				id: uuid()
			}

			const itemsUpdate = {
				[newItemTop.id]: newItemTop,
				[newItemBottom.id]: newItemBottom
			}

			let itemOnItemsUpdate

			const currentItemChildrenCount = state.itemOnItems[id].length

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
			const focusUpdate = {focus: {id: newItemBottom.id, cursorPosition: 0}}
			return Object.assign({}, state, {items: newItems}, {itemOnItems: itemOnItemsUpdate}, focusUpdate)
  case('EDIT_ITEM'):
			//const content = state.items[id].content
			//const offset = action.cursorPosition
			//const newContent = content.slice(0, offset) + action.char + content.slice(offset, content.length)
			const itemEditUpdate = {
				[id]: {content: action.content, id: id}
			}
			const itemsEditUpdate = Object.assign({}, state.items, itemEditUpdate)

			return Object.assign({}, state, {items: itemsEditUpdate}, {focus: {id: id, cursorPosition: action.cursorPosition }})
	default:
			return state
	}
}

export default listApp
