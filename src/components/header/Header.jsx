import React from 'react';
import logo from '../../images/header.png';
import Clock from './Clock';
import {Link} from 'react-router-dom'
const Header = () => {

    return(
        <div className='header'>
            <img src={logo} className="App-logo" alt="logo" />
            <Clock />
            <ul className="App-navi">
                <Link to="/">Home</Link> 
                <Link to="/yesterday">Yesterday</Link>
                <li>All Results</li>
            </ul>
        </div>
    )
}

export default Header