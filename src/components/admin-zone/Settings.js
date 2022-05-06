import React, { useState } from 'react'
import HeaderAdmin from './HeaderAdmin'
// import Loader from '../Loader'
import axios from '../../api/axios';
import $ from 'jquery'

const LOGIN_URL = '/api/users/save';

function handleToggle(e) {
    e.preventDefault();
    $('#main-collapse').toggleClass("open")
    $('.sidebar').toggleClass("open");
    setTimeout(console.log('toggleing'), 200)
}
const Settings = () => {
    const [fullname, setFullname] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await axios.post(LOGIN_URL,
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
    }

    return (
        <>
            <HeaderAdmin handleToggle={handleToggle} />
            <p className={msg ? "errmsg" : "offscreen"} aria-live="assertive">{msg}</p>
            <div className='settings-body'>
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

                </div>
                <div className="settings-table-box">
                    {/* <h2 className="tm-block-title">Sellers List</h2> */}
                    <table className="table settings-table-inner">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">STATUS</th>
                                <th scope="col">SELLER NAME</th>
                                <th scope="col">LOCATION</th>
                                <th scope="col">NO ITEMS</th>
                                <th scope="col">AUTH DATE</th>
                                <th scope="col">DELETE</th>
                            </tr>
                        </thead>
                        <tbody>
                          
                            <tr>
                                <th scope="row"><b>#122349</b></th>
                                <td>
                                    <div className="tm-status-circle moving">
                                    </div>Moving
                                </td>
                                <td><b>Oliver Trag</b></td>
                                <td><b>London, UK</b></td>
                                <td><b>485 km</b></td>
                                <td>16:00, 12 NOV 2018</td>
                                <td><button>delete seller</button></td>
                            </tr>
                            <tr>
                                <th scope="row"><b>#122348</b></th>
                                <td>
                                    <div className="tm-status-circle pending">
                                    </div>Pending
                                </td>
                                <td><b>Jacob Miller</b></td>
                                <td><b>London, UK</b></td>
                                <td><b>360 km</b></td>
                                <td>11:00, 10 NOV 2018</td>
                                <td><button>delete seller</button></td>
                            </tr>
                            <tr>
                                <th scope="row"><b>#122347</b></th>
                                <td>
                                    <div className="tm-status-circle cancelled">
                                    </div>Cancelled
                                </td>
                                <td><b>George Wilson</b></td>
                                <td><b>London, UK</b></td>
                                <td><b>340 km</b></td>
                                <td>12:00, 22 NOV 2018</td>
                                <td><button>delete seller</button></td>
                            </tr>
                            <tr>
                                <th scope="row"><b>#122346</b></th>
                                <td>
                                    <div className="tm-status-circle moving">
                                    </div>Moving
                                </td>
                                <td><b>William Aung</b></td>
                                <td><b>London, UK</b></td>
                                <td><b>218 km</b></td>
                                <td>15:00, 10 NOV 2018</td>
                                <td><button>delete seller</button></td>
                            </tr>
                            <tr>
                                <th scope="row"><b>#122345</b></th>
                                <td>
                                    <div className="tm-status-circle pending">
                                    </div>Pending
                                </td>
                                <td><b>Harry Ryan</b></td>
                                <td><b>London, UK</b></td>
                                <td><b>280 km</b></td>
                                <td>15:00, 11 NOV 2018</td>
                                <td><button>delete seller</button></td>
                            </tr>
                            <tr>
                                <th scope="row"><b>#122344</b></th>
                                <td>
                                    <div className="tm-status-circle pending">
                                    </div>Pending
                                </td>
                                <td><b>Michael Jones</b></td>
                                <td><b>London, UK</b></td>
                                <td><b>218 km</b></td>
                                <td>18:00, 12 OCT 2018</td>
                                <td><button>delete seller</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Settings
