import { Fragment, useState } from "react";
import Header from "./Components/Common/Header/Header";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Footer from "./Components/Common/Footer/Footer";
import AboutUsPage from "./Pages/AboutUsPage";
import BarAndClubPage from "./Pages/BarAndClubPage";
import TournamentPage from "./Pages/TournamentPage";
import AccountPage from "./Pages/AccountPage";
import Login from "./Components/Account/Login/Login";
import Register from "./Components/Account/Register/Register";
import Dashboard from "./Components/Account/Dashboard/Dashboard";
import DashboardHome from "./Components/Account/DashboardHome/DashboardHome";

export default function App() {
    const [searchOption, setSearchOption] = useState("")
    
    const handleSearchOption = (option) => {
        setSearchOption(option)
    }

    const [myTournamentButton, setMyTournamentButton] = useState("")

    const handleMyTournamentClick = () => {
        setMyTournamentButton("myTournaments")
        console.log(myTournamentButton)
    }

    return (
        <Fragment>
            <Header searchOption={searchOption} handleSearchOption={handleSearchOption} myTournamentButton={myTournamentButton} handleMyTournamentClick={handleMyTournamentClick}/>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/about-us" element={<AboutUsPage/>} />
                <Route path="/bars-and-clubs" element={<BarAndClubPage searchOption={searchOption}/>} />
                <Route path="/tournaments" element={<TournamentPage/>} />
                <Route path="/account" element={<AccountPage myTournamentButton={myTournamentButton}/>} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />  
                {/* <Route path="/dashboard" element={<DashboardHome myTournamentButton={myTournamentButton}/>} /> */}
            </Routes>
            <Footer/>
        </Fragment>
    )
}