import React from 'react'
import { Link } from 'react-router-dom'

const PageInaccessible = () => {
  return (
    <div className='container shadow'>
        You can not access the paage unless you login!

        <div>
        <Link to="/login"> LOGIN</Link>
        </div>
        
        </div>
  )
}

export default PageInaccessible