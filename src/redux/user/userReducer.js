import { LOGIN_USER } from './userTypes'
import { USER_LOGGED } from './userTypes'

const initialState = {
  users: [],
  isLoggedIn: false
}

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN_USER:
      const data = action.payload;
      return {
        ...state,
        users: [...state.users, data]
      }
    
    case USER_LOGGED:
      return {
        ...state,
        isLoggedIn: state.isLoggedIn = true
      }
      
    default: return state
  }
}

export default userReducer