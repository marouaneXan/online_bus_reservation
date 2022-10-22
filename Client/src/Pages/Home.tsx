import React from 'react'
import Description from '../Components/Home/Description'
import Destinations from '../Components/Home/Destination'
import Hero from '../Components/Home/Hero'
import Selects from '../Components/Home/Selects'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Destinations/>
        <Description/>
        <Selects/>
    </div>
  )
}

export default Home