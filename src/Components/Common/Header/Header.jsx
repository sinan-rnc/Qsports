import "./Header.scss"
import logo from "../../../Assets/Logo/logo.gif"
import english from "../../../Assets/Common/english.png"
import { RiSearch2Fill } from "react-icons/ri";
import { LuUserRound } from "react-icons/lu";
import { SiAmazongames } from "react-icons/si";
import { FaSearch } from "react-icons/fa";
import { GiPoolTriangle } from "react-icons/gi";

export default function Header() {
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
                        <a href="/"><li>
                            Home
                        </li></a>
                        <a href="/about-us"><li>
                            About Us
                        </li></a>
                        <li>
                            Tournaments
                        </li>
                        <li>
                            Bars & Clubs
                        </li>
                    </ul>
                    <div className="logo">
                        <h1><span>Q</span>SPORTS</h1>
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