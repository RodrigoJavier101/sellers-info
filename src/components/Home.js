import React,  { useContext } from "react";
import AuthContext from "../context/AuthProvider";
import SectionHome from '../components/section-home/SectionHome'

const Home = () => {
    const { auth } = useContext(AuthContext);
    const name = auth['name'];
    const role = auth['roles'][0];
    let title = 'No Page', page = '/unauthorized';

    if (role === 221092534) { page = '/agent'; title = 'agent'; }
    if (role === 334223112) { page = '/users'; title = 'users'; }
    if (role === 558861093) { page = '/admin'; title = 'administration'; }

    return (<SectionHome name={name} page={page} title={title} />)
}
export default Home