import React from 'react'
import { useSelector } from 'react-redux'
import FilteredIcon from './FilteredIcon'
import classes from './FilteredIcons.module.css'
import ClearAllFilters from './ClearAllFilters'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
function FilteredIcons() {
  const [show, setShow] = useState(false)
  const filteredIcons = useSelector((state) => {
    return state.filters.filteredIcons
  })
  const navigate = useNavigate()
  const sortingHandler = (e) => {
    navigate(`/?sort=${e.target.value}`)
  }
  const sortingShower = () => {
    setShow((state) => {
      return !state
    })
  }

  return (
    <div
      className={
        filteredIcons.length > 0
          ? `${classes.wrapperWithFilter}`
          : `${classes.wrapperWithoutFilter}`
      }
    >
      <div className={classes.sortingContainer}>
        {show && (
          <>
            <label className={classes.sortByLabel} htmlFor="sort">
              Sort By:
            </label>
            <select
              id="sort"
              className={classes.sortCategories}
              onChange={sortingHandler}
            >
              <option value="random">Best Match</option>
              <option value="increasing">Increasing</option>
              <option value="decreasing">Decreasing</option>
            </select>
          </>
        )}
        <div onClick={sortingShower} className={classes.tileContainer}>
          <svg
            style={{ width: '2.8rem', height: '2.8rem' }}
            viewBox="0 0 24 24"
          >
            <path
              fill="rgba(0, 0, 0, 0.624)"
              d="M3 11H11V3H3M5 5H9V9H5M13 21H21V13H13M15 15H19V19H15M3 21H11V13H3M5 15H9V19H5M13 3V11H21V3M19 9H15V5H19Z"
            />
          </svg>
        </div>
      </div>
      <div className={classes.filteredIcon}>
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
    </div>
  )
}

export default FilteredIcons
