import React, { useContext } from "react";
import { useNavigate } from "react-router-dom"
import AuthContext from "../context/AuthProvider"

const SignOutButton = () => {

    const navigate = useNavigate();
    const { setAuth } = useContext(AuthContext);

    const logout = async () => {
        setAuth({});
        navigate('/');
    }


    return (
        <>
            <button className="btn btn-primary btn-sm" onClick={logout}>Sign Out</button>
        </>
    )
}

export default SignOutButton

