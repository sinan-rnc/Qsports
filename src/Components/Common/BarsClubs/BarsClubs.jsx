import "./BarsClubs.scss"
import { CiGrid41, CiGrid2H, CiGrid2V } from "react-icons/ci";
import { barsAndClubs1 } from "../../../DataSet/barsAndClubs"
import { RiExpandUpDownFill } from "react-icons/ri";
import { ImEnlarge } from "react-icons/im";
import { FaCaretDown } from "react-icons/fa";

import stick from "../../../Assets/Common/Billiard-Stick.png"
import { MdOutlineZoomOutMap } from "react-icons/md";
import { useState } from "react";

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
    const [showNo, setShowNo] = useState(barsAndClubs1.length)
    const [categoryFilter, setCategoryFilter] = useState("")
    const [tournamentFilter, setTournamentFilter] = useState([])
    
    console.log(sortBy, showNo)

    const getProcessedBarsAndClubs = () => {
        const sortedArray = [...barsAndClubs1].sort((a, b) => {
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
        <section className="barsclubs container">
            <div className="heading">
            <h1>Clubs and Bars</h1>
                <img src={stick} alt="" className="stick"/>
                
            </div>
            <div className="section">
                {/* <!-- Filters Sidebar --> */}
                <div className="filters">
                    <h3>Filters</h3>
                    {/* <hr/> */}
                    <div className="filter-category">
                        <div className="filter-header" >
                            <span>Categories</span>
                            <FaCaretDown />
                        </div>
                        <ul id="categories" className="filter-content">
                            <li><input type="checkbox"></input><span>Clubs</span></li>
                            <li><input type="checkbox"></input><span>Bars</span></li>
                        </ul>
                    </div>
                    {/* <hr/> */}
                    <div className="filter-category">
                        <div className="filter-header" >
                            <span>Tournaments</span>
                            <FaCaretDown />
                        </div>
                        <ul id="vehicle" className="filter-content">
                            <li><input type="checkbox"></input><span>Single Elimination</span></li>
                            <li><input type="checkbox"></input><span>Double Elimination</span></li>
                            <li><input type="checkbox"></input><span>Round Robin</span></li>
                            <li><input type="checkbox"></input><span>Ladder Tournament</span></li>
                            <li><input type="checkbox"></input><span>Swiss System</span></li>
                        </ul>
                    </div>
                    {/* <hr/> */}
                    <div className="filter-category">
                        <div className="filter-header" >
                            <span>Price</span>
                            <FaCaretDown />
                        </div>
                        <ul id="price" className="filter-content">
                            <li><input type="checkbox"></input><span>High</span></li>
                            <li><input type="checkbox"></input><span>Medium</span></li>
                            <li><input type="checkbox"></input><span>Low</span></li>
                        </ul>
                    </div>
                    {/* <hr/> */}
                    {/* <!-- Add more filter sections as needed --> */}
                    <button className="reset-btn">Reset</button>
                </div>

            {/* <!-- Main Content --> */}
            <div className="content">
                {/* <!-- Header --> */}
                <div className="header-controls">
                    <div className="product_views">
                        <CiGrid41 className="active"/>
                        <CiGrid2H />
                        <CiGrid2V />
                    </div>
                    
                    {/* <button className="view-grid active">Grid</button>
                    <button className="view-list">List</button> */}
                    <div className="product_filters">
                        <div className="sort-show">
                            <label for="sort-select">Sort:</label>
                            <div className="sort-select-div">
                                <select id="sort-select" value={sortBy} onChange={(e) => {setSortBy(e.target.value)}}>
                                    <option value="">Default</option>
                                    <option value="Name">Name</option>
                                    <option value="City">City</option>
                                    <option value="Price">Price</option>
                                </select>
                                <RiExpandUpDownFill/>
                            </div>
                        </div>
                        <div className="sort-show">
                            <label for="show-select">Show:</label>
                            <div className="sort-select-div">
                                <select id="show-select" value={showNo} onChange={(e) => setShowNo(e.target.value)}>
                                    <option value={barsAndClubs1.length}>All</option>
                                    <option value="2">2</option>
                                    <option value="4">4</option>
                                    <option value="6">6</option>
                                </select>
                                <RiExpandUpDownFill/>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Product Grid --> */}
                <div className="product-grid">
                    {getProcessedBarsAndClubs().map((ele) => {
                        return (
                            <div className="product-card">
                            {/* <div className="product-badges">
                                <span className="badge sale">Sale</span>
                                <span className="badge new">New</span>
                                <span className="badge hot">Hot</span>
                            </div> */}
                            <div className="product-image">
                                <MdOutlineZoomOutMap />
                                <img src={ele.image} alt=""/>
                            </div>
                            <div className="product-details">
                                <div className="left">
                                    <h3>{ele.name}</h3>
                                    <p>{ele.city}</p>
                                    <div classNameName="rating">
                                        <span classNameName="star">&#9733;</span>
                                        <span classNameName="star">&#9733;</span>
                                        <span classNameName="star">&#9733;</span>
                                        <span classNameName="star">&#9733;</span>
                                        <span classNameName="star">&#9733;</span>
                                    </div>
                                </div>
                                <div className="right">
                                    <p className="price">AED {ele.amount}</p>
                                    <button>Book Now</button>
                                    {/* <ImEnlarge /> */}
                                </div>
                            </div>
                        </div>
                        )
                    })}
                </div>

                {/* <!-- Footer --> */}
                <div className="footer-controls">
                    <div className="footer-pagination">
                        <span>❮</span>
                        <span>1</span>
                        <span>2</span>
                        <span>❯</span>
                    </div>
                    <div className="footer-details">
                        Showing 1-6  of 12 Clubs and Bars
                    </div>
                </div>
            </div>
            </div>
        </section>
    )
}