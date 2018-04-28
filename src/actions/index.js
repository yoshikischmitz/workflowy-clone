export const AddNewListItem = (parent, content) => {
  return {
    type: 'ADD_LIST_ITEM',
    parent: parent,
    content: content
  }
}
