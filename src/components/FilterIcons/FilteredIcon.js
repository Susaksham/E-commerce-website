import React from 'react'
import classes from './FilteredIcon.module.css'
import { useDispatch } from 'react-redux'
import { filterAction } from '../../store/filter'
function FilteredIcon(props) {
  const dispatch = useDispatch()
  const removeHandler = () => {
    dispatch(filterAction.change({ type: `${props.filteredIconName}` }))
    dispatch(filterAction.remove({ type: `${props.filteredIconName}` }))
  }
  return (
    <div className={classes.wrapper}>
      <p>
        {props.filteredIconName}
        <span className="material-symbols-outlined" onClick={removeHandler}>
          close
        </span>
      </p>
    </div>
  )
}

export default FilteredIcon
