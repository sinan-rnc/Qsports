import { AuthProvider, useAuth } from "../../../Context/AuthContext"
import "./Dashboard.scss"

import photo from "../../../Assets/Common/user.png"

export default function Dashboard({ setSelectedDashboard }) {
    const user = useAuth()

    const tournamentStatus = [
        { id: 1, name: "Rack 'Em Up Challenge", ranking: "First", total: "" },
        { id: 2, name: "The Cue Masters Cup", ranking: "Fifth", total: "" },
        { id: 3, name: "Eight-Ball Showdown", ranking: "Seventh", total: "" },
        { id: 4, name: "Break & Brew Tournament", ranking: "Tenth", total: "" },
      ];

    return (
        <div className="dashboard-container">
            <div className="dashboard-profile">
                <div className="dashborad-heading">
                    <h1 className='dashborad-main-heading'>Dashboard</h1>
                    <hr className="dashborad-hr-1"/><hr className="dashborad-hr-2"/>
                    {/* <h3 className="second-heading">Welcome User</h3> */}
                </div>
                <div className="user-profile">
                    <img src={photo} alt="user"/>
                    <h1>Qsports</h1>
                    <span>qsports@gmail.com</span>
                    <button className="edit-profile" onClick={() => {setSelectedDashboard("userProfile")}}>Edit Profile</button>
                </div>
            </div>
            <div className="dashboard-history">
                <div className="heading-1">
                    <h1 className='main-heading'>Last Tournaments</h1>
                    <hr className="hr-1"/><hr className="hr-2"/>
                    {/* <h3 className="second-heading">Welcome User</h3> */}
                </div>
                {/* <hr className="dashboard-history-hr"/> */}
                <table className="recent-orders__table">
                    <thead>
                    <tr>
                        <th>SI NO</th>
                        <th>NAME</th>
                        <th>STATUS</th>
                        {/* <th>TOTAL</th> */}
                    </tr>
                    </thead>
                    <tbody>
                    {tournamentStatus.map((ele, index) => (
                        <tr key={index}>
                            <td>{ele.id}</td>
                            <td>{ele.name}</td>
                            <td>{ele.ranking}</td>
                            {/* <td>{ele.total}</td> */}
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}