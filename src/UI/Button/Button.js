import React from 'react'
import classes from './Button.module.css'
function Button(props) {
  const onclickhandler = () => {
    props.onClick()
  }
  return (
    <button
      class={`${classes.button} ${classes.accept_btn}`}
      onClick={onclickhandler}
    >
      {props.text}
    </button>
  )
}

export default Button
