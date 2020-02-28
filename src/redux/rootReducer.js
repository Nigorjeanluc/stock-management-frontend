import { combineReducers } from 'redux'
import itemReducer from './item/itemReducer'
import userReducer from './user/userReducer'

const rootReducer = combineReducers({
  item: itemReducer,
  user: userReducer
})

export default rootReducer