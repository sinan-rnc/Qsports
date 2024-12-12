import banner from "../../../Assets/Tournaments/1.jpg"

import "./About.scss"

export default function About() {
    return (
        <section>
            <div className="about-div container">
                <div className="left">
                    <h1><span>Q</span>SPORTS</h1>
                    <h2>Connecting Players, Fans, and Clubs for Ultimate Enjoyment</h2>
                    <p>At Qsports, we are passionate about connecting enthusiasts and professionals in the dynamic world of clubs and bars. 
                        Our platform is designed to bring together a community of players, fans, and club owners through comprehensive listings, 
                        seamless registration systems, and engaging tournaments hosted at top-tier clubs. <br/><br/>
                        Whether you’re looking for the perfect venue to unwind or seeking thrilling competitions, Qsports ensures you have access to the best options and opportunities. 
                        With a commitment to fostering engagement, fun, and camaraderie, Qsports is your go-to destination for elevating your club and bar experiences.</p>
                </div>
                <div className="right">
                    <img src={banner} alt=""/>
                </div>
            </div>
        </section>
    )
}