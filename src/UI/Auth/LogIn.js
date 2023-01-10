import React from 'react'
import Button from '../Button/Button'
import classes from './LogIn.module.css'
import { useRef, useContext, useState } from 'react'
import { authContext } from '../../store/auth-context'
function LogIn(props) {
  const userNameRef = useRef('')
  const emailRef = useRef('')
  const passwordRef = useRef('')

  const ctxAuth = useContext(authContext)
  const [modeSwitcher, setModeSwitcher] = useState(false)
  const [isLoggingIn, setIsLoggedIn] = useState(false)
  const modeHandler = () => {
    setModeSwitcher((state) => {
      return !state
    })
  }

  const submitHandler = (e) => {
    e.preventDefault()
    const userName = modeSwitcher ? userNameRef.current.value : ''
    const email = emailRef.current.value
    const password = passwordRef.current.value
    setIsLoggedIn(true)
    const url = modeSwitcher
      ? 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCISzuKsXcAjQK9zglA1jeIPBRvC0TYWi8'
      : 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCISzuKsXcAjQK9zglA1jeIPBRvC0TYWi8'
    const loginAuth = async () => {
      try {
        const response = await fetch(url, {
          method: 'POST',
          body: JSON.stringify({
            email: email,
            password: password,
            returnSecureToken: true,
          }),
          headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
        })
        if (!response.ok) {
          const data = await response.json()
          console.log(data)
          throw new Error(data.error.message)
        }

        const data = await response.json()

        ctxAuth.loginHandler(data)

        if (modeSwitcher) {
          userNameRef.current.value = ''
        }
        emailRef.current.value = ''
        passwordRef.current.value = ''
        props.removeAuth()
        setIsLoggedIn(false)
      } catch (err) {
        alert(err)
        passwordRef.current.value = ''
        setIsLoggedIn(false)
      }
    }
    loginAuth()
  }
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <h1>{modeSwitcher ? 'SignUp' : 'Login'}</h1>
        <form className={classes.form} onSubmit={submitHandler}>
          {modeSwitcher && (
            <input
              type="text"
              placeholder="UserName"
              ref={userNameRef}
              defaultValue={userNameRef.current.value}
            ></input>
          )}
          <input
            type="email"
            placeholder="Email id"
            ref={emailRef}
            defaultValue={emailRef.current.value}
          ></input>
          <input
            type="password"
            placeholder="Password"
            ref={passwordRef}
            defaultValue={passwordRef.current}
          ></input>
          {isLoggingIn ? (
            <p>Loading...</p>
          ) : (
            <Button
              text={modeSwitcher ? 'SignUp' : 'LogIn'}
              className={classes.button}
              onClick={() => {}}
            ></Button>
          )}
        </form>
        <p className={classes.account} onClick={modeHandler}>
          {modeSwitcher ? 'Login With Existing Account' : 'Create New Account'}
        </p>
      </div>
    </div>
  )
}

export default LogIn
