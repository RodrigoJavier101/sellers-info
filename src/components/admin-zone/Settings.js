import React, { useState } from 'react'
import HeaderAdmin from './HeaderAdmin'
// import Loader from '../Loader'
import axios from '../../api/axios';

const SAVE_URL = '/api/users/save';
const LIST_URL = '/api/users/list';

const Settings = () => {
    const [fullname, setFullname] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [sellers, setSellers] = useState([]);
    const [msg, setMsg] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await axios.post(SAVE_URL,
            JSON.stringify({
                name: e.target.fullname.value,
                username: e.target.username.value,
                password: e.target.password.value,
                user_type: 2001
            }),
            { headers: { 'Content-Type': 'application/json' }, }
        );
        console.log(response?.data);
        setMsg(response?.data)
        setFullname('');
        document.getElementById('input-fullname').value = '';
        setUsername('');
        document.getElementById('input-username').value = '';
        setPassword('');
        document.getElementById('input-password').value = '';

        const response_ = await axios.get(LIST_URL, { headers: { 'Content-Type': 'application/json' }, });
        setSellers(response_['data']);

    }


    const listSellers = async (e) => {
        e.preventDefault();
        const response = await axios.get(LIST_URL, { headers: { 'Content-Type': 'application/json' }, });
        setSellers(response['data']);
    };


    return (
        <>
            <HeaderAdmin />
            <div className='settings-body' onMouseMove={listSellers}>
                <p className={msg ? "errmsg" : "offscreen"} aria-live="assertive">{msg}</p>
                <div className="settingsbox">
                    <h1 className='title_settings'>Add a seller here</h1>
                    <form onSubmit={handleSubmit}>

                        <input
                            id='input-fullname'
                            type="text"
                            name="fullname"
                            placeholder="Seller Name"
                            onChange={(e) => setFullname(e.target.value)}
                            value={fullname}
                            required></input>

                        <input
                            id='input-username'
                            type="text"
                            name="username"
                            placeholder="Username"
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                            required></input>

                        <input
                            id='input-password'
                            type="text"
                            name="password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required></input>

                        <button className="btn btn-success btn-block"> Agregar </button>
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
                                            <th key={`${el['id']}row`} scope="row"><b>{index}</b></th>
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

