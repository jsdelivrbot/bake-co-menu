export const EDIT_ITEM = 'EDIT_ITEM'

export default (item) => {
  return {
    type: EDIT_ITEM,
    payload: item
  }
}
