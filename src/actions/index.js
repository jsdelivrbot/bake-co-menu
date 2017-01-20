export const ADD_ITEM = 'ADD_ITEM'

// Add Item
export default (item) => {
  return {
    type: ADD_ITEM,
    payload: item
  }
}
