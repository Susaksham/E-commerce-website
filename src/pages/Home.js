import React from 'react'
import NavigationBelt from '../components/NavigationHeader/NavigationBelt'
import FiltersComponent from '../Filters/FiltersComponent'

function Home() {
  return (
    <div>
      <NavigationBelt></NavigationBelt>
      <FiltersComponent></FiltersComponent>
    </div>
  )
}

export default Home
