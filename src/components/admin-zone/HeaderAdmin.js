import  React, { useContext } from "react";
import { Link } from "react-router-dom"
import AuthContext from "../../context/AuthProvider";
import SignOutButton from '../buttons/SignOutButton'
import NavToggleButton from '../navbar-toggle-button/NavToggleButton'



const HeaderAdmin = () => {

    const { auth } = useContext(AuthContext);

    return (
        <header className="">
            <NavToggleButton />
            <nav className="sidebar bg-admin">
                <div className="navbar-collapse" id="navbar-collapse">
                    <div className="site-header">
                        <img className="logo_header" alt="Sellers Info" src="../../favicon.ico"></img>
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
                            <Link to="/settings">&nbsp;Settings</Link>
                        </li>
                        <hr />
                        <li>
                            <div className="flexGrow">
                                <SignOutButton />
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default HeaderAdmin
