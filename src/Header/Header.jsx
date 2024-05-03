import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className='navSection'>
            <Link className='link' to="/">HOME</Link>
            <Link className='link' to="/page2">PAGE 2</Link>
            <Link className='link' to="/page3">PAGE 3</Link>
            <Link className='link' to="/page4">PAGE 4</Link>
            <Link className='link' to="/page5">PAGE 5</Link>
            <Link className='link' to="/grandpa">Grand pa</Link>
        </nav>
    );
};

export default Header;