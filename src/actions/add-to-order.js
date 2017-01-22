export const ADD_TO_ORDER = 'ADD_TO_ORDER'

// Add Item
export default (orderItem) => {
  return {
    type: ADD_TO_ORDER,
    payload: orderItem
  }
}
