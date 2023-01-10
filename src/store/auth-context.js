import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'
import Body from '../components/Body/Body'

export const authContext = createContext({
  idToken: '',
  isLoggedIn: false,
  logOutHandler: () => {},
  loginHandler: () => {},
  changePassword: () => {},
})

const AuthContextProvider = (props) => {
  const [idToken, setIdToken] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const loginHandler = (token) => {
    setIdToken(token.idToken)

    setIsLoggedIn(true)
  }
  const logOutHandler = () => {
    setIdToken('')
    setIsLoggedIn(false)
  }
  const changePassword = (data) => {
    const idToken = data.idToken
    setIdToken(idToken)
  }
  const store = {
    idToken,
    isLoggedIn,
    loginHandler,
    logOutHandler,
    changePassword,
  }

  return (
    <authContext.Provider value={store}>{props.children}</authContext.Provider>
  )
}
export default AuthContextProvider
