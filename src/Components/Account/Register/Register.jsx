import "./Register.scss"

export default function Register() {
    return (
        <section>
            <div className="register-component container-section">
                <div className="form-component">
                    <div className="heading">
                        <h1 className='main-heading'>Register</h1>
                        <hr className="hr-1"/><hr className="hr-2"/>
                        <h3 className="second-heading">Add an account here</h3>
                    </div>
                    <hr className="form-hr"/>
                    <form className="form-table">
                        <div className="form-group">
                            <label className="form-label" for="username">Username/Email</label>
                            <input type="text" className="form-control" id="username" placeholder="Enter your username"/>
                        </div>
                        <div className="form-group">
                            <label className="form-label" for="password">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Enter your Password"/>
                        </div>
                        <div className="form-group">
                            <label className="form-label" for="username">Confirm Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Confirm the Password"/>
                        </div>
                        <button className="register-btn">Register</button>
                    </form>
                </div>
                <p className="login-link">Already Registered? <a href="/login">Login</a></p>
            </div>
        </section>
    )
}