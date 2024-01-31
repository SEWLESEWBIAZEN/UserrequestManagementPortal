import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { selectCurrentToken } from "../../reducers/AuthReducer";

import React from 'react'

const RequireAuth = () => {
    const token=useSelector(selectCurrentToken)
    const location=useLocation()

  return (
    token
    ?<Outlet/>
    :<Navigate to="/login" state={{from:location}} replace/>

  )
}

export default RequireAuth