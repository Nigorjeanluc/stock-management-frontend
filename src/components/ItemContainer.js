import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteItem, addItem } from '../redux'

function ItemContainer() {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')

  const allItems = useSelector(state => state.items)
  const dispatch = useDispatch()

  const itemList = allItems.map(
    (item, index) => <h2 key={index}>Index: {index}, item: {item.name} and price: {item.price} <button onClick={() => dispatch(deleteItem(index))} className="btn danger">Delete</button></h2>
  )

  return (
    <div>
      <h1>All Items</h1>
      {itemList}
      <p>
        <input type='text' placeholder='Enter the name of item' value={name} onChange={e => setName(e.target.value)} required/>
        <input type='text' placeholder='Enter the price of item' value={price} onChange={e => setPrice(e.target.value)} required/>
        <button className="btn primary" onClick={() => dispatch(addItem({name, price}))}>Add Item</button>
      </p>
    </div>
  )
}

export default ItemContainer
