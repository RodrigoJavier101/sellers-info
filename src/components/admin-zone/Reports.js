import React, { useState } from 'react'
import HeaderAdmin from '../admin-zone/HeaderAdmin'
import Background from '../Background'
import LoaderButtons from '../LoaderButtons'
import SelectUsers from './reports-components/SelectUsers'
import Modal from './modal/ModalTwo'
import { useNavigate } from 'react-router-dom'
import axios from '../../api/axios';

const Reports = () => {
    const navigate = useNavigate()

    const USERS_GRANTED_ACTIVE_LIST = '/api/users/listGrantedActive'
    const GET_OPERATIONS = '/api/users/getOperaciones';
    const [rowD, setRowD] = useState({ usr_id: '', sell_Id: '', inventID: '', refToken: '', mkpl_id: '' })
    const [isLoader, setIsLoader] = useState(true);
    const [listUsers, setListusers] = useState([]);
    const [openModal, setOpenModal] = useState(false);


    const fetchOperations = () => getOperations()

    const getOperations = async () => {
        const from = "/analisis_operaciones";

        
        const operaciones = await axios.post(GET_OPERATIONS,
            JSON.stringify({ usr_id: rowD['user_id'], sell_Id: rowD['seller_id'], inventID: rowD['inventory_id'], refToken: rowD['rToken'], mkpl_id: rowD['mlc_id'] }),
            { headers: { 'Content-Type': 'application/json' }, }
        );
       
        console.log(`OPERACIONES`, operaciones);
        
        navigate(from, { replace: true });
    }


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
                                setOpenModal={setOpenModal}
                                setRowD={setRowD}
                            ></SelectUsers>
                        </div>

                    </div>
                    <Modal
                        open={openModal}
                        onClose={() => setOpenModal(false)}
                        fetchOperations={fetchOperations}
                    />
                </>
            }
        </>
    )
}

export default Reports