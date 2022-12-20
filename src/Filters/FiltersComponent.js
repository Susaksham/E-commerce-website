import React from 'react'
import Condition from './Condition'
import classes from './FiltersComponent.module.css'
import MinOrder from './MinOrder'
import ProductTypes from './ProductTypes'
import SupplyTypes from './SupplyTypes'
function FiltersComponent() {
  return (
    <div className={classes.container}>
      <h2>Filter</h2>
      <SupplyTypes></SupplyTypes>
      <ProductTypes></ProductTypes>
      <Condition></Condition>
      <MinOrder></MinOrder>
    </div>
  )
}

export default FiltersComponent
