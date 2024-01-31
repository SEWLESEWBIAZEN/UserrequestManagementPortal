import React from 'react'
import './common.css'
import Carousell from './carousel/Carousel'
import Hero from './hero/Hero'
import Index from './core/Index'

const Public = () => { 
  return (
    <div>
      <div className='container'>
        <Carousell />
      </div>
      <hr />
      <div>
        <Index />
      </div>
      <hr />
      <div className='mx-2 '>
        <Hero />
      </div>
    </div>
  )
}

export default Public