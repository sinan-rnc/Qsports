import "./Header.scss"

import { RiBilliardsFill, RiSearch2Fill } from "react-icons/ri";
import { LuUserRound } from "react-icons/lu";
import { SiAmazongames } from "react-icons/si";
import { FaSearch } from "react-icons/fa";
import { GiPoolTriangle } from "react-icons/gi";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../../Context/AuthContext";

import logo from "../../../Assets/Logo/logo.gif"
import english from "../../../Assets/Common/english.png"
import photo from "../../../Assets/Common/user.png"

export default function Header() {

    const {user, handleLogin, handleLogout} = useAuth()
    const defaultUsername = "qsports@gmail.com"
    const defaultPassword = "Qsports@123"
    const location = useLocation()
    const [openDashboard, setOpenDashboard] = useState(false)
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

    const handleOpenDashboard = () => {
        setOpenDashboard(!openDashboard)
    }

    // const handleCloseDashboard = () => {
    //     setOpenDashboard(false)
    // }
    // console.log(openDashboard)

    const handleSubmit = (e) => {
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
                handleOpenDashboard()
                localStorage.setItem("User", user)
                handleLogin(user)
                setFormErrors("")
                setServerErrors("")
                setForm({
                    username : "",
                    password : ""
                })
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
                        <li className="login_div" onClick={() => {handleOpenDashboard()}}>
                            <LuUserRound/>
                            <div className="login">
                                <span>Hello, Log In</span>
                                My Profile
                            </div>
                        </li>
                        {openDashboard && (
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
                                    <button onClick={() => {
                                        handleLogout()
                                        handleOpenDashboard()
                                        }}>Logout</button>
                                </div>
                            </div>
                        ) : (
                            <div className="login-dashboard">
                                <h1>Log In To Your Account</h1>
                                <form onSubmit={handleSubmit}>
                                    {serverErrors && <span className="from-errors">{serverErrors}</span>}
                                    <input type="email" placeholder="Email" value={form.username} onChange={(e) => {setForm({ ... form, username: e.target.value })}}/>
                                    {formErrors.username && <span className="from-errors">{formErrors.username}</span>}
                                    <input type="text" placeholder="Password" value={form.password} onChange={(e) => {setForm({ ... form, password: e.target.value })}}/>
                                    {formErrors.password && <span className="from-errors">{formErrors.password}</span>}
                                    <button>Log In</button>
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
                        <div className="icon-left">
                            <RiBilliardsFill size={25}/>
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