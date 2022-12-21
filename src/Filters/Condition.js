import React from 'react'
import classes from './Condition.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { filterAction } from '../store/filter'
function Condition() {
  const newStuff = useSelector((state) => {
    return state.filters.filters.newStuff
  })

  const dispatch = useDispatch()
  const newStuffHandler = () => {
    dispatch(filterAction.change({ type: 'newStuff' }))
  }
  const secondStuff = useSelector((state) => {
    return state.filters.filters.secondStuff
  })

  const secondStuffHandler = () => {
    dispatch(filterAction.change({ type: 'secondStuff' }))
  }
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
            onChange={newStuffHandler}
          />
          <label htmlFor="newStuff">New Stuff</label>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input
            type="checkbox"
            id="secondStuff"
            name="secondStuff"
            value="secondStuff"
            onChange={secondStuffHandler}
          />
          <label htmlFor="secondStuff">Second stuff</label>
        </div>
      </form>
    </div>
  )
}

export default Condition
