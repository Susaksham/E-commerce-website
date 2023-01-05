import React from 'react'
import classes from './ProductTypes.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { filterAction } from '../store/filter'
function ProductTypes() {
  const readyToShip = useSelector((state) => {
    return state.filters.filters.readyToShip
  })
  const paidSamples = useSelector((state) => {
    return state.filters.filters.paidSamples
  })

  const dispatch = useDispatch()
  const readyToShipHandler = () => {
    dispatch(filterAction.change({ type: 'readyToShip' }))
    if (!readyToShip) {
      dispatch(filterAction.add({ type: 'readyToShip' }))
    }
    if (readyToShip) {
      dispatch(filterAction.remove({ type: 'readyToShip' }))
    }
  }
  const paidSamplesHandler = () => {
    dispatch(filterAction.change({ type: 'paidSamples' }))
    if (!paidSamples) {
      dispatch(filterAction.add({ type: 'paidSamples' }))
    }
    if (paidSamples) {
      dispatch(filterAction.remove({ type: 'paidSamples' }))
    }
  }
  return (
    <div className={classes.product__types}>
      <h2>Product types</h2>
      <form>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input
            type="checkbox"
            id="readyToShop"
            name="readyToShop"
            value="ready"
            onChange={readyToShipHandler}
            checked={readyToShip}
            className={classes.input}
          />
          <label htmlFor="readyToShop">Ready to Shop</label>
        </div>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input
            type="checkbox"
            id="samples"
            name="samples"
            value="sample"
            onChange={paidSamplesHandler}
            checked={paidSamples}
            className={classes.input}
          />
          <label htmlFor="samples"> Paid Samples</label>
        </div>
      </form>
    </div>
  )
}

export default ProductTypes
