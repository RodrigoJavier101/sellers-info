import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthProvider";
import SignOutButton from '../buttons/SignOutButton';
import NavToggleButton from '../navbar-toggle-button/NavToggleButton'

const HeaderUser = () => {
    const { auth } = useContext(AuthContext);

    return (
        <header className="">
            <NavToggleButton />
            <nav className="sidebar bg-users">
                <div className="navbar-collapse" id="navbar-collapse">
                    <div className="site-header">
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
                            <Link to="/users">&nbsp;Charts</Link>
                        </li>
                        <li>
                            <Link to="/products_users">&nbsp;Products</Link>
                        </li>
                        <li>
                            <Link to="/reports_users">&nbsp;Reports</Link>
                        </li>
                        <hr />
                        <li>
                            <SignOutButton />
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default HeaderUser
