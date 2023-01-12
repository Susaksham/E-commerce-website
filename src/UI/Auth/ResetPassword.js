import React from 'react'
import classes from './ResetPassword.module.css'
import { useRef, useContext, useState } from 'react'
import { authContext } from '../../store/auth-context'
import Button from '../Button/Button'
function ResetPassword(props) {
  const userNameRef = useRef('')
  const emailRef = useRef('')
  const passwordRef = useRef('')
  const ctxAuth = useContext(authContext)
  const [signOut, setSignOut] = useState(true)
  const [successful, setSuccessful] = useState(false)

  const signOutHandler = () => {
    setSignOut((result) => {
      return !result
    })
  }
  const successfulHandler = async () => {
    return new Promise((res, reject) => {
      setSuccessful(true)
      setTimeout(() => {
        setSuccessful(false)
        setTimeout(() => {
          props.removeAuth()
        }, 0)
      }, 2000)
    })
  }
  const submitHandler = (e) => {
    e.preventDefault()
    if (signOut) {
      ctxAuth.logOutHandler()
      return
    }
    const password = passwordRef.current.value
    const getOtp = async () => {
      try {
        const response = await fetch(
          'https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCISzuKsXcAjQK9zglA1jeIPBRvC0TYWi8',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({
              idToken: ctxAuth.idToken,
              password: password,
              returnSecureToken: true,
            }),
          },
        )
        if (!response.ok) {
          console.log(response)
          throw new Error(response)
        }
        const data = await response.json()
        // console.log(data)
        ctxAuth.changePassword(data)
        passwordRef.current.value = ''
        await successfulHandler()
      } catch (err) {
        alert(err)
        passwordRef.current.value = ''
        // console.log(err)
      }
    }
    getOtp()
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <h1>
          {signOut ? 'Are you sure you want to logout?' : 'Change Password'}
        </h1>
        <form className={classes.form} onSubmit={submitHandler}>
          {/* <input type="email" placeholder="Email id" ref={emailRef}></input> */}
          {!signOut && (
            <input
              type="password"
              placeholder="New Password"
              ref={passwordRef}
              defaultValue={passwordRef.current.value}
            ></input>
          )}

          <Button
            text={signOut ? 'Logout' : 'Change Password'}
            className={classes.button}
            onClick={() => {}}
          ></Button>
          {successful && <p style={{ color: 'green' }}>successful...</p>}
        </form>
        <p className={classes.account} onClick={signOutHandler}>
          {signOut ? 'Change password' : 'Sign out'}
        </p>
      </div>
    </div>
  )
}

export default ResetPassword
