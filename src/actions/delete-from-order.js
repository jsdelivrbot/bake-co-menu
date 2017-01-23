export const DELETE_FROM_ORDER = 'DELETE_FROM_ORDER'

export default (orderItem) => {
  return {
    type: DELETE_FROM_ORDER,
    payload: orderItem
  }
}
