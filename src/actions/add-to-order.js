export const ADD_TO_ORDER = 'ADD_TO_ORDER'

export default (orderItem) => {
  return {
    type: ADD_TO_ORDER,
    payload: orderItem
  }
}
