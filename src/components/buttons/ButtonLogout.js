import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthProvider";


const ButtonLogout = () => {

    const navigate = useNavigate();
    const { setAuth } = useContext(AuthContext);

    const logout = async () => {
        setAuth({});
        navigate('/');
    }
    
    return (
        <div className="flexGrow">
            <button className="btn btn-primary btn-lg focus" onClick={logout}>Sign Out</button>
        </div>
    )
}

export default ButtonLogout
