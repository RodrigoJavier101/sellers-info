import React, {
    useState,
    useEffect
} from 'react'
import HeaderAgent from '../agent-zone/HeaderAgent'
import Loader from '../Loader'
import axios from '../../api/axios';
import Background from '../Background'

const Agent = () => {

    const [grantedList, setGrantedList] = useState([]);
    const USERS_GRANTED_LIST = '/api/users/allGrantedUsers'

    const handleGrantedUsers = async () => {
        try {

            const response = await axios.get(USERS_GRANTED_LIST, { headers: { 'Content-Type': 'application/json' } });
            setGrantedList(response?.['data']);

        } catch (error) { console.log('ERROR GRANTEWd YUSES sELERS', error); }

    }

    useEffect(() => handleGrantedUsers(), [])

    if (grantedList.length < 1) {
        return (
            <>
                <HeaderAgent />
                <Background />
                <Loader />
            </>
        )
    } else {
        grantedList.sort((a, b) => a['registration_date'] < b['registration_date']);
        return (
            <>
                <HeaderAgent />
                <Background />
                <div className="sellers-list-box">

                    {grantedList.length > 1
                        ?
                        <>
                            <h4 className='title_settings'> Total Sellers Granted ({grantedList.length}),  Inactives ({grantedList.filter((el) => el['status_'] === 'inactive').length})</h4>
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
                                        let classic = '';
                                        let textClass = '';
                                        if (el['status_'] === 'active') { classic = 'moving'; textClass = 'active-danger'; }
                                        if (el['status_'] === 'inactive') { classic = 'cancelled'; textClass = 'inactive-danger'; }
                                        return (
                                            <tr className='warning' key={`${index}`}>
                                                <td> {index} </td>
                                                <td> <b>{el['id']}</b> </td>
                                                <td> <b>{el['nickname']}</b> </td>
                                                <td>
                                                    <div className={`tm-status-circle ${classic}`}></div>
                                                    <em><b className={textClass}>{el['status_'].toUpperCase()}</b></em>
                                                </td>
                                                <td> <b>{el['registration_date'].split('T')[0]}</b> </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </>
                        :
                        <div className="table settings-table-inner">
                            {/* <button onClick={handleGrantedUsers}>GRANTED USERS</button> */}
                            {/* <button className="btn btn-info btn-block" onClick={handleGrantedUsers}>GRANTED USERS</button> */}
                        </div>
                    }
                </div>
            </>
        )

    }
}

export default Agent

