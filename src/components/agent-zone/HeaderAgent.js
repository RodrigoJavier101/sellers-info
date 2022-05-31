import {
    useContext
} from "react";
import { Link } from "react-router-dom"
import AuthContext from "../../context/AuthProvider";
import SignOutButton from '../buttons/SignOutButton';
import NavToggleButton from '../navbar-toggle-button/NavToggleButton'

const HeaderAgent = () => {
    const { auth } = useContext(AuthContext);




    return (
        <header className="">
            <NavToggleButton />
            <nav className="sidebar bg-agent">
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
                            <Link to="/agent">&nbsp;Sellers</Link>
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

export default HeaderAgent
