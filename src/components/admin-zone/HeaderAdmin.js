import { Link } from "react-router-dom"
import { useContext, useState } from "react";
import AuthContext from "../../context/AuthProvider";
import SignOutButton from '../SignOutButton'
import axios from '../../api/axios';
import $ from 'jquery'

const USERS_LIST_URL = '/api/users/list';

const HeaderAdmin = () => {

    const { auth } = useContext(AuthContext);
    const [sellersList, setSellersList] = useState([])


    const handleSettingsData = async () => {
        try {
            const response = await axios.get(USERS_LIST_URL,
                { headers: { 'Content-Type': 'application/json' }, }
            );
            setSellersList(response.data);
        } catch (error) { console.log(`ERORR en el axios`, error); }
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
                        <img className="logo_header" alt="Sellers Info" src="../../favicon.ico"></img>
                        {/* <h2 className="site-brand">Sellers Info</h2> */}
                    </div>
                    <hr />
                    <div className="col-lg">
                        <div className="col">
                            <p className="username"><b>{auth['name']}</b></p>
                        </div>
                    </div>
                    <hr />
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
                        <hr />
                        <li>
                            <div className="flexGrow">
                                <SignOutButton />
                            </div>
                        </li>
                    </ul>

                    <nav className="nav-footer">
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
