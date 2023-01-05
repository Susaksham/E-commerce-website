import React from 'react'
import classes from './Loader.module.css'
function Loader() {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.circle}></div>
        <div className={classes.circle}></div>
        <div className={classes.circle}></div>
        <div className={classes.shadow}></div>
        <div className={classes.shadow}></div>
        <div className={classes.shadow}></div>
      </div>
    </>
  )
}

export default Loader
