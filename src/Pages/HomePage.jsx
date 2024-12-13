import HomeHero from "../Components/Home/HomeHero/HomeHero";
import BarsClubs from "../Components/Common/BarsClubs/BarsClubs";
import TopTournaments from "../Components/Common/TopTournaments/TopTournaments";
import RecentBarsClubs from "../Components/Common/RecentBarsClubs/RecentBarsClubs";
import About from "../Components/Home/About/About";
import Stats from "../Components/Common/Stats/Stats";
import Helmet from "../Components/Common/Helmet/Helmet";
import { Fragment } from "react";

export default function HomePage() {
    return (
        <Fragment>
            <Helmet title="Home">
                <HomeHero/>
                <Stats/>
                <About/>
                <BarsClubs/>
                <TopTournaments/>
                <RecentBarsClubs/>
            </Helmet>
        </Fragment>
    )
}