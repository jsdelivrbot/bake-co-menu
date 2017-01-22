export const ADD_ITEM = 'ADD_ITEM'

// Add Item
export default (name) => {
  return {
    type: ADD_ITEM,
    payload: name
  }
}
