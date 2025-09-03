import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
            <h1 style={{ padding: "0px 20px 20px 0px", color: "skyblue" }}>SAVAN PHARMA</h1>

              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque rem hic sequi ab cum excepturi nulla explicabo sunt sint consequuntur quaerat sapiente, non corporis aperiam harum voluptatibus temporibus commodi. Quas.</p>
              <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
              </div>
            </div>
            <div className="footer-content-center">
              <h2>COMPANY</h2>
              <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
              </ul>
            </div>
            <div className="footer-content-right">
              <h2>GET IN TOUCH</h2>
              <ul>
                <li>+91 8866326882</li>
                <li>savanchauhan3327@gmail.com</li>
              </ul>
            </div>
            
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2025 © Savanpharma.com -All Right Reserved</p>
    </div>
  )
}

export default Footer