import React from 'react'
import classes from './Condition.module.css'
function Condition() {
  return (
    <div className={classes.condition}>
      <h2>Condition</h2>
      <form>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input
            type="checkbox"
            id="newStuff"
            name="newStuff"
            value="newStuff"
          />
          <label htmlFor="newStuff">New Stuff</label>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input
            type="checkbox"
            id="secondStuff"
            name="secondStuff"
            value="secondStuff"
          />
          <label htmlFor="secondStuff">Second stuff</label>
        </div>
      </form>
    </div>
  )
}

export default Condition
