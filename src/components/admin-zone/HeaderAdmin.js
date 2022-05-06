import { useNavigate, Link } from "react-router-dom"
import { React, useContext, useState } from "react";
import AuthContext from "../../context/AuthProvider";
import axios from '../../api/axios';

const LOGIN_URL = '/api/users/list';

const HeaderAdmin = ({ handleToggle }) => {
    const navigate = useNavigate();
    const { setAuth, auth } = useContext(AuthContext);
    const [sellersList, setSellersList] = useState([])
    const logout = async () => {
        setAuth({});
        navigate('/login');
    }

    const handleSettingsData = async () => {
        try {
            const response = await axios.get(LOGIN_URL,
                { headers: { 'Content-Type': 'application/json' }, }
            );
            setSellersList(response.data);
        } catch (error) { console.log(`ERORR en el axios`, error); }
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
                            <Link to="/admin">&nbsp;Charts</Link>
                        </li>
                        <li>
                            <Link to="/sellers">&nbsp;Sellers</Link>
                        </li>
                        <li>
                            <Link to="/reports">&nbsp;Reports</Link>
                        </li>
                        <li>
                            <Link to="/products">&nbsp;Products</Link>
                        </li>
                        <li>
                            <Link to="/accounts">&nbsp;Accounts</Link>
                        </li>
                        <li>
                            <Link to="/events">&nbsp;Events</Link>
                        </li>
                        <li>
                            <Link to="/settings" onClick={handleSettingsData}>&nbsp;Settings</Link>
                        </li>
                        <li>
                            <div className="flexGrow">
                                <button className="btn btn-primary btn-sm" onClick={logout}>Sign Out</button>
                            </div>
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

export default HeaderAdmin