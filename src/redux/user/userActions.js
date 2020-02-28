import { LOGIN_USER } from './userTypes'
import { USER_LOGGED } from './userTypes'

export const loginUser = (user) => {
  return {
    type: LOGIN_USER,
    payload: user
  }
}

export const userLogged = (isLoggedIn) => {
  return {
    type: USER_LOGGED,
    payload: isLoggedIn
  }
}
