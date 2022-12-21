import { configureStore } from '@reduxjs/toolkit'
import filters from './filter'
const store = configureStore({
  reducer: { filters: filters },
})

export default store
