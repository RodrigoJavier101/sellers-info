import React, { useEffect, useState } from 'react'
import HeaderAdmin from './HeaderAdmin'
import axios from '../../api/axios';
import Background from '../Background'
import Loader from '../Loader'
import Modal from './modal/ModalOne'
// import ioClient from 'socket.io-client'

// const socket = ioClient.connect('https://back.sellers-info.cl');

const SellersList = () => {
    const [isLoader, setIsLoader] = useState(true);
    const [grantedList, setGrantedList] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [nickRT, setNickRT] = useState({ nickname: '', refresh_token: '' });
    const [detentionStatus, setDetentionStatus] = useState('');

    const USERS_GRANTED_LIST = '/api/users/allGrantedUsersAdmin'

    const handleGrantedUsers = async () => {
        try {
            const response = await axios.post(USERS_GRANTED_LIST, { headers: { 'Content-Type': 'application/json' } })
            // setGrantedList(response?.['data'].sort((a, b) => a['refresh_token'] < b['refresh_token']));
            if (response['data']) {
                setGrantedList(response['data'].sort((a, b) => a['refresh_token'] < b['refresh_token']));
            }
            setIsLoader(false);
        } catch (error) { console.log('ERROR GRANTED', error); }
    }

    if (isLoader) handleGrantedUsers();

    // useEffect(() => socket.on('receive_message', data => {
    //     console.log(data, `_____----______---_______--____-----`);
    // }), [socket]);



    // useEffect(() => {
    //     const socket = ioClient(`https://back.sellers-info.cl`);
    //     socket.connect();
    //     socket.on('receive_message', data => {
    //         console.log(data, `_____----______---_______--____-----`);
    //     });
    //     return () => socket.disconnect();
    // });

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
                                    <th> Global Status </th>
                                    <th> Detention Status </th>
                                    <th> Registration Date </th>
                                    <th> Refresh Token </th>
                                    <th> Validation </th>
                                </tr>
                            </thead>
                            <tbody>
                                {grantedList.map((el, index) => {
                                    const i = index + 1;
                                    let classic = '';
                                    let textClass = '';
                                    let textActive = '';
                                    let detStatus = '';

                                    if (el['refresh_token'].length > 0) {
                                        classic = 'moving';
                                        textClass = 'active-danger';
                                        textActive = 'ACTIVE';
                                        detStatus = 'Running'; // debe estar en otra validacion en caso de alerta!!!!!
                                    }
                                    else {
                                        classic = 'cancelled';
                                        textClass = 'inactive-danger';
                                        textActive = 'INACTIVE';
                                        detStatus = 'Stopped';// debe estar en otra validacion en caso de alerta!!!!!
                                    }
                                    return (
                                        <tr className='warning' key={`${index}`}>
                                            <td> {i} </td>
                                            <td> <b>{el['id']}</b> </td>
                                            <td> <b>{el['nickname']}</b> </td>
                                            <td>
                                                <div className={`tm-status-circle ${classic}`}></div>
                                                <em><b className={textClass}>{textActive}</b></em>
                                            </td>
                                            <td>
                                                <div className={`tm-status-circle ${classic}`}></div>
                                                <em><b className={textClass}>{detStatus}</b></em>
                                            </td>
                                            <td> <b>{el['registration_date'].split('T')[0]}</b> </td>
                                            <td> <b>{el['refresh_token']}</b> </td>
                                            <td>
                                                <button onClick={() => {
                                                    setDetentionStatus(detStatus);
                                                    setNickRT({ nickname: el['nickname'], refresh_token: el['refresh_token'] });
                                                    setOpenModal(true);
                                                }}>CLICK ME!!!</button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                    <Modal open={openModal}
                        onClose={() => setOpenModal(false)} nRT={nickRT} message={"No Message for the moment"}
                        detentionStatus={detentionStatus}
                    />
                </>
            }
        </>
    )
}

export default SellersList

