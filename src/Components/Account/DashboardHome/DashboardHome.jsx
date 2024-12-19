import Dashboard from "../Dashboard/Dashboard"
import "./DashboardHome.scss"

export default function DashboardHome() {
    return (
        <section>
            <div className="dashboardhome-container container-section">
                <div className="navigation-section">
                    <div className="heading">
                        <h1 className='main-heading'>Navigation</h1>
                        <hr className="hr-1"/><hr className="hr-2"/>
                        {/* <h3 className="second-heading">Welcome User</h3> */}
                    </div>
                    <hr className="dashboard-hr"/>
                    <ul>
                        <li className="active">Dashboard</li>
                        <li>Edit Profile</li>
                        <li>Password</li>
                        <li>Tournaments</li>
                    </ul>
                    <hr className="dashboard-hr"/>
                    <button className="logout-btn">Log Out</button>
                </div>
                <div className="dashboardhome-section">
                    <Dashboard/>
                </div>
            </div>
        </section>
    )
}