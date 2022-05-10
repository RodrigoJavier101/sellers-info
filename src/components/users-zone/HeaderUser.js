import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthProvider";
import $ from 'jquery'

const Header = () => {
    const { setAuth, auth } = useContext(AuthContext);
    const navigate = useNavigate();


    const logout = async () => {
        setAuth({});
        navigate('/login');
    }

    function handleToggle(e) {
        e.preventDefault();
        $('#main-collapse').toggleClass("open")
        $('.sidebar').toggleClass("open");
        setTimeout(console.log('toggleing'), 200)
    }
    

    return (

        <header className="">

            <div className="navbar navbar-default visible-xs" style={{ l: 'position: fixed; z-index: 1000' }}>
                <button type="button" className="navbar-toggle collapsed" onClick={(e) => handleToggle(e)}>
                    <span className="sr-only">Toggle</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
            </div>

            <nav className="sidebar">
                <div className="navbar-collapse" id="navbar-collapse">
                    <div className="site-header hidden-xs">
                        <img className="img-responsive site-logo" alt="Sellers Info" src="/images/mashup-logo.svg"></img>
                        <h2 className="site-brand">Sellers Info</h2>
                    </div>
                    <div className="col-lg">
                        <div className="col">
                            <p className="text-black-50 mt-5 mb-5"><b>{auth['name']}</b></p>
                        </div>
                    </div>

                    <ul className="">
                        <li>
                            <Link to="/users">&nbsp;Charts</Link>
                        </li>
                        <li>
                            <Link to="/products_users">&nbsp;Products</Link>
                        </li>
                        <li>
                            <Link to="/reports_users">&nbsp;Reports</Link>
                        </li>
                        <li>
                            <button className="btn btn-primary btn-sm" onClick={logout}>Sign Out</button>
                        </li>
                    </ul>

                    <nav className="nav-footer">
                        <p className="nav-footer-social-buttons">
                            <a className="fa-icon" href="https://www.instagram.com/" title="">
                                <i className="fas fa-user-astronaut"></i>
                            </a>
                            <a className="fa-icon" href="https://dribbble.com/" title="">
                                <i className="fas fa-wpexplorer"></i>
                            </a>
                            <a className="fa-icon" href="https://twitter.com/" title="">
                                <i className="fas fa-save"></i>
                            </a>
                        </p>
                        <a href="http://www.blcorporations.com/" title="website_" target="_blank" rel="noreferrer">
                            <p>© BL Corporations</p>
                        </a>
                    </nav>

                </div>

            </nav>

        </header>
    )
}

export default Header