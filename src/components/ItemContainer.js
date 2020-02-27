import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteItem } from '../redux'

function ItemContainer() {
  const allItems = useSelector(state => state.items)
  const dispatch = useDispatch()

  const itemList = allItems.map(
    (item, index) => <h2 key={index}>Index: {index}, item: {item.name} and price: {item.price} <button onClick={() => dispatch(deleteItem(index))} className="btn danger">Delete</button></h2>
  )

  return (
    <div>
      <h1>All Items</h1>
      {itemList}
      <button>Add Item</button>
    </div>
  )
}

export default ItemContainer
