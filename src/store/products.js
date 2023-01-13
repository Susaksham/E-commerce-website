import React from 'react'
import { useSelector } from 'react-redux'
import { filterAction } from './filter'

const dataCreator = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      try {
        dispatch(filterAction.setLoading(true))
        const response = await fetch('https://fakestoreapi.com/products')

        const data = await response.json()
        const newData = data.map((product) => {
          return {
            ...product,
            filters: {
              tradeAssurance: Math.random() - 0.2 >= 0 ? true : false,
              verifiedSuppliers: Math.random() - 0.3 >= 0 ? true : false,
              readyToShip: Math.random() - 0.5 >= 0 ? true : false,
              paidSamples: Math.random() - 0.8 >= 0 ? true : false,
              newStuff: Math.random() - 0.5 >= 0 ? true : false,
              secondStuff: Math.random() - 0.5 >= 0 ? true : false,
            },
            star: 5.0,
          }
        })
        await new Promise((res, rej) => {
          setTimeout(() => {
            dispatch(filterAction.addData(newData))
            res()
          }, 50)
        })
        dispatch(filterAction.setLoading(false))
        console.log(data)
      } catch (err) {}
    }
    try {
      await fetchData()
    } catch (err) {
      console.log(err)
    }
  }
}
export default dataCreator
