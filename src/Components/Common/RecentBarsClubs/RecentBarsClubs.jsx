import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import stick from "../../../Assets/Common/Billiard-Stick.png"

import { barsAndClubs } from "../../../DataSet/barsAndClubs"

import "./RecentBarsClubs.scss"
import { MdOutlineZoomOutMap } from 'react-icons/md';

export default function RecentBarsClubs() {
    return (
        <section className="recentBarsClubs">
            <div className="recentBarsClubs-section container">
                <div className="recentBarsClubs-header">
                    <div className='header-top'>
                        <h2>Recent Bars and Clubs</h2>
                        <div className="arrow-div">
                            {/* <h4 className="active">Upcoming Events</h4>
                            <h4>Ongoing Events</h4> */}
                            <a href="/bars-and-clubs"><h4>Show All</h4></a>
                            <button className="arrow1 prev-arrow1"><span>❮</span></button>
                            <button className="arrow1 next-arrow1"><span>❯</span></button>
                        </div>
                    </div>
                    <img src={stick} alt="" className="stick"/>
                    {/* <hr/> */}
                </div>
                <Swiper
                    modules={[ Navigation, Pagination]}
                    navigation={{
                        nextEl: '.next-arrow1',
                        prevEl: '.prev-arrow1',
                    }}
                    pagination={false}
                    spaceBetween={20}
                    slidesPerView={3}
                    loop={true}
                    speed={1000}
                    effect={'coverflow'}
                    grabCursor={true}
                    // centeredSlides={true}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 50,
                        modifier: 1,
                        slideShadows: false, 
                      }}
                    className="recentBarsClubs-grid"
                >
                    {barsAndClubs.map((ele, index) => (
                        <SwiperSlide key={index}>
                            <div className="recentBarsClubs-card">
                                <div className="recentBarsClubs-image">
                                    <MdOutlineZoomOutMap />
                                    <img src={ele.image} alt="" />
                                </div>
                                <div className="recentBarsClubs-details">
                                <div className="left">
                                    <h3>{ele.name}</h3>
                                    <p>{ele.city}</p>
                                    <div classNameName="rating">
                                        <span classNameName="star">&#9733;</span>
                                        <span classNameName="star">&#9733;</span>
                                        <span classNameName="star">&#9733;</span>
                                        <span classNameName="star">&#9733;</span>
                                        <span classNameName="star">&#9733;</span>
                                    </div>
                                </div>
                                <div className="right">
                                    <p className="price">AED {ele.amount}</p>
                                    <button>Book Now</button>
                                    {/* <ImEnlarge /> */}
                                </div>
                            </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}