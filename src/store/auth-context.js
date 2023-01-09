import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'
import Body from '../components/Body/Body'

export const authContext = createContext({
  idToken: '',
  isLoggedIn: false,
  logOut: () => {},
  logIn: () => {},
})

const AuthContextProvider = (props) => {
  const [idToken, setIdToken] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const loginHandler = (token) => {
    setIdToken(token)
    setIsLoggedIn(true)
  }
  const logOutHandler = () => {
    setIdToken('')
    setIsLoggedIn(false)
  }
  const store = {
    idToken,
    isLoggedIn,
    loginHandler,
    logOutHandler,
  }

  return (
    <authContext.Provider value={store}>{props.children}</authContext.Provider>
  )
}
export default AuthContextProvider
