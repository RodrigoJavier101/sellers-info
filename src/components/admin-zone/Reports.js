import React, { useState } from 'react'
import HeaderAdmin from '../admin-zone/HeaderAdmin'
import Background from '../Background'
import LoaderButtons from '../LoaderButtons'
import SelectUsers from './reports-components/SelectUsers'
import axios from '../../api/axios';



const Reports = () => {
    const USERS_GRANTED_ACTIVE_LIST = '/api/users/listGrantedActive'

    const [isLoader, setIsLoader] = useState(true);
    const [listUsers, setListusers] = useState([]);

    const getList = async () => {
        try {
            const list = await axios.post(USERS_GRANTED_ACTIVE_LIST)
                .then(async res => res)
                .catch(err => console.log('error en axios server', err));
            setListusers(list['data'])
            setIsLoader(false);
        } catch (error) { console.log(`error en el try catch`, error); }
    }

    if (isLoader) getList();
    return (
        <>
            <HeaderAdmin />
            <Background />
            {isLoader ?
                <LoaderButtons />
                :
                <>
                    <div className="sellers-list-box">
                        <div>
                            <SelectUsers
                                listUsers={listUsers}
                            ></SelectUsers>
                        </div>
                        {/* <table className="table table-hover table-bordered">
                            <thead>
                                <tr>
                                    <th> # </th>
                                    <th> ID </th>
                                    <th> NickName </th>
                                    <th> Global Status </th>
                                    <th> Detention Status </th>
                                    <th> Registration Date </th>
                                    <th> Refresh Token </th>
                                    <th> Validation </th>
                                </tr>
                            </thead>
                            <tbody>

                            </tbody>
                        </table> */}
                    </div>
                </>
            }
        </>
    )
}

export default Reports