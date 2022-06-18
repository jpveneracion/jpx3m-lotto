import React from 'react';
import logo from '../../images/header.png';
import Clock from './Clock';
const Header = () => {

    return(
        <div className='header'>
            <img src={logo} className="App-logo" alt="logo" />
            <Clock />
            <ul className="App-navi">
                <li>Home</li>
                <li>Yesterday</li>
                <li>All Results</li>
            </ul>
        </div>
    )
}

export default Header