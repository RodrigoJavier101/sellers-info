import { useContext } from "react";
import AuthContext from "../context/AuthProvider";
import SectionHome from '../components/section-home/SectionHome'

const Home = () => {
    const { auth } = useContext(AuthContext);
    const name = auth['name'];
    const role = auth['roles'][0];
    let title = 'No Page';
    let page = '/unauthorized';
    if (role === 2001) {
        page = '/users'; title = 'users';
    }
    if (role === 5001) {
        page = '/admin'; title = 'administration';
    }

    return (<SectionHome name={name} page={page} title={title} />)
}
export default Home