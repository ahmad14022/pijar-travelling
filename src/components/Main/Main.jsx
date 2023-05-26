import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.min.css';
import MembershipCard from '../../assets/images/membership-card.png';
import Hawai from '../../assets/images/hawaii.png';
import Mercure from '../../assets/images/bali.png';
import Egypt from '../../assets/images/egypt.png';
import PesoneAlam from '../../assets/images/pesona-alam.png';
import RizCartlon from '../../assets/images/riz-cartlon.png';
import Singhasari from '../../assets/images/singhasari-resort.png';
import Partnership from '../../assets/images/partnership.png';
import Click from '../../assets/images/one-click.png';
import Location from '../../assets/images/location.png';
import Ecard from '../../assets/images/e-card.png';
import MapPin from '../../assets/images/map-pin.png';
import RatingStar from '../../assets/images/rating-star.png';
import './Main.css';

const Main = () => {
    useEffect(() => {
        var swiper = new Swiper(".slide-content", {
            slidesPerView: 3,
            spaceBetween: 25,
            loop: true,
            centerSlide: true,
            fade: true,
            grabCursor: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
                dynamicBullets: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                520: {
                    slidesPerView: 2,
                },
                950: {
                    slidesPerView: 3,
                },
            },
        });

        return () => {
            swiper.destroy(); // Membersihkan Swiper saat komponen di-unmount
        };
    }, []);

    return (
        <main>
            <section className="container flex">
                <div className="container-heading">
                    <h2 className="container-text">Come On</h2>
                </div>
                <div className="container-desc">
                    <p className="container-desc">Look for your destination right now, because out there is very wide and the
                        place outside is very suitable for the state of your heart right now, what are you waiting for, book
                        your hotel now at Pijar Travel.</p>
                </div>
            </section>

            <section className="container flex">
                <div className="container-heading">
                    <h2 className="container-text">Membership</h2>
                </div>
                <img className="card-membership" src={MembershipCard} alt="membership of pijar travelling" />
                <div className="container-desc">
                    <p className="container-desc">For the benefits of being a member you can get a fairly large discount, you
                        also get exclusive services with a guide and are given directions for destinations according to your
                        circumstances, not only that you will get free airplane tickets per month if your e-card member has
                        reached the minimum silver level</p>
                </div>
            </section>

            <section className="container-fav">
                <div className="container-heading">
                    <h2 className="container-text-fav">Favorite</h2>
                </div>
                <div className="slide-container swiper">
                    <div className="slide-content">
                        <div className="card-wrapper swiper-wrapper">
                            <div className="card swiper-slide">
                                <div className="image-content">
                                    <div className="card-image">
                                        <img src={Hawai} alt="Hawai" className="card-img" />
                                    </div>
                                </div>
                                <div className="card-content">
                                    <h2 className="name">Ocean Villas at Turtle Bay</h2>
                                    <div className="fav-location">
                                        <img src={MapPin} alt="Location" /><span>Kahuku,
                                            <span className="txt-bold"> Hawaii</span></span>
                                        <div className="fav-rate">
                                            <img src={RatingStar} alt="Rating Star" /><span>4.8</span>
                                        </div>
                                    </div>
                                    <p className="description">With Turtle Beach reachable in 300 metres, Ocean Villas at Turtle Bay offers accommodation, a restaurant...</p>
                                    <div className="fav-price">
                                        <span className="price">IDR 2.100.000</span>
                                        <span className="quota">per room per night</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card swiper-slide">
                                <div className="image-content">
                                    <div className="card-image">
                                        <img src={Mercure} alt="Mercure" className="card-img" />
                                    </div>
                                </div>
                                <div className="card-content">
                                    <h2 className="name">Mercure</h2>
                                    <div className="fav-location">
                                        <img src={MapPin} alt="Location" /><span>Bali,
                                            <span className="txt-bold"> Indonesia</span></span>
                                        <div className="fav-rate">
                                            <img src={RatingStar} alt="Rating Star" /><span>4.9</span>
                                        </div>
                                    </div>
                                    <p className="description">Located in the middle of Bali's Kuta Beach, Bali's most famous beach, most popular tourist spot, and...</p>
                                    <div className="fav-price">
                                        <span className="price">IDR 500.000</span>
                                        <span className="quota">per room per night</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card swiper-slide">
                                <div className="image-content">
                                    <div className="card-image">
                                        <img src={Egypt} alt="Egypt" className="card-img" />
                                    </div>
                                </div>
                                <div className="card-content">
                                    <h2 className="name">Pavilion Winter</h2>
                                    <div className="fav-location">
                                        <img src={MapPin} alt="Location" /><span>Luxor,
                                            <span className="txt-bold"> Egypt</span></span>
                                        <div className="fav-rate">
                                            <img src={RatingStar} alt="Rating Star" /><span>4.5</span>
                                        </div>
                                    </div>
                                    <p className="description">Pavillon Winter Luxor offers 3 restaurants, 2 bars, and warm hospitality in the heart of Luxor city...</p>
                                    <div className="fav-price">
                                        <span className="price">IDR 2.200.000</span>
                                        <span className="quota">per room per night</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card swiper-slide">
                                <div className="image-content">
                                    <div className="card-image">
                                        <img src={PesoneAlam} alt="pesona-alam-bogor" className="card-img" />
                                    </div>
                                </div>
                                <div className="card-content">
                                    <h2 className="name">Pesona Alam Resort & Spa</h2>
                                    <div className="fav-location">
                                        <img src={MapPin} alt="Location" /><span>Kab. Bogor,
                                            <span className="txt-bold">Indonesia</span></span>
                                        <div className="fav-rate">
                                            <img src={RatingStar} alt="Rating Star" /><span>4.6</span>
                                        </div>
                                    </div>
                                    <p className="description">THE HIDDEN GEM IN PUNCAK. Settled on top of a hill in Cisarua, Pesona Alam is a Resort dedicated to...</p>
                                    <div className="fav-price">
                                        <div className="price">
                                            <span className="price">IDR 828.000</span>
                                        </div>
                                        <div className="quota-fav">
                                            <span className="quota">per room per night</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card swiper-slide">
                                <div className="image-content">
                                    <div className="card-image">
                                        <img src={RizCartlon} alt="Ritz Cartlon" className="card-img" />
                                    </div>
                                </div>
                                <div className="card-content">
                                    <h2 className="name">Ritz Cartlon</h2>
                                    <div className="fav-location">
                                        <img src={MapPin} alt="Location" /><span>Bali,
                                            <span className="txt-bold">Indonesia</span></span>
                                        <div className="fav-rate">
                                            <img src={RatingStar} alt="Rating Star" /><span>4.9</span>
                                        </div>
                                    </div>
                                    <p className="description">Escape to The Ritz-Carlton, Bali, a five-star resort hotel in Nusa Dua with luxury beachfront villas, a spa, ocean-view...</p>
                                    <div className="fav-price">
                                        <span className="price">IDR 6.620.000</span>
                                        <span className="quota">per room per night</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card swiper-slide">
                                <div className="image-content">
                                    <div className="card-image">
                                        <img src={Singhasari} alt="Singhasari Resort" className="card-img" />
                                    </div>
                                </div>
                                <div className="card-content">
                                    <h2 className="name">Singhasari Resort</h2>
                                    <div className="fav-location">
                                        <img src={MapPin} alt="Location" /><span>Kota Batu,
                                            <span className="txt-bold">Indonesia</span></span>
                                        <div className="fav-rate">
                                            <img src={RatingStar} alt="Rating Star" /><span>4.7</span>
                                        </div>
                                    </div>
                                    <p className="description">SINGHASARI RESORT, a fine resort located in Malang, Jawa Timur, is a perfect blend of Indonesian culture...</p>
                                    <div className="fav-price">
                                        <span className="price">IDR 1.250.000</span>
                                        <span className="quota">per room per night</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container flex">
                <div className="container-heading">
                    <h2 className="container-text">Partnership</h2>
                </div>
                <img src={Partnership} alt="Partner Pijar" />
                <div className="container-desc">
                    <p className="container-desc">
                        We have collaborated with several well-known hotels and destinations that will
                        provide the best service for you, especially Hotel.com users. We will also expand our partnerships
                        with hotels and other destinations around the world, for the best possible service for Pijar Travel users
                    </p>
                </div>
            </section>

            <section className="container">
                <div className="container-heading">
                    <h2 className="container-text">Why Pijar Travel</h2>
                </div>
                <div className="grid grid--3--cols--row">
                    <div className="qna grid">
                        <img className="qna-img" src={Click} alt="just one click" />
                    </div>
                    <div className="qna-desc first-qna">
                        <p className="container-desc">Hotel reservations are very easy and fast, hassle-free, your hotel reservations are saved with one click.</p>
                    </div>
                    <div className="qna-desc second-qna">
                        <p className="container-desc">Many hotel choices around the world, almost 85% cooperate with hotels and villas around the world, you don't need to be afraid to travel and have a vacation.</p>
                    </div>
                    <div className="qna grid">
                        <img className="qna-img" src={Location} alt="easy to find hotel" />
                    </div>
                    <div className="qna grid">
                        <img className="qna-img" src={Ecard} alt="easy to pay" />
                    </div>
                    <div className="qna-desc third-qna">
                        <p className="container-desc">By using a subscription e-card, you can get discounts up to 90% * and earn Pijar Travel points which can be exchanged for other promos.</p>
                    </div>
                </div>

            </section>
        </main >
    );
};

export default Main;