import "./Header.scss"

import { RiBilliardsFill, RiSearch2Fill } from "react-icons/ri";
import { LuUserRound } from "react-icons/lu";
import { SiAmazongames } from "react-icons/si";
import { FaSearch } from "react-icons/fa";
import { GiPoolTriangle } from "react-icons/gi";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../../Context/AuthContext";

import logo from "../../../Assets/Logo/logo.gif"
import english from "../../../Assets/Common/english.png"
import photo from "../../../Assets/Common/user.png"
import { ImSearch } from "react-icons/im";

export default function Header({searchOption, handleSearchOption}) {

    const navigate = useNavigate()

    const {user, handleLogin, handleLogout} = useAuth()
    const defaultUsername = "qsports@gmail.com"
    const defaultPassword = "Qsports@123"
    const location = useLocation()
    const [openUserDashboard, setOpenUserDashboard] = useState(false)
    const [openSearchDashboard, setOpenSearchDashboard] = useState(false)
    const [form, setForm] = useState({
        username : "",
        password : ""
    })
    const [formErrors, setFormErrors] = useState("")
    const [serverErrors, setServerErrors] = useState("")

    const errors = {}

    const validateErrors = () => {
        if(form.username.trim().length === 0){
            errors.username = "Username is Required"
        }
        if(form.password.trim().length === 0){
            errors.password = "Password is Required"
        }
    }
    validateErrors()

    // const handleChange = (e) => {
    //     const {name, value} = e.target
    //     setForm({...form, [name]: value })
    // }

    const handleOpenUserDashboard = () => {
        setOpenUserDashboard(!openUserDashboard)
    }

    const handleOpenSerachDashboard = () => {
        setOpenSearchDashboard(!openSearchDashboard)
    }

    // const handleCloseDashboard = () => {
    //     setOpenUserDashboard(false)
    // }
    // console.log(openUserDashboard)

    const handleFormSubmit = (e) => {
        e.preventDefault()

        const formData = {
            username : form.username,
            password : form.password
        }
        // console.log(formData)

        if(Object.keys(errors).length === 0) {
            if(formData.username === defaultUsername && formData.password === defaultPassword) {
                alert("Successfully Logged In")
                const user = formData
                handleOpenUserDashboard()
                localStorage.setItem("User", user)
                handleLogin(user)
                setFormErrors("")
                setServerErrors("")
                setForm({
                    username : "",
                    password : ""
                })
                navigate("/account")
            } else {
                alert("Invalid Username/Password")
                setServerErrors("Invalid Username/Password")
                setFormErrors("")
            }
        } else {
            setFormErrors(errors)
            setServerErrors("")
        }
    }

    const handleSearchSubmit = () => {
        if(searchOption === "Club" || searchOption === "Bar" || searchOption === "NearBy") {
            navigate("/bars-and-clubs")
        } else if(searchOption === "Tournament") {
            navigate("/tournaments")
        }
        handleOpenSerachDashboard()
    }

    return (
        <nav>
            <div className="navbar">
                <div className="navbar_top">
                    <div className="left_ul">
                        <ul>
                            <li>Call Us : 971 012345678</li>
                            <li className="contact-us">Contact Us</li>
                        </ul>
                    </div>
                    <div className="text_slogan">
                        <h1>Your Ultimate Destination for Indoor Games!</h1>
                    </div>
                    <div className="right_ul">
                        Language: <span>EN</span>
                        {/* <img src={english} alt=""/> */}
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
                        <a href="/account" className={location.pathname==="/account" ? "active" : ""}><li>
                            Account
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
                        <li className="login_div" onClick={() => {handleOpenUserDashboard()}}>
                            <LuUserRound/>
                            <div className="login">
                                {user ? <span>QSports</span> : <span>Hello, Log In</span>}
                                My Profile
                            </div>
                        </li>
                        {openUserDashboard && (
                            user ? 
                        (
                            <div className="user-dashboard">
                                <div className="top">
                                    <img src={photo} alt="user"/>
                                    <h1>Qsports<br/><span>{user.username}</span></h1>
                                </div><hr className="hr-dashboard"/>
                                <div className="details">
                                    <ul>
                                        <li>Dashborad</li>
                                        <li>Edit Profile</li>
                                        <li>Tournament History</li>
                                    </ul>
                                </div><hr className="hr-dashboard"/>
                                <div className="button-div">
                                    <button className="logout-btn" onClick={() => {
                                        handleLogout()
                                        handleOpenUserDashboard()
                                        }}>Logout</button>
                                </div>
                            </div>
                        ) : (
                            <div className="login-dashboard">
                                <h1>Log In To Your Account</h1>
                                <form onSubmit={handleFormSubmit}>
                                    {serverErrors && <span className="from-errors">{serverErrors}</span>}
                                    <input type="email" placeholder="Email" value={form.username} onChange={(e) => {setForm({ ...form, username: e.target.value })}}/>
                                    {formErrors.username && <span className="from-errors">{formErrors.username}</span>}
                                    <input type="text" placeholder="Password" value={form.password} onChange={(e) => {setForm({ ...form, password: e.target.value })}}/>
                                    {formErrors.password && <span className="from-errors">{formErrors.password}</span>}
                                    <button className="login-btn">Log In</button>
                                </form>
                                <p>Don't have an account? <a href="/register">Register</a></p>
                            </div>
                        )
                        )}
                    </ul>
                </div>
                <div className="navbar_bottom">
                    <div className="serach_game">
                        {/* <i class="ri-search-fill"/> */}
                        <div className="icon-div">
                            <div className="icon-left" onClick={handleOpenSerachDashboard}>
                                <RiBilliardsFill size={22}/>
                            </div>
                            <hr className="hr-left"/>
                        </div>
                        <input type="text" placeholder="Search For Clubs"/>
                        <div className="icon-div">
                            <hr className="hr-right"/>
                            <div className="icon-right" onClick={handleSearchSubmit}>
                                <ImSearch size={18}/>
                            </div>
                        </div>
                    </div>
                </div>
                {openSearchDashboard && (
                    <div className="search-dashboard">
                        <p>Select an option from below</p>
                        <div class="radio-container">
                            <label>
                                <input type="radio" name="Club" value="Club" checked={searchOption === "Club"} onChange={(e) => {handleSearchOption(e.target.value)}}/>
                                <span class="custom-radio"></span>
                                All Clubs
                            </label>
                            <label>
                                <input type="radio" name="Bar" value="Bar" checked={searchOption === "Bar"} onChange={(e) => {handleSearchOption(e.target.value)}}/>
                                <span class="custom-radio"></span>
                                All Bars
                            </label>
                            <label>
                                <input type="radio" name="NearBy"  value="NearBy" checked={searchOption === "NearBy"} onChange={(e) => {handleSearchOption(e.target.value)}}/>
                                <span class="custom-radio"></span>
                                Near By Clubs & Bars
                            </label>
                            <label>
                                <input type="radio" name="Tournament" value="Tournament" checked={searchOption === "Tournament"} onChange={(e) => {handleSearchOption(e.target.value)}}/>
                                <span class="custom-radio"></span>
                                All Tournament
                            </label>
                        </div>
                        <div className="search-button-div">
                            <button className="search-btn" onClick={() => {handleSearchOption("")}}>Reset</button>
                            <button className="search-btn" onClick={handleSearchSubmit}>Search</button>
                        </div>
                        
                    </div>
                )}
            </div>
        </nav>
    )
}