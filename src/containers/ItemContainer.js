import {connect} from 'react-redux'
import Item from '../components/Item'
import React from 'react'
import ReactDOM from 'react-dom'

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
    case('ArrowUp'):
      e.preventDefault()
      if(e.metaKey && e.shiftKey){
        return {
          type: "MOVE_ITEM",
          id: props.id,
          parent: props.parent,
          offset: -1
        }
      } else {
        return {
          type: 'MOVE_FOCUS_UP',
          id: props.id,
          parent: props.parent
        }
      }
    case('ArrowDown'):
      e.preventDefault()
      if(e.metaKey && e.shiftKey){
        return {
          type: "MOVE_ITEM",
          id: props.id,
          parent: props.parent,
          offset: 1
        }
      } else {
        return {
          type: 'MOVE_FOCUS_DOWN',
          id: props.id,
          parent: props.parent
        }
      }
    case('Backspace'):
      if(props.content === "\n" || (props.content.length === 0 && props.children.length === 0)){
        e.preventDefault()
        return {
          type: "DELETE_ITEM",
          id: props.id,
          parent: props.parent
        }
      }
    default:
      return null
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.id
  const item = state.items[id]
  const childrenIds = state.itemOnItems[id] || []

  const childNodes = childrenIds.map((childId) => (
      <ItemContainer key={childId} parent={id} id={childId} />
  ))

  const myProps = {
    id: ownProps.id,
    content: item.content,
    children: childNodes,
    parent: ownProps.parent,
    root: ownProps.root
  }

  if(state.focus.id === id){
    myProps.focus = state.focus.cursorPosition
  }

  return myProps
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleKeyDown: (e, itemProps) => {
      const action = handleKeyDown(e, itemProps)
      if(action){
        dispatch(action)
      }
    },
    handleInput: (e) => {
      const offset = window.getSelection().anchorOffset
      const text = e.target.innerText
      const action =  {
        type: 'EDIT_ITEM',
        id: ownProps.id,
        content: text,
        cursorPosition: offset,
        parent: ownProps.parent
      }
      dispatch(action)
    },
    handleBlur: (e) => {
      const offset = window.getSelection().anchorOffset
      dispatch(
        {
          type: 'CHANGE_FOCUS',
          id: ownProps.id,
          cursorPosition: offset
        }
      )
    },
    handleBulletClick: (e) => {
      const offset = window.getSelection().anchorOffset
      dispatch(
        {
          type: "CHANGE_ROOT",
          id: ownProps.id,
          cursorPosition: offset
        }
      )
    }
  }
}

const ItemContainer = connect(mapStateToProps, mapDispatchToProps)(Item)

export default ItemContainer
