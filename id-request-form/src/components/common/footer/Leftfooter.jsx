import React from 'react'
import img from '../common-assets/LOGO2.gif'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Leftfooter = () => {
  const user=useSelector(state=>state.user.user)
  return (
    <div className='d-block text-center'>
       <h5>
       "Keep in mind that the steps and features may vary slightly depending on updates to Canva's platform, 
        so refer to Canva's official documentation or support resources for the most accurate and up-to-date information."
       </h5>
       <img className='logo' src={img}/>
       <div><Link  to={ user?'/logout':'/login'}> {user?"LOGOUT":"LOGIN"}</Link></div>
    </div>
  )
}

export default Leftfooter