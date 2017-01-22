export const DELETE_ITEM = 'DELETE_ITEM'

export default (itemToDelete) => {
  return {
    type: DELETE_ITEM,
    payload: itemToDelete
  }
}
