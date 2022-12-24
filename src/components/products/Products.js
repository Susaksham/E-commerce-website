import React from 'react'
import classes from './Products.module.css'
import { useSelector } from 'react-redux'
import Product from './Product'
import FilteredIcons from './FilteredIcons'
function Products() {
  let filteredData = []
  const data = useSelector((state) => {
    return state.filters.data
  })
  const filters = useSelector((state) => {
    return state.filters.filters
  })
  const totalFilters = useSelector((state) => {
    return state.filters.totalFilters
  })

  if (totalFilters > 0) {
    filteredData = data.filter((element) => {
      let flag = true
      for (const filterProperty in element['filters']) {
        console.log(
          'matching the filter',
          element['filters'][filterProperty] !== filters[filterProperty],
        )
        console.log(filterProperty)
        console.log(
          element['filters'][filterProperty] +
            ' mathcing or not ' +
            filters[filterProperty],
        )
        if (element['filters'][filterProperty] !== filters[filterProperty]) {
          flag = false
          break
        }
      }
      if (!flag) {
        return false
      }
      return true
    })
  }

  console.log(data)
  return (
    <div className={classes.wrapper}>
      <FilteredIcons></FilteredIcons>
      <div className={classes.container}>
        {totalFilters === 0 &&
          data.map((product) => {
            console.log(product.star)
            return (
              <Product
                key={product.id}
                id={product.id}
                productName={product.productName}
                price={product.price}
                image={product.image}
                description={product.description}
                cpu={product.cpu}
                screen={product.screen}
                star={product.star}
              ></Product>
            )
          })}
        {totalFilters > 0 &&
          filteredData.map((product) => {
            return (
              <Product
                key={product.id}
                id={product.id}
                productName={product.productName}
                price={product.price}
                image={product.image}
                description={product.description}
                cpu={product.cpu}
                screen={product.screen}
                star={product.star}
              ></Product>
            )
          })}
        {totalFilters > 0 && filteredData.length === 0 && (
          <p style={{ fontSize: '2rem' }}>No Data found!</p>
        )}
      </div>
    </div>
  )
}

export default Products
