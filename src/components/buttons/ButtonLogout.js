import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthProvider";


const ButtonLogout = () => {
    const { setAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    const logout = async () => {
        setAuth({});
        navigate('/login');
    }
    
    return (
        <div className="flexGrow">
            <button className="btn btn-primary btn-lg focus" onClick={logout}>Sign Out</button>
        </div>
    )
}

export default ButtonLogout