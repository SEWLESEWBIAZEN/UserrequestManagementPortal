import React from 'react'
import './hero.css'
import img from '../carousel/assets/finance.png'
import img1 from '../carousel/assets/mobilepayment.png'

const Hero = () => {
  return (
    <div className='d-xs-block d-md-flex'>
        <img src={img}/>        
        <p className='text-center main flex-wrap'>
        Addis International Bank is a prominent financial institution based in Ethiopia, playing a crucial 
        role in the country's banking sector. 
        Established with a commitment to excellence and customer-centric financial services, 
        the bank has built a strong reputation for its integrity, innovation, and dedication to meeting the 
        diverse needs of its clients.
        
        </p>
        <img src={img1}/>
    </div>
  )
}

export default Hero