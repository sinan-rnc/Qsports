import "./Tournaments.scss"
import { CiGrid41, CiGrid2H, CiGrid2V } from "react-icons/ci";
import { RiExpandUpDownFill } from "react-icons/ri";
import { ImEnlarge } from "react-icons/im";
import { FaCaretDown } from "react-icons/fa";

import stick from "../../../Assets/Common/Billiard-Stick.png"
import { MdOutlineZoomOutMap } from "react-icons/md";
import { useState } from "react";
import { tournaments } from "../../../DataSet/tournaments";

export default function BarsClubs() {
    // function toggleFilter(id) {
    //     const content = document.getElementById(id);
    //     const icon = content.previousElementSibling.querySelector('.icon');
        
    //     if (content.style.display === 'block') {
    //         content.style.display = 'none';
    //     } else {
    //         content.style.display = 'block';
    //         icon.style.transform = 'rotate(180deg)';
    //     }
    // }

    const [sortBy, setSortBy] = useState("")
    const [showNo, setShowNo] = useState(tournaments.length)
    const [categoryFilter, setCategoryFilter] = useState("")
    const [tournamentFilter, setTournamentFilter] = useState([])
    
    console.log(sortBy, showNo)

    const getProcessedBarsAndClubs = () => {
        const sortedArray = [...tournaments].sort((a, b) => {
            if (sortBy === "Name") {
                return a.name.localeCompare(b.name);
            } else if (sortBy === "City") {
                return a.city.localeCompare(b.city);
            } else if (sortBy === "Price") {
                return a.amount - b.amount;
            }
            return 0;
        });

        // Slice the array based on itemsToShow
        return sortedArray.slice(0, showNo);
    };
      
    return (
        <section className="tournament container">
            <div className="heading">
            <h1>Tournaments</h1>
                <img src={stick} alt="" className="stick"/>
                
            </div>
                {/* <!-- Product Grid --> */}
                <div className="tournament-grid">
                    {getProcessedBarsAndClubs().map((ele) => {
                        return (
                            <div className="tournament-card">
                                <div className="tournament-image">
                                    <img src={ele.image} alt="" />
                                </div>
                                <div className="tournament-details">
                                    <div className="top">
                                        <div className="left">
                                            <h3>{ele.name}</h3>
                                            <p>{ele.type}</p>
                                            <p>At {ele.clubName}</p>
                                        </div>
                                        <div className="right">
                                            <p className="price">AED {ele.fees}</p>
                                            <p>{ele.date}</p>
                                            <p>At {ele.time}</p>
                                        </div>
                                    </div>
                                    <div className="bottom">
                                        <button>Register Now</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
        </section>
    )
}