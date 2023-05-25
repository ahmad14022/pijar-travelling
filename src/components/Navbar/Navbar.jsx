import React from 'react';
import './Navbar.css';
import logoImage from '../../assets/images/logo-color.png';
import searchIcon from '../../assets/images/search.png'

const Navbar = () => {
  return (
    <nav className="navigation">
      <a href="#" className="logo">
        <img src={logoImage} alt="pijar-logo" />
      </a>
      <form action="" className="search-bar">
        <div className="search-content">
          <input className="search-text" type="text" placeholder="Booking . Destination . BAQ" />
          <button className="search-img" type="submit"><a href="#"><img src={searchIcon} alt='search-icon'/></a></button>
        </div>
      </form>
      <form className="form-input">
        <button className="btn login">Login</button>
        <button className="btn sign-up">Sign Up</button>
      </form>
    </nav>
  );
};

export default Navbar;
