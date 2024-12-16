import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import stick from "../../../Assets/Common/Billiard-Stick.png"

import "./TournamentEvents.scss"
import { MdOutlineZoomOutMap } from 'react-icons/md';
import { tournaments } from '../../../DataSet/tournaments';

export default function TournamentEvents() {
    return (
        <section className="tournamentevents">
        <div className="tournamentevents-section container">
            <div className="tournamentevents-header">
                <div className='header-top'>
                    <h2>Tournament Events</h2>
                    <div className="arrow-div">
                        <h4 className="active">Upcoming Events</h4>
                        <h4>Ongoing Events</h4>
                        <h4>Show All</h4>
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
                className="tournamentevents-grid"
            >
                {tournaments.map((ele, index) => (
                    <SwiperSlide key={index}>
                        <div className="tournamentevents-card">
                            <div className="tournamentevents-image">
                                <MdOutlineZoomOutMap />
                                <img src={ele.image} alt="" />
                            </div>
                            <div className="tournamentevents-details">
                                <div className="top">
                                    <div className="left">
                                        <h3>{ele.name}</h3>
                                        <p>{ele.type}</p>
                                        <p>At {ele.clubName}</p>
                                    </div>
                                    <div className="right">
                                        <p className="price">AED {ele.fees}</p>
                                        <p className="dateNTime">{ele.date} at {ele.time}</p>
                                    </div>
                                </div>
                                <div className="bottom">
                                    <button>Register Now</button>
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