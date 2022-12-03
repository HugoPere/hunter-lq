import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css'
import logo from '../logo.png'
function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] =  useState(true);

    const handleClick= () => setClick(!click); //toggles to the opposite of the current state
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() =>{
        showButton();
    }, []);

    window.addEventListener('resize', showButton)

return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    HunterLQ <img src={logo} alt="main logo" width="200" height="60"></img>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/calculator' className='nav-links' onClick={closeMobileMenu}>
                            Bonus calculator
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/loadouts' className='nav-links' onClick={closeMobileMenu}>
                            Card loadouts
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                            Sign Up
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
            </div>
        </nav>
    </>
  )
}

export default Navbar
