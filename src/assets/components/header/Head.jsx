import React from 'react'
import './head.css'


function Header() {
    return (
        <div className='header container'>
            <div className='headerleft'>
                <a href="" className='a1'><h1>Logo</h1></a>
                <input className='input1' type="text" />
                <a className='a2' href="">Home</a>
                <a className='a2' href="">Explore</a>
            </div>
            <div className='headerright'>
                <i className="fa-solid fa-bell"></i>
                <i className="fa-regular fa-image"></i>
                <button className='button1'>Wallet</button>
                <i className="fa-solid fa-user"></i>
            </div>
        </div>
    )
}

export default Header