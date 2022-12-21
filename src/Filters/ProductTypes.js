import React from 'react'
import classes from './ProductTypes.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { filterAction } from '../store/filter'
function ProductTypes() {
  const readyToShip = useSelector((state) => {
    return state.filters.filters.readyToShip
  })
  const paidSamples = useSelector((state) => {
    return state.filters.filters.readyToShip
  })

  const dispatch = useDispatch()
  const readyToShipHandler = () => {
    dispatch(filterAction.change({ type: 'readyToShip' }))
  }
  const paidSamplesHandler = () => {
    dispatch(filterAction.change({ type: 'paidSamples' }))
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
          />
          <label htmlFor="samples"> Paid Samples</label>
        </div>
      </form>
    </div>
  )
}

export default ProductTypes
