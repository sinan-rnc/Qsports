import { AuthProvider, useAuth } from "../../../Context/AuthContext"
import "./Dashboard.scss"

import photo from "../../../Assets/Common/user.png"

export default function Dashboard() {
    const user = useAuth()

    return (
        <div className="dashboard-container">
            <div className="heading">
                <h1 className='main-heading'>Dashboard</h1>
                <hr className="hr-1"/><hr className="hr-2"/>
                {/* <h3 className="second-heading">Welcome User</h3> */}
            </div>
            <div className="dashboard-profile">
                <img src={photo} alt="user"/>
                <h1>Qsports</h1>
                <span>qsports@gmail.com</span>
                <button className="edit-profile">Edit Profile</button>
            </div>
            <div className="dashboard-history">
            <div className="heading-1">
                <h1 className='main-heading'>Last Tournaments</h1>
                <hr className="hr-1"/><hr className="hr-2"/>
                {/* <h3 className="second-heading">Welcome User</h3> */}
            </div>
            <hr className="dashboard-history-hr"/>
            </div>
        </div>
    )
}