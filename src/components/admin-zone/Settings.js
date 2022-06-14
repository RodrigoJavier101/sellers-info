import React, { useState } from 'react'
import HeaderAdmin from './HeaderAdmin'
// import Loader from '../Loader'
import axios from '../../api/axios';
import Background from '../Background'

const SAVE_URL = '/api/users/save';
const LIST_URL = '/api/users/list';

const Settings = () => {
    const [fullname, setFullname] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [sellers, setSellers] = useState([]);
    // const [msg, setMsg] = useState('');
    const [isLoader, setIsLoader] = useState(true);

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const response = await axios.post(SAVE_URL,
                JSON.stringify({
                    name: e.target.fullname.value.trim(),
                    username: e.target.username.value.toLowerCase().trim(),
                    password: e.target.password.value.trim(),
                    user_type: 334223112
                }),
                { headers: { 'Content-Type': 'application/json' }, }
            );
            console.log(response?.data);
            // setMsg(response?.data)
            setFullname('');
            document.getElementById('input-fullname').value = '';
            setUsername('');
            document.getElementById('input-username').value = '';
            setPassword('');
            document.getElementById('input-password').value = '';

            const response_ = await axios.get(LIST_URL, { headers: { 'Content-Type': 'application/json' }, });
            setSellers(response_['data']);

        } catch (error) { console.log(error); }
    }

    const listSellers = async (e) => {
        try {
            if (e) e.preventDefault();
            const response = await axios.post(LIST_URL, { headers: { 'Content-Type': 'application/json' }, });
            setSellers(response['data']);

            setIsLoader(false);
        } catch (error) { console.log(error); }
    }

    if (isLoader) listSellers();

    return (
        <>
            <HeaderAdmin />
            <Background />
            <div className=''>
                {/* <p className={msg ? "errmsg" : "offscreen"} aria-live="assertive">{msg}</p> */}
                <div className="settingsbox">
                    <h1 className='title_settings'>Add a seller here</h1>
                    <hr />
                    <form onSubmit={handleSubmit}>

                        <input
                            id='input-fullname'
                            type="text"
                            name="fullname"
                            placeholder="Seller Name (just as it is)"
                            onChange={(e) => setFullname(e.target.value)}
                            value={fullname}
                            required></input>

                        <input
                            id='input-username'
                            type="text"
                            name="username"
                            placeholder="Username (use lower case)"
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                            required></input>

                        <input
                            id='input-password'
                            type="text"
                            name="password"
                            placeholder="Password (it is visible!!)"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required></input>

                        <button className="btn btn-success btn-block"> ADD </button>
                    </form>
                    <hr />
                </div>
                <div className="settings-table-box">
                    {/* <h2 className="tm-block-title">Sellers List</h2> */}
                    {sellers.length > 0 ?
                        <table className="table settings-table-inner table-hover">

                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">STATUS</th>
                                    <th scope="col">SELLER NAME</th>
                                    <th scope="col">USER</th>
                                    <th scope="col">PASSWORD</th>
                                    <th scope="col">USER_ID</th>
                                    <th scope="col">AUTH DATE</th>
                                    <th scope="col">DELETE</th>
                                </tr>
                            </thead>
                            <tbody>
                                {sellers.map((el, index) => {
                                    let text = '', classic = '';
                                    const in_ = index + 1;
                                    if (el['id'] % 2 === 0) {
                                        classic = 'cancelled';
                                        text = 'Stopped';
                                    }
                                    if (el['id'] % 2 !== 0) {
                                        classic = 'moving';
                                        text = 'Active';
                                    }
                                    return (
                                        /* moving  cancelled   pending*/
                                        < tr className='warning' key={el['id']}>
                                            <th key={`${el['id']}row`} scope="row"><b>{in_}</b></th>
                                            <td key={`${el['id']}status`}>
                                                <div className={`tm-status-circle ${classic}`}></div>
                                                <code><em><b>{text}</b></em></code>
                                            </td>
                                            <td key={`${el['id']}name`}><b>{el['name']}</b></td>
                                            <td key={`${el['id']}username`}><b>{el['username']}</b></td>
                                            <td key={`${el['id']}password`}><b>{el['password']}</b></td>
                                            <td key={`${el['id']}`}><b>{el['refresh_token']}</b></td>
                                            <td key={`${el['id']}date`}>12:00, 22 NOV 2018</td>
                                            <td key={`${el['id']}btn`}><button>admin seller</button></td>
                                        </tr>
                                    )
                                })}

                            </tbody>
                        </table>
                        :
                        <div className="table settings-table-inner">
                            {/* <button onClick={listSellers} className="btn btn-info btn-block"> Listar </button> */}
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default Settings

