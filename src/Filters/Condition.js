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
    if (!newStuff) {
      dispatch(filterAction.add({ type: 'newStuff' }))
    }
    if (newStuff) {
      dispatch(filterAction.remove({ type: 'newStuff' }))
    }
  }
  const secondStuff = useSelector((state) => {
    return state.filters.filters.secondStuff
  })

  const secondStuffHandler = () => {
    dispatch(filterAction.change({ type: 'secondStuff' }))
    if (!secondStuff) {
      dispatch(filterAction.add({ type: 'secondStuff' }))
    }
    if (secondStuff) {
      dispatch(filterAction.remove({ type: 'secondStuff' }))
    }
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
            checked={newStuff}
            className={classes.input}
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
            checked={secondStuff}
            className={classes.input}
          />
          <label htmlFor="secondStuff">Second stuff</label>
        </div>
      </form>
    </div>
  )
}

export default Condition
