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
                    <div className="form-group">
                        <label className="form-label" for="clubBarName">Club/Bar Name</label>
                        <input type="text" className="form-control" id="clubBarName" placeholder="Enter the Club/Bar Name"/>
                    </div>
                    <div className="form-group">
                        <label className="form-label" for="clubBarNumber">Club/Bar ID</label>
                        <input type="text" className="form-control" id="clubBarNumber" placeholder="Enter the Club/Bar Number"/>
                    </div>
                    <div className="form-group">
                        <label className="form-label" for="clubBarNumber">Club/Bar Slogan</label>
                        <input type="file" className="form-control" id="clubBarNumber" placeholder="Enter the Club/Bar Slogan"/>
                    </div>
                    <div className="form-group">
                        <label className="form-label" for="clubBarNumber">Club/Bar Images</label>
                        <input type="file" className="form-control" id="clubBarNumber" placeholder="Enter the Club/Bar Images"/>
                    </div>
                    <div className="form-group">
                        <label className="form-label" for="email">Email Address</label>
                        <input type="text" className="form-control" id="email" placeholder="Enter the Email Address"/>
                    </div>
                    <div className="form-group">
                        <label className="form-label" for="phoneNumber">Phone Number</label>
                        <input type="text" className="form-control" id="phoneNumber" placeholder="Enter the Phone Number"/>
                    </div>
                    <div className="form-group">
                        <label className="form-label" for="phoneNumber">Website Link</label>
                        <input type="text" className="form-control" id="phoneNumber" placeholder="Enter the Phone Number"/>
                    </div>
                    <div className="form-group">
                        <label className="form-label" for="location">Address</label>
                        <input type="text" className="form-control" id="location" placeholder="Enter the Address"/>
                    </div>
                    <div className="form-group">
                        <label className="form-label" for="location">Geo Location</label>
                        <input type="text" className="form-control" id="location" placeholder="Enter the Geo Location"/>
                    </div>
                    <div className="form-group">
                        <label className="form-label" for="city">Services</label>
                        <input type="number" className="form-control" id="city" placeholder="No. of pool & snooker tables"/>
                        <input type="text" className="form-control" id="city" placeholder="Ages aloud in the club"/>
                        <input type="text" className="form-control" id="city" placeholder="Clubs space and seating space"/>
                        <input type="text" className="form-control" id="city" placeholder="Pool Coaching"/>
                        <input type="text" className="form-control" id="city" placeholder="Pool & Billiard Products"/>
                        <input type="text" className="form-control" id="city" placeholder="Table models & sizes"/>
                        <input type="text" className="form-control" id="city" placeholder="Pool Competitions & Events"/>
                        <input type="text" className="form-control" id="city" placeholder="Billiard Balls and Cloth"/>
                    </div>
                    <div className="form-group">
                        <label className="form-label" for="city">Food and Drinks</label>
                        <input type="text" className="form-control" id="city" placeholder="Type of Food"/>
                        <input type="text" className="form-control" id="city" placeholder="Type of Drinks"/>
                        <input type="text" className="form-control" id="city" placeholder="Type of Coffees"/>
                        <input type="text" className="form-control" id="city" placeholder="Type of Desserts"/>
                    </div>
                    <div className="form-group">
                        <label className="form-label" for="city">Working Hours</label>
                        <input type="time" className="form-control" id="city" placeholder="Open"/>
                        <input type="time" className="form-control" id="city" placeholder="Close"/>
                        <input type="text" className="form-control" id="city" placeholder="Happy hour rate"/>
                        <input type="text" className="form-control" id="city" placeholder="Regular hour rate"/>
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