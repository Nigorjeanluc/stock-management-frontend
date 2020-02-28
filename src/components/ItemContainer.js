import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteItem, addItem } from '../redux'
import { Link, useRouteMatch } from 'react-router-dom'
import '../styles/components/ItemContainer.scss'

function ItemContainer() {
  let match = useRouteMatch()
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')

  const allItems = useSelector(state => state.item.items)
  const user = useSelector(state => state.user.users[0])
  const isLoggedIn = useSelector(state => state.user.isLoggedIn)
  const dispatch = useDispatch()

  const itemList = allItems.map(
  (item, index) => <tr key={index}><td>{index}</td><td><Link to={`${match.url}/${index}`}>{item.name}</Link></td><td>{item.price}</td><td><button onClick={() => dispatch(deleteItem(index))} className="btn danger">Delete</button></td></tr>
  )

  const jsx = isLoggedIn ? (
    <div className="items">
      <div>
        <p>Welcome {user.name}</p>
        <p>You email is {user.email}</p>
        <p><img alt={user.name} src={user.picture.data.url}/></p>
      </div>
      <h1>Add an Item</h1>
      <div>
        <input type='text' placeholder='Enter the name of item' value={name} onChange={e => setName(e.target.value)} required/>
        <input type='text' placeholder='Enter the price of item' value={price} onChange={e => setPrice(e.target.value)} required/>
        <button className="btn primary" onClick={() => dispatch(addItem({name, price}))}>Add Item</button>
      </div>
      <h1>All Items</h1>
      <div>
        <table>
          <tr>
            <th>Index</th>
            <th>Name</th>
            <th>Price</th>
            <th>Controls</th>
          </tr>
          {itemList}
          <tr>

          </tr>
        </table>
      </div>
    </div>
  ) : (
    <div>
      <h1>Login First Please, click <Link to='login'>here</Link></h1>
    </div>
  )

  return jsx
}

export default ItemContainer
