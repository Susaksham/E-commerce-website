import React from 'react'
import { useParams } from 'react-router-dom'
import classes from './ProductDetail.module.css'

function ProductDetail() {
  const params = useParams()
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}></div>
    </div>
  )
}

export default ProductDetail
