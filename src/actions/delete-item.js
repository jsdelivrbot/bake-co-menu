export const DELETE_ITEM = 'DELETE_ITEM'

export default (itemName) => {
  return {
    type: DELETE_ITEM,
    payload: itemName
  }
}
