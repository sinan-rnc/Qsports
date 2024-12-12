import Hero from "../Components/Home/Hero/Hero";
import BarsClubs from "../Components/Common/BarsClubs/BarsClubs";
import Tournaments from "../Components/Common/Tournaments/Tournaments";
import RecentBarsClubs from "../Components/Common/RecentBarsClubs/RecentBarsClubs";
import About from "../Components/Home/About/About";
import Stats from "../Components/Common/Stats/Stats";
import Helmet from "../Components/Common/Helmet/Helmet";

export default function Home() {
    return (
        <section>
            <Helmet title="Home">
                <Hero/>
                <Stats/>
                <About/>
                <BarsClubs/>
                <Tournaments/>
                <RecentBarsClubs/>
            </Helmet>
        </section>
    )
}