import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, Link, useRouteMatch } from 'react-router-dom'
import { deleteItem } from '../redux'

function OneItemContainer() {
  let { id } = useParams()
  let match = useRouteMatch()
  const dispatch = useDispatch()
  const notDeleted = useSelector(state => state.item.notDeleted)
  const items = useSelector(state => state.item.items)

  const jsx = 
    notDeleted ?
      (
        <div>
          <h1>Item</h1>
          <p>Item Name: {items[id].name} <button onClick={() => dispatch(deleteItem(parseInt(id, 10)))} className="btn danger">Delete</button></p>
        </div>
      )
      : (
        <div>
          <h1>Item deleted successfully <Link to={`${match.url.split(`/${id}`)[0]}`}>Return to all items</Link></h1>
        </div>
      )

  return jsx
}

export default OneItemContainer
