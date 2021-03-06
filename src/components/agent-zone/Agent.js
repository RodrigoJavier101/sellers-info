import React, { useState, } from 'react'
import HeaderAgent from '../agent-zone/HeaderAgent'
import axios from '../../api/axios';
import Background from '../Background'
import Loader from '../Loader'

const Agent = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [grantedList, setGrantedList] = useState([]);

    const USERS_GRANTED_LIST = '/api/users/allGrantedUsers'

    const handleGrantedUsers = async () => {
        try {
            const response = await axios.post(USERS_GRANTED_LIST, { headers: { 'Content-Type': 'application/json' } });
            // setGrantedList(response?.['data'].sort((a, b) => a['refresh_token'] < b['refresh_token']));
            setGrantedList(response['data'].sort((a, b) => a['refresh_token'] < b['refresh_token']));
            setIsLoading(false);
        } catch (error) { console.log('USERS SELLERS'); }
    }

    if (isLoading) handleGrantedUsers();

    return (
        <>
            <HeaderAgent />
            <Background />
            {isLoading
                ?
                <Loader />
                :
                <>
                    <div className="sellers-list-box">
                        <h4 className='title_settings'>
                            Total ({grantedList.length})
                            ,  Actives ({grantedList.filter((el) => el['refresh_token'].length > 0).length})
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
                                            <td>
                                                <span className="tooltip tooltip-effect-3">
                                                    <span className="tooltip-item">
                                                        <b>{el['id']}</b>
                                                    </span>
                                                    <span className="tooltip-content clearfix">
                                                        <span className="tooltip-text">
                                                            {`${el['sellerId'].length > 0 ? `Seller id: ${el['sellerId']}` : 'Without seller ids'}`}
                                                        </span>
                                                    </span>
                                                </span>
                                            </td>
                                            <td> <b>{el['nickname']}</b> </td>
                                            <td>
                                                <div className={`tm-status-circle ${classic}`}></div>
                                                <em><b className={textClass}>{textActive}</b></em>
                                            </td>
                                            <td> <b>{el['registration_date'].split('T')[0]}</b> </td>
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

export default Agent

