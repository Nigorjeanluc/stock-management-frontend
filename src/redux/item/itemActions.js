import { ADD_ITEM } from './itemTypes'
import { DELETE_ITEM } from './itemTypes'
import { SELECT_ITEM } from './itemTypes'

export const addItem = (item = { name: 'Dummy Item', price: '100 $'}) => {
  return {
    type: ADD_ITEM,
    payload: item
  }
}

export const deleteItem = (itemIndex) => {
  return {
    type: DELETE_ITEM,
    payload: itemIndex
  }
}

export const selectItem = (itemIndex) => {
  return {
    type: SELECT_ITEM,
    payload: itemIndex
  }
}
