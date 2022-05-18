import React, { useState, useEffect } from 'react'
import HeaderAdmin from './HeaderAdmin'
import axios from '../../api/axios';
import Background from '../Background'

const SellersList = () => {
    const [grantedList, setGrantedList] = useState([]);

    const USERS_GRANTED_LIST = '/api/users/allGrantedUsers'

    const handleGrantedUsers = async () => {
        try {
            const response = await axios.get(USERS_GRANTED_LIST, {
                headers: { 'Content-Type': 'application/json' }
            })
            setGrantedList(response['data']?.['arrRest']);
            console.log(grantedList);
        } catch (error) {
            console.log('ERROR GRANTEWd YUSES sELERS', error);
        }

    }

    //    useEffect(()=> handleGrantedUsers, []);

    return (
        <>
            <HeaderAdmin />
            <Background />
            {/* <Loader /> */}
            <div className="sellers-list-box">

                {grantedList.length > 1
                    ?
                    <>
                        < h4 > Sellers Granted</h4>
                        <table className="table table-hover table-bordered">
                            <thead>
                                <tr>
                                    <th> # </th>
                                    <th> ID </th>
                                    <th> NickName </th>
                                    <th> Registration Date</th>
                                    <th> Status </th>
                                </tr>
                            </thead>
                            <tbody>

                                {grantedList.map((el, index) => {

                                    return (
                                        <tr>
                                            <td> {index} </td>
                                            <td> {el['id']} </td>
                                            <td> {el['nickname']} </td>
                                            <td> {el['registration_date'].split('T')[0]} </td>
                                            <td> {el['status']['site_status']} </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </>
                    :
                    <div className="table settings-table-inner">
                        {/* <button onClick={handleGrantedUsers}>GRANTED USERS</button> */}
                        <button className="btn btn-info btn-block" onClick={handleGrantedUsers}>GRANTED USERS</button>
                    </div>
                }
            </div>
        </>
    )
}

export default SellersList

