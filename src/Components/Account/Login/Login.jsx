import "./Login.scss"

export default function Login() {
    return (
        <section>
            <div className="login-component container-section">
                <div className="form-component">
                    <div className="heading">
                        <h1 className='main-heading'>Login</h1>
                        <hr className="hr-1"/><hr className="hr-2"/>
                        <h3 className="second-heading">Welcome User</h3>
                    </div>
                    <hr className="form-hr"/>
                    <form className="form-table">
                        <div className="form-group">
                            <label className="form-label" for="username">Username/Email</label>
                            <input type="text" className="form-control" id="username" placeholder="Enter your Username"/>
                        </div>
                        <div className="form-group">
                            <label className="form-label" for="password">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Enter your Password"/>
                        </div>
                        <button className="register-btn">Register</button>
                    </form>
                </div>
                <p className="login-link">Don't Have an Account? <a href="/account/register">Register</a></p>
            </div>
        </section>
    )
}