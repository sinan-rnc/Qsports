import { Fragment } from "react";
import Header from "./Components/Common/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./Components/Common/Footer/Footer";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App() {
    return (
        <Fragment>
            <Header />
            <Routes>
                <Route path="/" element={<Home/>} />
                {/* <Route path="/about-us" element={<AboutUs />} /> */}
            </Routes>
            <Footer/>
        </Fragment>
    )
}