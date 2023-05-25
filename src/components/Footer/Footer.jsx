import React from 'react';
import Facebook from '../../assets/images/soc-facebook.png';
import Instagram from '../../assets/images/soc-instagram.png';
import Telegram from '../../assets/images/soc-telegram.png';
import Twitter from '../../assets/images/soc-twitter.png';
import WhatsApp from '../../assets/images/soc-whatsapp.png';
import Youtube from '../../assets/images/soc-youtube.png';
import LogoFooter from '../../assets/images/logo-footer.png';
import GooglePlay from '../../assets/images/google-play.png';
import AppStore from '../../assets/images/app-store.png';
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer-container">
        <div className="container--grid--4--cols">
            <div className="logo">
                <img className="logo-img" src={LogoFooter} />
                <div className="app">
                    <img className="app-logo" src={GooglePlay} />
                    <img className="app-logo" src={AppStore} />
                </div>
            </div>

            <nav className="nav-col">
                <p className="footer-heading">Location</p>
                <a href="#" className="footer-link">Menara Multimedia, Jl. Kebon Sirih No.12, RT.11/RW.2, Gambir, Kecamatan
                    Gambir, Kota Jakarta
                    Pusat, Daerah Khusus Ibukota Jakarta 10110</a>
            </nav>

            <nav className="nav-col">
                <p className="footer-heading">About Us</p>
                <ul className="footer-nav">
                    <li><a href="#" className="footer-link">How to Book</a></li>
                    <li><a href="#" className="footer-link">Contact Us</a></li>
                    <li><a href="#" className="footer-link">Help Center</a></li>
                    <li><a href="#" className="footer-link">Careers</a></li>
                    <li><a href="#" className="footer-link">Installment</a></li>
                    <li><a href="#" className="footer-link">About Us</a></li>
                </ul>
            </nav>

            <nav className="nav-col">
                <p className="footer-heading">Others</p>
                <ul className="footer-nav">
                    <li><a href="#" className="footer-link">Pijar Travel for Corporates</a></li>
                    <li><a href="#" className="footer-link">Pijar Travel Affiliate</a></li>
                    <li><a href="#" className="footer-link">Flash Sale</a></li>
                    <li><a href="#" className="footer-link">Blog</a></li>
                    <li><a href="#" className="footer-link">Privacy Policy</a></li>
                    <li><a href="#" className="footer-link">Terms & Conditions</a></li>
                    <li><a href="#" className="footer-link">Register Your Accommodation</a></li>
                    <li><a href="#" className="footer-link">Register Your Experience Business</a></li>
                    <li><a href="#" className="footer-link">Register your Restaurant</a></li>
                    <li><a href="#" className="footer-link">Restaurant Business Blog</a></li>
                    <li><a href="#" className="footer-link">Pijar Travel Press Room</a></li>
                </ul>
            </nav>
        </div>

        <div className="social-media mb">
            <a href="#" className="social-media-link"><img src={Facebook} alt="facebook pijar travelling"/></a>
            <a href="#" className="social-media-link"><img src={Twitter} alt="facebook pijar travelling"/></a>
            <a href="#" className="social-media-link"><img src={Instagram} alt="facebook pijar travelling"/></a>
            <a href="#" className="social-media-link"><img src={Telegram} alt="facebook pijar travelling"/></a>
            <a href="#" className="social-media-link"><img src={WhatsApp} alt="facebook pijar travelling"/></a>
            <a href="#" className="social-media-link"><img src={Youtube} alt="facebook pijar travelling"/></a>
        </div>

        <div className="container-footer">
            <ul className="notes term">
                <li><a href="#" className="footer-link">Terms & Condition</a></li>
                <div className="vl-2"></div>
                <li><a href="#" className="footer-link">Privacy Policy</a></li>
                <div className="vl-2"></div>
                <li><a href="#" className="footer-link">Disclaimer</a></li>
            </ul>
            <ul className="notes term">
                <li><a href="#" className="footer-link">Copy &copy; 2023 PT. Hotel.com</a></li>
                <div className="vl-2"></div>
                <li><a href="#" className="footer-link">All rights reserved</a></li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer