import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { logoutUser } from "../../slices/userSlice"

const Logout = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    // localStorage.removeItem('user')
    dispatch(logoutUser())    
    navigate('/login')
    
    return(
        <div className="container shadow">
            <h5>
                You Are Logged out successfully!
            </h5>
            <Link to="/login"> Click Here to ReLogin</Link>

        </div>
    )
}
export default Logout