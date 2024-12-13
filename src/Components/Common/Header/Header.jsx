import "./Header.scss"
import logo from "../../../Assets/Logo/logo.gif"
import english from "../../../Assets/Common/english.png"
import { RiSearch2Fill } from "react-icons/ri";
import { LuUserRound } from "react-icons/lu";
import { SiAmazongames } from "react-icons/si";
import { FaSearch } from "react-icons/fa";
import { GiPoolTriangle } from "react-icons/gi";
import { useLocation } from "react-router-dom";

export default function Header() {

    const location = useLocation()
    return (
        <nav>
            <div className="navbar">
                <div className="navbar_top">
                    <div className="left_ul">
                        Call Us : 971 012345678
                    </div>
                    <div className="text_slogan">
                        <h1>Your Ultimate Destination for Indoor Games!</h1>
                    </div>
                    <div className="right_ul">
                        Language 
                        <img src={english} alt=""/>
                    </div>
                </div>
                <div className="navbar_middle">
                    <ul className="menubar">
                        <a href="/" className={location.pathname==="/" ? "active" : ""}><li>
                            Home
                        </li></a>
                        <a href="/about-us" className={location.pathname==="/about-us" ? "active" : ""}><li>
                            About Us
                        </li></a>
                        <a href="/bars-and-clubs" className={location.pathname==="/bars-and-clubs" ? "active" : ""}><li>
                            Bars & Clubs
                        </li></a>
                        <a href="/tournaments" className={location.pathname==="/tournaments" ? "active" : ""}><li>
                            Tournaments
                        </li></a>
                    </ul>
                    <div className="logo">
                        <a href="/"><h1><span>Q</span>SPORTS</h1></a>
                        {/* <img src={logo} alt="logo"/> */}
                    </div>
                    <ul className="acc_details">
                        <li>
                            <SiAmazongames size={"30px"}/>
                            My Tournaments
                        </li>
                        <li className="login_div">
                            <LuUserRound/>
                            <div className="login">
                                <span>Hello, Log In</span>
                                My Profile
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="navbar_bottom">
                    <div className="serach_game">
                        {/* <i class="ri-search-fill"/> */}
                        <div className="icon-div">
                        <div className="icon-left">
                            <GiPoolTriangle size={20}/>
                            </div>
                            <hr className="hr-left"/>
                        </div>
                        <input type="text" placeholder="Search For Clubs"/>
                        <div className="icon-div">
                            <hr className="hr-right"/>
                            <div className="icon-right">
                                <FaSearch size={20}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}