import React from 'react'
import Leftfooter from './Leftfooter'
import Centerfooter from './Centerfooter'
import Rightfooter from './Rightfooter'

const Index = () => {
  return (
    <div className='d-block '>
    <p className='text-info text-center'> ADDIS INTERNATIONAL BANK</p>
       <div className='d-xs-block d-md-flex justify-content-center mx-3'>
       <div className='col-md-4'><Leftfooter/></div>
        <div className='col-md-4'><Centerfooter/></div>
        <div className='col-md-4'><Rightfooter/></div>
       </div>
    </div>
  )
}

export default Index