import React from 'react'
import classes1 from './Modal.module.css'
import Card from '../Card'
import LogIn from '../Auth/LogIn'
import ReactDOM from 'react-dom'
import classes from './AuthModal.module.css'
function AuthModal(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <BackDrop1 removeAuth={props.removeAuth}></BackDrop1>,
        document.getElementById('auth'),
      )}
    </>
  )
}

export function BackDrop1(props) {
  return (
    <div className={classes1.backdrop}>
      <div className={classes1.firstChild} onClick={props.removeAuth}></div>
      <Card className={classes.card}>
        <LogIn></LogIn>
      </Card>
    </div>
  )
}

export default AuthModal
