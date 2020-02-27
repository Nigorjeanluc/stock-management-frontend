import { ADD_ITEM } from './itemTypes'
import { DELETE_ITEM } from './itemTypes'

const initialState = {
  items: [{
    name: 'Car',
    price: '100000 Rwf'
  }, {
    name: 'Shoes',
    price: '10000 Rwf'
  }, {
    name: 'Tire',
    price: '2000 Rwf'
  }, {
    name: 'Shirt',
    price: '5000 Rwf'
  }]
}

const itemReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_ITEM:
      const data = action.payload;
      return {
        ...state,
        items: [...state.items, data]
      }
    
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter((item, index) => {
          return index !== action.payload
        })
      }
    
    default: return state
  }
}

export default itemReducer