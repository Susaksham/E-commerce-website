import React from 'react'
import NavigationBelt from '../components/NavigationHeader/NavigationBelt'
import FiltersComponent from '../Filters/FiltersComponent'
import Body from '../components/Body/Body'
function Home() {
  return (
    <div>
      <NavigationBelt></NavigationBelt>
      <Body></Body>
    </div>
  )
}

export default Home
