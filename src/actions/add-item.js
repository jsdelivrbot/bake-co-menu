export const ADD_ITEM = 'ADD_ITEM'

export default (name) => {
  return {
    type: ADD_ITEM,
    payload: name
  }
}
