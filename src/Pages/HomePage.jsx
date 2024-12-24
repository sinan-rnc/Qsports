import HomeHero from "../Components/Home/HomeHero/HomeHero";
import BarsClubs from "../Components/Common/Bars/Bars";
// import TopTournaments from "../Components/Common/TopTournamentsNew/TopTournaments";
import RecentBars from "../Components/Common/RecentBars/RecentBars";
import RecentClubs from "../Components/Common/RecentClubs/RecentClubs";
import About from "../Components/Home/About/About";
import Stats from "../Components/Common/Stats/Stats";
import Helmet from "../Components/Common/Helmet/Helmet";
import { Fragment } from "react";
import TournamentEvents from "../Components/Common/TournamentEvents/TournamentEvents";
import TopTournaments from "../Components/Common/TopTournaments/TopTournaments";
import Highlights from "../Components/Common/Highlights/Highlights";

export default function HomePage() {
    return (
        <Fragment>
            <Helmet title="Home">
                <HomeHero/>
                <Stats/>
                <About/>
                <RecentBars/>
                <RecentClubs/>
                <TopTournaments/>
                {/* <TopTournaments/> */}
                <TournamentEvents/>
                <Highlights/>
                {/* <BarsClubs/> */}
            </Helmet>
        </Fragment>
    )
}