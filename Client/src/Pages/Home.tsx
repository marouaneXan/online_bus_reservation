import React from 'react'
import Description from '../Components/Home/Description'
import Destinations from '../Components/Home/Destination'
import Hero from '../Components/Home/Hero'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Destinations/>
        <Description/>
    </div>
  )
}

export default Home