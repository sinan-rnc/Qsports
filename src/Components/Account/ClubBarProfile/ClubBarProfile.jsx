import "./ClubBarProfile.scss"

export default function ClubBarProfile() {
    return (
        <div className="clubBar-profile-container">
            <div className="clubBar-profile-section">
                <div className="dashborad-heading">
                    <h1 className='dashborad-main-heading'>Edit Profile</h1>
                    <hr className="dashborad-hr-1"/><hr className="dashborad-hr-2"/>
                    <h3 className="dashborad-second-heading">Club</h3>
                </div>
                <form className="form-table">
                    <div className="same-line">
                        <div className="form-group">
                            <label className="form-label" for="clubBarName">Club/Bar Name</label>
                            <input type="text" className="form-control" id="clubBarName" placeholder="Enter the Club/Bar Name"/>
                        </div>
                        <div className="form-group">
                            <label className="form-label" for="clubBarNumber">Club/Bar ID</label>
                            <input type="text" className="form-control" id="clubBarNumber" placeholder="Enter the Club/Bar ID"/>
                        </div>
                    </div>
                    <div className="same-line">
                        <div className="form-group">
                            <label className="form-label" for="clubBarNumber">Club/Bar Slogan</label>
                            <input type="file" className="form-control" id="clubBarNumber" placeholder="Enter the Club/Bar Slogan"/>
                        </div>
                        <div className="form-group">
                            <label className="form-label" for="clubBarNumber">Club/Bar Images</label>
                            <input type="file" className="form-control" id="clubBarNumber" placeholder="Enter the Club/Bar Images"/>
                        </div>
                    </div>
                    <div className="same-line">
                        <div className="form-group">
                            <label className="form-label" for="email">Email Address</label>
                            <input type="text" className="form-control" id="email" placeholder="Enter the Email Address"/>
                        </div>
                        <div className="form-group">
                            <label className="form-label" for="phoneNumber">Phone Number</label>
                            <input type="text" className="form-control" id="phoneNumber" placeholder="Enter the Phone Number"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="form-label" for="phoneNumber">Website Link</label>
                        <input type="text" className="form-control" id="phoneNumber" placeholder="Enter the Website Link"/>
                    </div>
                    <div className="same-line">
                        <div className="form-group">
                            <label className="form-label" for="location">Address</label>
                            <input type="text" className="form-control" id="location" placeholder="Enter the Address"/>
                        </div>
                        <div className="form-group">
                            <label className="form-label" for="location">Geo Location</label>
                            <input type="text" className="form-control" id="location" placeholder="Enter the Geo Location"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="form-label" for="city"><h1>Services</h1></label>
                        <div className="same-line">
                            <label className="form-label" for="city">No. of pool & snooker tables</label>
                            <input type="number" className="form-control" id="city" placeholder="No. of pool & snooker tables"/>
                        </div>
                        <div className="same-line">
                            <label className="form-label" for="city">Ages aloud in the club</label>
                            <input type="number" className="form-control" id="city" placeholder="Ages aloud in the club"/>
                        </div>
                        <div className="same-line">
                            <label className="form-label" for="city">Clubs space and seating space</label>
                            <input type="number" className="form-control" id="city" placeholder="Clubs space and seating space"/>
                        </div>
                        <div className="same-line">
                            <label className="form-label" for="city">Pool Coaching</label>
                            <input type="text" className="form-control" id="city" placeholder="Pool Coaching - Yes/No"/>
                        </div>
                        <div className="same-line">
                            <label className="form-label" for="city">Pool & Billiard Products</label>
                            <input type="text" className="form-control" id="city" placeholder="Pool & Billiard Products"/>
                        </div>
                        <div className="same-line">
                            <label className="form-label" for="city">Table models & sizes</label>
                            <input type="text" className="form-control" id="city" placeholder="Table models & sizes"/>
                        </div>
                        <div className="same-line">
                            <label className="form-label" for="city">Pool Competitions & Events</label>
                            <input type="text" className="form-control" id="city" placeholder="Pool Competitions & Events"/>
                        </div>
                        <div className="same-line">
                            <label className="form-label" for="city">Billiard Balls and Cloth</label>
                            <input type="text" className="form-control" id="city" placeholder="Billiard Balls and Cloth"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="form-label" for="city"><h1>Food and Drinks</h1></label>
                        <div className="same-line">
                            <label className="form-label" for="city">Type of Food</label>
                            <input type="text" className="form-control" id="city" placeholder="Type of Food"/>
                        </div>
                        <div className="same-line">
                            <label className="form-label" for="city">Type of Drinks</label>
                            <input type="text" className="form-control" id="city" placeholder="Type of Drinks"/>
                        </div>
                        <div className="same-line">
                            <label className="form-label" for="city">Type of Coffees</label>
                            <input type="text" className="form-control" id="city" placeholder="Type of Coffees"/>
                        </div>
                        <div className="same-line">
                            <label className="form-label" for="city">Type of Desserts</label>
                            <input type="text" className="form-control" id="city" placeholder="Type of Desserts"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="form-label" for="city"><h1>Working Hours</h1></label>
                        <div className="same-line-openclose">
                            <div className="same-line">
                                <label className="form-label" for="city">Open</label>
                                <input type="time" className="form-control" id="city" placeholder="Open"/>
                            </div>
                            <div className="same-line">
                                <label className="form-label" for="city">Close</label>
                                <input type="time" className="form-control" id="city" placeholder="Close"/>
                            </div>
                        </div>
                        <div className="same-line-openclose">
                            <div className="same-line">
                                <label className="form-label" for="city">Happy hour rate</label>
                                <input type="text" className="form-control" id="city" placeholder="Happy hour rate"/>
                            </div>
                            <div className="same-line">
                                <label className="form-label" for="city">Regular hour rate</label>
                                <input type="text" className="form-control" id="city" placeholder="Regular hour rate"/>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="form-label" for="location">Why "your Club name here"</label>
                        <textarea type="text" className="form-control" id="location" placeholder={`Brief description on why your club is better and the services and ambiance is of better convenience.\nThe future programs and services`}/>
                    </div>
                    <div className="form-group">
                        <label className="form-label" for="location">History of the Club</label>
                        <textarea type="text" className="form-control" id="location" placeholder="When it opened first. How it was back then. What programs were organized?"/>
                    </div>
                    <button className="save-btn">Save</button>
                </form>
            </div>
        </div>
    )
}