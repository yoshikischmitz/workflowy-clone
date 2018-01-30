import uuid from 'uuid'

function listItem(content){
	return {
		id: uuid(),
		content: content
	}
}

function generateInitialState(){
	let root = listItem("root")
	let child = listItem("child")
	let child2 = listItem("child 2")
	let subChild = listItem("subChild")
	let subSubChild = listItem("subsub child")

	let map = {}
	let items = [root, child, child2, subChild, subSubChild]

  items.forEach((item) => {
		map[item.id] = item
	})

	return {
		items: map,
		root: root.id,
		itemOnItems:{
			[root.id]: [child.id, child2.id],
			[child.id]: [subChild.id, subSubChild.id]
		}
	}
}

const initialState = generateInitialState()

function listApp(state = initialState, action){
	switch(action.type){
	case('ADD_ITEM'):
			const id = action.id
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

			const stateUpdate = {
				items: {
					[newItemTop.id]: newItemTop,
					[newItemBottom.id]: newItemBottom
				}
			}

			return Object.assign(state, stateUpdate)
	default:
			return state
	}
}

export default listApp
