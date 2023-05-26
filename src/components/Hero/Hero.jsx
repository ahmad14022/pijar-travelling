import React, { useState, useEffect, useRef } from 'react';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.css';
import bondingImage from '../../assets/images/bonding-img.png';
import locationLogo from '../../assets/images/location-logo.png';
import locationLogoHero from '../../assets/images/location-logo-hero.png'
import calender from '../../assets/images/calender.png';
import guestRoomIcon from '../../assets/images/guest-room-icon.png';
import FrameOpen from '../FrameOpen/FrameOpen';
import './Hero.css';

const Hero = () => {
  const datePickerRef = useRef(null);
  const [guestCountDewasa, setGuestCountDewasa] = useState(1);
  const [guestCountBalita, setGuestCountBalita] = useState(1);
  const [isModalHidden, setIsModalHidden] = useState(true);
  const [isFrameOpen, setIsFrameOpen] = useState(false);
  const [provinces, setProvinces] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState('');

  useEffect(() => {
    const config = {
      dateFormat: 'd-m-Y',
      altInput: true,
      altFormat: 'j, F Y'
    };

    flatpickr(datePickerRef.current, config);
  }, []);

  useEffect(() => {
    fetch('https://kanglerian.github.io/api-wilayah-indonesia/api/provinces.json')
      .then(response => response.json())
      .then(data => {
        setProvinces(data);
      });
  }, []);

  const handleMinusClick = (category) => {
    if (category === 'dewasa' && guestCountDewasa > 0) {
      setGuestCountDewasa(guestCountDewasa - 1);
    } else if (category === 'balita' && guestCountBalita > 0) {
      setGuestCountBalita(guestCountBalita - 1);
    }
  };

  const handlePlusClick = (category) => {
    if (category === 'dewasa') {
      setGuestCountDewasa(guestCountDewasa + 1);
    } else if (category === 'balita') {
      setGuestCountBalita(guestCountBalita + 1);
    }
  };

  const toggleModalGuest = () => {
    setIsModalHidden(!isModalHidden);
  };

  const handleProvinceChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedProvince(selectedValue);
  };

  const toggleModal = () => {
    setIsModalHidden((prevState) => !prevState);
  };

  const toggleContainerFrame = () => {
    setIsFrameOpen((prevState) => !prevState);
  };

  return (
    <>
      <section className="section-hero">
        <div className="banner-card">
          <img className="bonding-img" src={bondingImage} width="1200px" height="562px" />
          <div className="banner-text">
            <h1 className="heading-text">Discover new<br />destination.</h1>
            <p className="primary-text">to get the best of your adventure you just<br />need to leave and go where you
              like.
              We are<br />waiting for you.</p>
            <div className="icon-location">
            <img src={locationLogoHero} alt="" /><span>Bali, <span className="banner-text-bold">Indonesia</span></span>
            </div>
          </div>
          <div className="banner-promotion">
            <p>Discount up to</p>
            <p className="discount">50<span>%</span></p>
          </div>
          <div className="booking-tab">
            <div className="booking-content">
              <div className="res-location">
                <span>Location</span>
                <div className="location-input">
                  <img src={locationLogo} alt="booking-location" />
                  <form action="#" method="POST">
                    <div className="input-province">
                      <select name="provinsi" id="provinsi" value={selectedProvince} onChange={handleProvinceChange}>
                        <option>Pilih</option>
                        {provinces.map(province => (
                          <option key={province.id} value={province.name} data-reg={province.id}>
                            {province.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </form>
                </div>
              </div>
              <div className="vl"></div>
              <div className="date">
                <span>Date</span>
                <div className="date-input">
                  <img src={calender} alt="booking-date" />
                  <form>
                    <input
                      ref={datePickerRef}
                      className="form-control"
                      type="text"
                      placeholder="Select date"
                    />
                  </form>
                </div>
              </div>
              <div className="vl"></div>
              <div className="guest-room last-child">
                <span>Guest & Room</span>
                <div className="guest-room-input">
                  <img src={guestRoomIcon} alt="booking-guest-room" />
                  <form className="form-input-guest">
                    <input
                      className="input-guest"
                      type="text"
                      placeholder={`${guestCountDewasa} dewasa ${guestCountBalita} balita`}
                      onClick={toggleModalGuest}
                      id="num-guest"
                      readOnly
                    />
                  </form>
                  <div className={`modal ${isModalHidden ? 'hidden' : ''}`}>
                    <button className="close-modal" onClick={toggleModal}>&times;</button>
                    <div className="guest">
                      <div className="guest-type">
                        <p className="guest-input">Dewasa</p>
                        <div className="capacity">
                          <button className="minus" onClick={() => handleMinusClick('dewasa')}>-</button>
                          <span className="num">{guestCountDewasa}</span>
                          <button className="plus" onClick={() => handlePlusClick('dewasa')}>+</button>
                        </div>
                      </div>
                      <div className="guest-type">
                        <p className="guest-input">Balita</p>
                        <div className="capacity">
                          <button className="minus" onClick={() => handleMinusClick('balita')}>-</button>
                          <span className="num">{guestCountBalita}</span>
                          <button className="plus" onClick={() => handlePlusClick('balita')}>+</button>
                        </div>
                      </div>
                      <button className="done-button" onClick={toggleModal}>Selesai</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="start-button" onClick={toggleContainerFrame}>
              <a className="a-button" id="button-text">{isFrameOpen ? 'Close' : 'Search'}</a>
            </button>
          </div>
        </div>
        <div className="overlay hidden"></div>
      </section>
      {isFrameOpen && <FrameOpen />}
    </>
  );
}

export default Hero;
