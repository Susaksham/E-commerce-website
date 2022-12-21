import React from 'react'
import classes from './Products.module.css'
import { useSelector } from 'react-redux'
import Product from './Product'
function Products() {
  const data = useSelector((state) => {
    return state.filters.data
  })
  console.log(data)
  return (
    <div className={classes.wrapper}>
      {data.map((product) => {
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
          ></Product>
        )
      })}
    </div>
  )
}

export default Products
