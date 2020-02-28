import React from 'react'
import FacebookLogin from 'react-facebook-login'
import { useSelector, useDispatch } from 'react-redux'
import { loginUser, userLogged } from '../redux'

function LoginContainer(props) {
  const { history } = props
  const isLoggedIn = useSelector(state => state.user.isLoggedIn)
  const dispatch = useDispatch()

  const responseFacebook = (res) => {
    dispatch(userLogged(true))
    dispatch(loginUser(res))
    history.push('/item')
  }

  const jsx = isLoggedIn ? (
      <div>
        <h2>You are already logged in!</h2>
      </div>
    )
    : (
      <div>
        <h1>LOGIN WITH FACEBOOK</h1>
        <p>
          <FacebookLogin 
            appId='632303256956449'
            autoLoad={true}
            fields="name,email,picture"
            // onClick={componentClicked}
            callback={responseFacebook}
          />
        </p>
      </div>
    )
  return jsx
}

export default LoginContainer
