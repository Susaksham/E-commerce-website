import React from 'react'
import { useSelector } from 'react-redux'
import FilteredIcon from './FilteredIcon'
import classes from './FilteredIcons.module.css'
import ClearAllFilters from './ClearAllFilters'
function FilteredIcons() {
  const filteredIcons = useSelector((state) => {
    return state.filters.filteredIcons
  })
  console.log(filteredIcons)
  return (
    <div className={classes.wrapper}>
      {filteredIcons.map((icon) => {
        return (
          <FilteredIcon
            id={icon.id}
            key={icon.id}
            filteredIconName={icon.icon}
          ></FilteredIcon>
        )
      })}
      {filteredIcons.length > 0 && <ClearAllFilters></ClearAllFilters>}
    </div>
  )
}

export default FilteredIcons
