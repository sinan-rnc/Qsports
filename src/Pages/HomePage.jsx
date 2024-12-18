import HomeHero from "../Components/Home/HomeHero/HomeHero";
import BarsClubs from "../Components/Common/BarsClubs/BarsClubs";
import TopTournaments from "../Components/Common/TopTournaments/TopTournaments";
import RecentBarsClubs from "../Components/Common/RecentBarsClubs/RecentBarsClubs";
import About from "../Components/Home/About/About";
import Stats from "../Components/Common/Stats/Stats";
import Helmet from "../Components/Common/Helmet/Helmet";
import { Fragment } from "react";
import TournamentEvents from "../Components/Common/TournamentEvents/TournamentEvents";
import TournamentEvents1 from "../Components/Common/TournamentEvents1/TournamentEvents1";
import Highlights from "../Components/Common/Highlights/Highlights";

export default function HomePage() {
    return (
        <Fragment>
            <Helmet title="Home">
                <HomeHero/>
                <Stats/>
                <About/>
                <TournamentEvents1/>
                {/* <TopTournaments/> */}
                <RecentBarsClubs/>
                <TournamentEvents/>
                <Highlights/>
                {/* <BarsClubs/> */}
            </Helmet>
        </Fragment>
    )
}