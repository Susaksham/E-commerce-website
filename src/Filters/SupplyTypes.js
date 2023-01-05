import React from 'react'
import classes from './SupplyTypes.module.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { filterAction } from '../store/filter'
function SupplyTypes() {
  const trade = useSelector((state) => {
    return state.filters.filters.tradeAssurance
  })

  const dispatch = useDispatch()
  const tradeHandler = () => {
    dispatch(filterAction.change({ type: 'tradeAssurance' }))
    if (!trade) {
      dispatch(filterAction.add({ type: 'tradeAssurance' }))
    }
    if (trade) {
      dispatch(filterAction.remove({ type: 'tradeAssurance' }))
    }
  }

  const verifiedSuppliers = useSelector((state) => {
    return state.filters.filters.verifiedSuppliers
  })

  const verifiedSuppliersHandler = () => {
    console.log(verifiedSuppliers)
    dispatch(filterAction.change({ type: 'verifiedSuppliers' }))
    if (!verifiedSuppliers) {
      dispatch(filterAction.add({ type: 'verifiedSuppliers' }))
    }
    if (verifiedSuppliers) {
      dispatch(filterAction.remove({ type: 'verifiedSuppliers' }))
    }
  }
  return (
    <div className={classes.supply__types}>
      <h2>Suppliers Types</h2>

      <form
        className={classes.types__description}
        // style={{ display: 'flex', alignItems: 'center' }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input
            type="checkbox"
            id="trade"
            name="samples"
            value="sample"
            onChange={tradeHandler}
            checked={trade}
            className={classes.input}
          />
          <label></label>

          <svg
            viewBox="0 0 24 24"
            width="25"
            height="25"
            style={{
              display: 'inline-block',
              width: '25px',
            }}
          >
            <path
              fill="#fb6a00"
              d="M12 8L15 13.2L18 10.5L17.3 14H6.7L6 10.5L9 13.2L12 8M12 4L8.5 10L3 5L5 16H19L21 5L15.5 10L12 4M19 18H5V19C5 19.6 5.4 20 6 20H18C18.6 20 19 19.6 19 19V18Z"
            />
          </svg>
          <label
            htmlFor="trade"
            style={{ display: 'inline-block', marginLeft: '0.5rem' }}
          >
            Trade assurance
          </label>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input
            type="checkbox"
            id="verified"
            name="samples"
            value="sample"
            onChange={verifiedSuppliersHandler}
            checked={verifiedSuppliers}
            className={classes.input}
          />
          <svg width="20" height="20" viewBox="0 0 24 24">
            <path
              fill="#fb6a00"
              d="M23 12L20.6 9.2L20.9 5.5L17.3 4.7L15.4 1.5L12 3L8.6 1.5L6.7 4.7L3.1 5.5L3.4 9.2L1 12L3.4 14.8L3.1 18.5L6.7 19.3L8.6 22.5L12 21L15.4 22.5L17.3 19.3L20.9 18.5L20.6 14.8L23 12M18.7 16.9L16 17.5L14.6 19.9L12 18.8L9.4 19.9L8 17.5L5.3 16.9L5.5 14.1L3.7 12L5.5 9.9L5.3 7.1L8 6.5L9.4 4.1L12 5.2L14.6 4.1L16 6.5L18.7 7.1L18.5 9.9L20.3 12L18.5 14.1L18.7 16.9M16.6 7.6L18 9L10 17L6 13L7.4 11.6L10 14.2L16.6 7.6Z"
            />
          </svg>{' '}
          <label htmlFor="verified" style={{ marginLeft: '0.5rem' }}>
            Verified Suppliers
          </label>
        </div>
      </form>
    </div>
  )
}

export default SupplyTypes
