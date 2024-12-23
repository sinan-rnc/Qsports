import Dashboard from "../Dashboard/Dashboard"
import Password from "../Password/Password"
import UserProfile from "../UserProfile/UserProfile"
import TournamentDashboard from "../TournamentDashboard/TournamentDashboard"
import "./DashboardHome.scss"
import ClubBarProfile from "../ClubBarProfile/ClubBarProfile"
import { useEffect, useState } from "react"
import { useAuth } from "../../../Context/AuthContext"
import { useNavigate } from "react-router-dom"

export default function DashboardHome({myTournamentButton}) {
    const navigate = useNavigate()
    const {handleLogout} = useAuth()
    const [selectedDashboard, setSelectedDashboard] = useState("dashboard")
    const dashboardMenu = [
        { key: "dashboard", label: "Dashboard", component: <Dashboard setSelectedDashboard={setSelectedDashboard}/> },
        { key: "userProfile", label: "Edit Profile", component: <UserProfile /> },
        { key: "clubBarProfile", label: "Edit Profile", component: <ClubBarProfile /> },
        { key: "password", label: "Password", component: <Password /> },
        { key: "myTournaments", label: "My Tournaments", component: <TournamentDashboard /> },
    ];

    // console.log(myTournamentButton)

    useEffect(() => {
        if(myTournamentButton === "myTournaments") {
            setSelectedDashboard(myTournamentButton)
            console.log(myTournamentButton)
        } else {
            setSelectedDashboard("dashboard")
        }
    }, [])

    return (
        <section>
            <div className="dashboardhome-container container-section">
                <div className="navigation-section">
                    <div className="heading">
                        <h1 className='main-heading'>Navigation</h1>
                        <hr className="hr-1"/><hr className="hr-2"/>
                        {/* <h3 className="second-heading">Welcome User</h3> */}
                    </div>
                    <hr className="dashboard-hr"/>
                    <ul className="menubar-ul">
                        <li className={`menubar-li ${selectedDashboard == "dashboard" ? "active" : ""}`} onClick={() => {setSelectedDashboard("dashboard")}}>Dashboard</li>
                        <li className={`menubar-li ${selectedDashboard == "userProfile" || selectedDashboard == "clubBarProfile" ? "active" : ""}`}>Edit Profile</li>
                        <ul className="dropdown-ul">
                                <li className="dropdown-li" onClick={() => {setSelectedDashboard("userProfile")}}>User</li>
                                <li className="dropdown-li" onClick={() => {setSelectedDashboard("clubBarProfile")}}>Club</li>
                        </ul>
                        <li className={`menubar-li ${selectedDashboard == "password" ? "active" : ""}`} onClick={() => {setSelectedDashboard("password")}}>Password</li>
                        <li className={`menubar-li ${selectedDashboard == "myTournaments" ? "active" : ""}`} onClick={() => {setSelectedDashboard("myTournaments")}}>My Tournaments</li>
                    </ul>
                    <hr className="dashboard-hr"/>
                    <button className="logout-btn" onClick={() => {
                        handleLogout()
                        navigate("/")
                    }}>Log Out</button>
                </div>

                <div className="dashboardhome-section">
                    {dashboardMenu.find((item) => item.key === selectedDashboard)?.component}
                </div>
            </div>
        </section>
    )
}