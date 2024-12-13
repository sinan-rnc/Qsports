import { Fragment } from "react";
import Header from "./Components/Common/Header/Header";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Footer from "./Components/Common/Footer/Footer";
import AboutUsPage from "./Pages/AboutUsPage";
import BarAndClubPage from "./Pages/BarAndClubPage";
import TournamentPage from "./Pages/TournamentPage";

export default function App() {
    return (
        <Fragment>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/about-us" element={<AboutUsPage/>} />
                <Route path="/bars-and-clubs" element={<BarAndClubPage/>} />
                <Route path="/tournaments" element={<TournamentPage/>} />
            </Routes>
            <Footer/>
        </Fragment>
    )
}