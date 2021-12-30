import React from 'react'
import './navbar.scss'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="left">
                  nasreddine jaouadi
            </div>
            <div className="right">
                <div className="hamburger">
                    <span className='line1'></span>
                    <span className='line2'></span>
                    <span className='line3'></span>
                </div>
            </div>
        </div>
    )
}

export default Navbar
