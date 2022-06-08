import React, { useState } from 'react'
import HeaderAdmin from './HeaderAdmin'
import axios from '../../api/axios';
import Background from '../Background'
import Loader from '../Loader'

const SellersList = () => {
    const [isLoader, setIsLoader] = useState(true);
    const [grantedList, setGrantedList] = useState([]);

    const USERS_GRANTED_LIST = '/api/users/allGrantedUsersAdmin'

    const handleGrantedUsers = async () => {
        try {
            const response = await axios.get(USERS_GRANTED_LIST, { headers: { 'Content-Type': 'application/json' } })
            setGrantedList(response?.['data'].sort((a, b) => a['refresh_token'] < b['refresh_token']));
            setIsLoader(false);
        } catch (error) { console.log('ERROR GRANTED', error); }
    }

    if (isLoader) handleGrantedUsers();

    return (
        <>
            <HeaderAdmin />
            <Background />
            {isLoader ?
                <Loader />
                :
                <>
                    <div className="sellers-list-box">
                        <h4 className='title_settings'>
                            Total Granted Sellers ({grantedList.length})
                            ,  Inactives ({grantedList.filter((el) => el['refresh_token'].length === 0).length})
                        </h4>
                        <table className="table table-hover table-bordered">
                            <thead>
                                <tr>
                                    <th> # </th>
                                    <th> ID </th>
                                    <th> NickName </th>
                                    <th> Status </th>
                                    <th> Registration Date </th>
                                    <th> Refresh Token </th>
                                </tr>
                            </thead>
                            <tbody>
                                {grantedList.map((el, index) => {
                                    const i = index + 1;
                                    let classic = '';
                                    let textClass = '';
                                    let textActive = '';
                                    if (el['refresh_token'].length > 0) { classic = 'moving'; textClass = 'active-danger'; textActive = 'ACTIVE'; }
                                    else { classic = 'cancelled'; textClass = 'inactive-danger'; textActive = 'INACTIVE'; }
                                    return (
                                        <tr className='warning' key={`${index}`}>
                                            <td> {i} </td>
                                            <td> <b>{el['id']}</b> </td>
                                            <td> <b>{el['nickname']}</b> </td>
                                            <td>
                                                <div className={`tm-status-circle ${classic}`}></div>
                                                <em><b className={textClass}>{textActive}</b></em>
                                            </td>
                                            <td> <b>{el['registration_date'].split('T')[0]}</b> </td>
                                            <td> <b>{el['refresh_token']}</b> </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </>
            }
        </>
    )
}

export default SellersList

