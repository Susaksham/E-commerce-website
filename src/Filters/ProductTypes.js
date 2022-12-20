import React from 'react'
import classes from './ProductTypes.module.css'
function ProductTypes() {
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
          />
          <label htmlFor="readyToShop">Ready to Shop</label>
        </div>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input type="checkbox" id="samples" name="samples" value="sample" />
          <label htmlFor="samples"> Paid Samples</label>
        </div>
      </form>
    </div>
  )
}

export default ProductTypes
