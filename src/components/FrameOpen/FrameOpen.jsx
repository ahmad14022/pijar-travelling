import React from 'react';
import Hotel1 from '../../assets/images/Hotel 1.png';
import Hotel2 from '../../assets/images/Hotel 2.png';
import Hotel3 from '../../assets/images/Hotel 3.png';
import Hotel4 from '../../assets/images/Hotel 4.png';
import MapPin from '../../assets/images/map-pin.png';
import RatingStar from '../../assets/images/rating-star.png';
import RecommendationIcon from '../../assets/images/recommended-icon.png';
import './FrameOpen.css';

const FrameOpen = () => {
    return (
        <section className="container-frame visible" id="containerFrame">
            <div className="frame-open">
                <div className="filter">
                    <span className="title-frame">Filter</span>
                    <ul className="filter-ul">
                        <li><a href="#" className="filter-link">Price</a></li>
                        <li><a href="#" className="filter-link">Area</a></li>
                        <li><a href="#" className="filter-link">Hotel Star</a></li>
                        <li><a href="#" className="filter-link">Most Searched</a></li>
                        <li><a href="#" className="filter-link">Short by</a></li>
                        <li><a href="#" className="filter-link">Map</a></li>
                    </ul>
                </div>
                <div className="recommendation">
                    <span className="title-frame">Recommendation</span>
                    <div className="content">
                        <img src={Hotel1} alt="Hotel Sentra Cawang" />
                        <div className="space-around-container gap">
                            <div className="content-recommendation">
                                <span className="hotel-name">Hotel Sentral Cawang Jakarta</span>
                                <div className="recommendation-text">
                                    <img src={MapPin} alt="Location" />
                                    <span className="location-text">Kramat Jati, Jakarta Timur</span>
                                </div>
                                <div className="recommendation-text bottom">
                                    <img src={RatingStar} alt="Rating Hotel" />
                                    <span className="rating-text">4.5</span>
                                </div>
                                <div className="recommendation-desc">
                                    <span>
                                        With Turtle Beach reachable in 300 metres,<br />
                                        Ocean Villas at Turtle Bay offers<br />
                                        accommodation, a restaurant...
                                    </span>
                                </div>
                            </div>
                            <div className="content-recommendation flex-end">
                                <img src={RecommendationIcon} height="38px" width="38px" alt="Like Icon" />
                                <span className="recommended-text">Rest of the room</span>
                                <span>5</span>
                                <span className="before-discount">IDR 390.000</span>
                                <span className="after-discount">IDR 350.000</span>
                                <span className="quota">per night</span>
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        <img src={Hotel2} alt="Artotel Suites" />
                        <div className="space-around-container gap">
                            <div className="content-recommendation">
                                <span className="hotel-name">Artotel Suites Mangkuluhur</span>
                                <div className="recommendation-text">
                                    <img src={MapPin} alt="Location" />
                                    <span className="location-text">Setia Budi, Jakarta</span>
                                </div>
                                <div className="recommendation-text bottom">
                                    <img src={RatingStar} alt="Rating Hotel" />
                                    <span className="rating-text">5</span>
                                </div>
                                <div className="recommendation-desc">
                                    <span>
                                        With Turtle Beach reachable in 300 metres,<br />
                                        Ocean Villas at Turtle Bay offers<br />
                                        accommodation, a restaurant...
                                    </span>
                                </div>
                            </div>
                            <div className="content-recommendation flex-end">
                                <img src={RecommendationIcon} height="38px" width="38px" alt="Like Icon" />
                                <span className="recommended-text">Rest of the room</span>
                                <span>5</span>
                                <span className="before-discount">IDR 980.000</span>
                                <span className="after-discount">IDR 950.000</span>
                                <span className="quota">per night</span>
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        <img src={Hotel4} alt="ASTON Kartika Hotel" />
                        <div className="space-around-container gap">
                            <div className="content-recommendation">
                                <span className="hotel-name">ASTON Kartika Hotel</span>
                                <div className="recommendation-text">
                                    <img src={MapPin} alt="Location" />
                                    <span className="location-text">Grogol, Jakarta Barat</span>
                                </div>
                                <div className="recommendation-text bottom">
                                    <img src={RatingStar} alt="Rating Hotel" />
                                    <span className="rating-text">5</span>
                                </div>
                                <div className="recommendation-desc">
                                    <span>
                                        With Turtle Beach reachable in 300 metres,<br />
                                        Ocean Villas at Turtle Bay offers<br />
                                        accommodation, a restaurant...
                                    </span>
                                </div>
                            </div>
                            <div className="content-recommendation flex-end">
                                <img src={RecommendationIcon} height="38px" width="38px" alt="Like Icon" />
                                <span className="recommended-text">Rest of the room</span>
                                <span>5</span>
                                <span className="before-discount">IDR 860.000</span>
                                <span className="after-discount">IDR 800.000</span>
                                <span className="quota">per night</span>
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        <img src={Hotel3} alt="Yuan Garden" />
                        <div className="space-around-container gap">
                            <div className="content-recommendation">
                                <span className="hotel-name">Yuan Garden Pasar Baru</span>
                                <div className="recommendation-text">
                                    <img src={MapPin} alt="Location" />
                                    <span className="location-text">Sawah Besar, Jakarta Pusat</span>
                                </div>
                                <div className="recommendation-text bottom">
                                    <img src={RatingStar} alt="Rating Hotel" />
                                    <span className="rating-text">4.5</span>
                                </div>
                                <div className="recommendation-desc">
                                    <span>
                                        With Turtle Beach reachable in 300 metres,<br />
                                        Ocean Villas at Turtle Bay offers<br />
                                        accommodation, a restaurant...
                                    </span>
                                </div>
                            </div>
                            <div className="content-recommendation flex-end">
                                <img src={RecommendationIcon} height="38px" width="38px" alt="Like Icon" />
                                <span className="recommended-text">Rest of the room</span>
                                <span>5</span>
                                <span className="before-discount">IDR 390.000</span>
                                <span className="after-discount">IDR 350.000</span>
                                <span className="quota">per night</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FrameOpen;