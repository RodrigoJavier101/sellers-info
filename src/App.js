import Layout from './components/Layout';
import Home from './components/Home';
import Login from './components/Login';
import Missing from './components/Missing';
import ReportsUser from './components/users-zone/ReportsUser';
import ProductsUser from './components/users-zone/ProductsUser';
import { Routes, Route } from 'react-router-dom';
import Users from './components/users-zone/Users';
import Admin from './components/admin-zone/Admin';
import SellersList from './components/admin-zone/SellersList';
import Settings from './components/admin-zone/Settings';
import Accounts from './components/admin-zone/Accounts';
import Events from './components/admin-zone/Events';
import Unauthorized from './components/Unauthorized';
import RequireAuth from './components/RequireAuth';
import Auth from './components/Auth';


const ROLES = { 'User': 2001, 'Admin': 5001 }
// const ROLES = { 'User': process.env.ROLE_USER, 'Admin': process.env.ROLE_ADMIN }


function App() {

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                {/* public routes */}
                <Route path="auth" element={<Auth />} />
                <Route path="/" element={<Login />} />
                {/* catch all */}
                <Route path="*" element={<Missing />} />
                <Route path="unauthorized" element={<Unauthorized />} />

                <Route element={<RequireAuth allowedRoles={[ROLES.User, ROLES.Admin]} />}>
                    <Route path="home" element={<Home />} />
                    <Route path="users" element={<Users />} />
                    <Route path="reports_users" element={<ReportsUser />} />
                    <Route path="products_users" element={<ProductsUser />} />
                </Route>

                <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
                    <Route path="admin" element={<Admin />} />
                    <Route path="sellers" element={<SellersList />} />
                    <Route path="accounts" element={<Accounts />} />
                    <Route path="events" element={<Events />} />
                    <Route path="settings" element={<Settings />} />
                </Route>

            </Route>
        </Routes>
    );
}

export default App;
