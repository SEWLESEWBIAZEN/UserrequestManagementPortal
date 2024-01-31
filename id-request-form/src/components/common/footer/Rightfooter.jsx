import React from 'react'
import { Link } from 'react-router-dom'

const Rightfooter = () => {
  return (
    <div className='d-block text-center m-auto'>
      <h4>Important Links</h4>
      <div><Link to="/"> Home</Link> </div>
      <div><Link to="/Form">  Fill ID Request Form</Link> </div>
      <div><Link to="/branch"> Find Branches</Link> </div>
      <div><Link to="/status"> Request Status</Link> </div>
      <div><Link to=""> Contact Us</Link> </div>
      <div><Link to=""> Know About Us</Link> </div>
    </div>
  )
}
export default Rightfooter