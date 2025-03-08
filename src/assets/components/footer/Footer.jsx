import React from 'react'
import './footer.css'


function Footer() {
    return (
        <div className='footer container'>
            <div className="footerleft">
                <a className='a3' href=""><h2>LOGO</h2></a><br />
                <p className='plorem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque donec non pellentesque ut.</p>
            </div>
            <div className="footerright">
                <div className='stolbik'>
                    <a className='a4' href=""><h2>About</h2></a><br />
                    <a className='a5' href="">Product</a><br /><br />
                    <a className='a5' href="">Resource</a><br /><br />
                    <a className='a5' href="">Term & Condition</a><br /><br />
                    <a className='a5' href="">FAQ</a><br /><br />
                </div>
                <div className='stolbik'>
                    <a className='a4' href=""><h2>Company</h2></a><br />
                    <a className='a5' href="">Our Team</a><br /><br />
                    <a className='a5' href="">Partner With Us</a><br /><br />
                    <a className='a5' href="">Privacy & Policy</a><br /><br />
                    <a className='a5' href="">Features</a><br /><br />
                </div>
                <div className='stolbik'>
                    <a className='a4' href=""><h2>Contact</h2></a><br />
                    <a className='a5' href="">+012 3456789</a><br /><br />
                    <a className='a5' href="">adorableprogrammer@gmail.com</a><br /><br />
                    <div className='socialmedia'>
                        <i className="fa-brands fa-youtube"></i>
                        <i className="fa-brands fa-discord"></i>
                        <i className="fa-brands fa-instagram"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer