import React from 'react'
import classes from './Products.module.css'
import { useSelector } from 'react-redux'
import Product from './Product'
import FilteredIcons from '../FilterIcons/FilteredIcons'
import { useLocation } from 'react-router-dom'

import Loader from '../../UI/Loader/Loader'
function Products() {
  let filteredData = []
  const location = useLocation()
  const data = useSelector((state) => {
    return state.filters.data
  })
  const productsData = [...data]
  const filters = useSelector((state) => {
    return state.filters.filters
  })
  const totalFilters = useSelector((state) => {
    return state.filters.totalFilters
  })
  const filteredString = useSelector((state) => {
    return state.filters.searchString
  })

  if (totalFilters > 0 || filteredString.length > 0) {
    filteredData = data.filter((element) => {
      if (totalFilters > 0 && filteredString.length === 0) {
        let flag = true
        for (const filterProperty in element['filters']) {
          if (element['filters'][filterProperty] !== filters[filterProperty]) {
            flag = false
            break
          }
        }
        if (!flag) {
          return false
        }
        return true
      } else if (filteredString.length > 0 && totalFilters === 0) {
        return element.title
          .toLowerCase()
          .includes(`${filteredString.toLowerCase()}`)
      } else {
        if (
          !element.title
            .toLowerCase()
            .includes(`${filteredString.toLowerCase()}`)
        ) {
          return false
        }
        let flag = true
        for (const filterProperty in element['filters']) {
          if (element['filters'][filterProperty] !== filters[filterProperty]) {
            flag = false
            break
          }
        }
        if (!flag) {
          return false
        }
        return true
      }
    })
  }
  const loading = useSelector((state) => {
    return state.filters.loading
  })

  const search = new URLSearchParams(location.search)

  if (search.get('sort') === 'increasing') {
    filteredData.sort((a, b) => {
      return a.price - b.price
    })
    productsData.sort((a, b) => {
      return a.price - b.price
    })
  } else if (search.get('sort') === 'decreasing') {
    filteredData.sort((a, b) => {
      return b.price - a.price
    })
    productsData.sort((a, b) => {
      return b.price - a.price
    })
  }
  return (
    <div className={classes.wrapper}>
      <FilteredIcons></FilteredIcons>
      <div className={classes.container}>
        {loading && <Loader></Loader>}
        {!loading &&
          totalFilters === 0 &&
          filteredString.length === 0 &&
          productsData.map((product) => {
            return (
              <Product
                key={product.id}
                id={product.id}
                productName={product.title}
                price={product.price}
                image={product.image}
                description={product.description}
                cpu={product.cpu}
                screen={product.screen}
                star={product.rating.rate}
              ></Product>
            )
          })}
        {!loading &&
          (totalFilters > 0 || filteredString.length > 0) &&
          filteredData.map((product) => {
            return (
              <Product
                key={product.id}
                id={product.id}
                productName={product.title}
                price={product.price}
                image={product.image}
                description={product.description}
                cpu={product.cpu}
                screen={product.screen}
                star={product.rating.rate}
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
