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
                        <input type="text" className="form-control" id="clubBarName" placeholder="Enter your Club/Bar Name"/>
                    </div>
                    <div className="form-group">
                        <label className="form-label" for="clubBarNumber">Club/Bar Image</label>
                        <input type="file" className="form-control" id="clubBarNumber" placeholder="Enter your Club/Bar Number"/>
                    </div>
                    <div className="form-group">
                        <label className="form-label" for="email">Email Address</label>
                        <input type="text" className="form-control" id="email" placeholder="Enter your Email Address"/>
                    </div>
                    <div className="form-group">
                        <label className="form-label" for="phoneNumber">Phone Number</label>
                        <input type="text" className="form-control" id="phoneNumber" placeholder="Enter your Phone Number"/>
                    </div>
                    <div className="form-group">
                        <label className="form-label" for="phoneNumber">Website Link</label>
                        <input type="text" className="form-control" id="phoneNumber" placeholder="Enter your Phone Number"/>
                    </div>
                    <div className="form-group">
                        <label className="form-label" for="location">Location/Area</label>
                        <input type="text" className="form-control" id="location" placeholder="Enter your Location/Area"/>
                    </div>
                    <div className="form-group">
                        <label className="form-label" for="city">City</label>
                        <input type="text" className="form-control" id="city" placeholder="Enter your Club/Bar City"/>
                    </div>
                    <div className="form-group">
                        <label className="form-label" for="city">Services</label>
                        <input type="text" className="form-control" id="city" placeholder="Enter your Club/Bar City"/>
                    </div>
                    <button className="save-btn">Save</button>
                </form>
            </div>
        </div>
    )
}