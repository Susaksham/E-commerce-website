import React from 'react'
import classes from './Button.module.css'
function Button(props) {
  const onclickhandler = () => {
    props.onClick()
  }
  const additonalClasses = ` ${classes.button} ${classes.accept_btn} ${props.className}`
  return (
    <button className={additonalClasses} onClick={onclickhandler}>
      {props.text}
    </button>
  )
}

export default Button
