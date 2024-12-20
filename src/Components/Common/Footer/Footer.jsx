import logo from "../../../Assets/Logo/logo1.png"

import facebook from "../../../Assets/Social-Links/facebook.svg"
import instagram from "../../../Assets/Social-Links/instagram.svg"
import youtube from "../../../Assets/Social-Links/youtube.svg"
import twitter from "../../../Assets/Social-Links/twitter.svg"
import linkedin from "../../../Assets/Social-Links/linkedin.svg"

import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

import "./Footer.scss"
import { RiInstagramFill } from "react-icons/ri"

export default function Footer() {
    return (
        <footer>
            <div className="footer_row container">
                {/* <div className="footer_col">
                    <div className="logo_div">
                        <img className="logo" src={logo} alt=""/>
                        <p>Your Ultimate Destination for Pool, Billiards, and Indoor Game Excellence!</p>
                        <div className="social_links">
                            <FaFacebook />
                            <RiInstagramFill />
                            <FaYoutube />
                            <FaTwitter />
                            <FaLinkedin />
                        </div>
                    </div>
                </div> */}
                <div className="footer_col">
                    <h1>Contact Us</h1>
                    <div className="contact_content">
                        <p>At QSports, we are always open for cooperation and suggestions, contact us in one of the ways below:</p>
                        <div className="contact_details">
                            <div className="details">
                                <h2>Phone Number</h2>
                                <p>+1 (800) 060-07-30</p>
                            </div>
                            <div className="details">
                                <h2>Email Address</h2>
                                <p>qsports@gmail.com</p>
                            </div>
                            <div className="details">
                                <h2>Our Location</h2>
                                <p>715 Fake Street, New York 10021 USA</p>
                            </div>
                            <div className="details">
                                <h2>Working Hours</h2>
                                <p>Mon-Sat 10:00pm - 7:00pm</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer_col">
                    <h1>Information</h1>
                    <ul>
                        <li>About Us</li>
                        <li>Delivery Information</li>
                        <li>Privacy Policy</li>
                        <li>Brands</li>
                        <li>Contact Us</li>
                        <li>Returns</li>
                        <li>Site Map</li>
                    </ul>
                </div>
                <div className="footer_col">
                    <h1>My Account</h1>
                    <ul>
                        <li>Store Location</li>
                        <li>Order History</li>
                        <li>Wish List</li>
                        <li>Newsletter</li>
                        <li>Special Offers</li>
                        <li>Gift Certificates</li>
                        <li>Affiliate</li>
                    </ul>
                </div>
                <div className="footer_col">
                    <h1>Newsletter</h1>
                    <div className="newsletter_details">
                        <p>Enter your email address below to subscribe to our newsletter and keep up to date with discounts and special offers.</p>
                        <p className="social_head">Follow us On :</p>
                        <div className="social_links">
                            <FaFacebook />
                            <RiInstagramFill />
                            <FaYoutube />
                            <FaTwitter />
                            <FaLinkedin />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

// {/* <a href="/" alt=""><img className='social' src={facebook} alt=""/></a>
// <a href="/" alt=""><img className='social' src={instagram} alt=""/></a>
// <a href="/" alt=""><img className='social' src={youtube} alt=""/></a>
// <a href="/" alt=""><img className='social' src={twitter} alt=""/></a>
// <a href="/" alt=""><img className='social' src={linkedin} alt=""/></a> */}