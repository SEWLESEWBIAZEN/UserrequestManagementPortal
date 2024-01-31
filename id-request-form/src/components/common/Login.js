import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
// import { setCredentials } from '../../reducers/AuthReducer'
// import { useLoginMutation } from '../../reducers/AuthApiReducer'
import { loginUser } from '../../slices/userSlice'
import './common.css'


const Login = () => {
    const userRef = useRef()
    const errRef = useRef()
    const [user, setUser] = useState()
    const [password, setPassword] = useState()
    const [errMsg, setErrMsg] = useState()
    const navigate = useNavigate()

    //redux state

    const { loading, error } = useSelector((state) => state.user)

    const dispatch = useDispatch()

    useEffect(() => {
        userRef.current.focus()
    }, [])

    useEffect(() => {
        setErrMsg('')
    }, [user, password])

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            let userCredentials = { email: user, password: password }
            dispatch(loginUser(userCredentials))
                .then((result) => {
                    if (result.payload) {
                        localStorage.setItem('user',result.payload)
                        setUser('')
                        setPassword('')
                        navigate('/welcome')                        
                    }
                })

        }
        catch (err) {
            if (!err?.response) {
                setErrMsg('No Server response')
            } else if (err.response?.status === 401) {
                setErrMsg('UnAuthorized')
            } else if (err.response?.status === 400) {
                setErrMsg(' Missing Username or password')
            } else {
                setErrMsg('Login Failed')
            }
            errRef.current.focus();
        }
    }
    const handleUserInput = (e) => setUser(e.target.value)
    const handlePasswordInput = (e) => setPassword(e.target.value)

    const content =
        <section className='bg-secondary container'>
            <p ref={errRef} className={errMsg ? "errMsg" : "offscreen"} aria-label=''></p>

            <h1>Login</h1>
            <form onSubmit={handleSubmit} className='d-block m-4 shadow'>
                <div className='row m-3'>
                    <div>
                        <label htmlFor='username' className=''>Username:</label>
                        <input type='text'
                            id='username'
                            ref={userRef}
                            value={user}
                            onChange={handleUserInput}
                            autoComplete='off'
                            required
                            className='ms-1'
                        />
                    </div>
                </div>
                <div className='row'>
                    <div>
                        <label htmlFor='password'>Password:</label>
                        <input type='password'
                            id='password'
                            value={password}
                            onChange={handlePasswordInput}
                            required
                            className='ms-2' />
                    </div>
                </div>
                <button type='submit' className='btn btn-primary '>
                    {loading ? "...Signing In" : "Sign In"}
                </button>
                <button type='button' className='btn btn-danger ms-2'> Clear</button>

                {error &&
                    (
                        <div className='alert alert-danger' role='alert'>
                            {error}
                        </div>
                    )}



            </form>
        </section>

    return content
}

export default Login