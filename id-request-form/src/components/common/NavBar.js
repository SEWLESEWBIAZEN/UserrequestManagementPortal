import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import logo from './common-assets/adIb.gif'

const NavBar = () => {
    const user = useSelector(state => state.user.user)
    return (
        <nav class="mx-2 fixed-top navbar navbar-expand-lg navbar-light bg-info">
            <a class="navbar-brand ms-2" href="https://addisbanksc.com">
                <img className="logo" src={logo} />
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <Link class="nav-link" to="/">Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to= "/Form" >Fill Form</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to= "/status" >Status</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to= '/branch'> Branches</Link>
                    </li>
                </ul>
                <div class="btn-toolbar m-auto" role="toolbar" aria-label="Toolbar with button groups">
                <div class="input-group">                    
                    <input type="text" class="form-control"
                        placeholder="search ..." aria-label="Input group example"
                        aria-describedby="btnGroupAddon" />
                        <div class="input-group-prepend">
                        <div onClick="" className="input-group-text bg-info" id="btnGroupAddon">Search</div>
                    </div>
                        
                </div>
            </div>
            </div>
            
            <div className='ms-2'>
                {user ?
                    <Link to='/logout'>Logout</Link> :
                    <Link to='/login' >Login</Link>
                }
            </div>
            <div className='my-0'>
                <button className="btn btn-secondary shadow" onClick={() => { window.location.reload() }}>Refresh </button>
            </div>
        </nav>
    )
}
export default NavBar