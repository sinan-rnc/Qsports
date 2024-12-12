import { Fragment } from "react";
import Header from "./Components/Common/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./Components/Common/Footer/Footer";

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