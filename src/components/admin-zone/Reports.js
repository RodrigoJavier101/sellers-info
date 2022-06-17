import React, { useEffect, useState } from 'react'
import HeaderAdmin from '../admin-zone/HeaderAdmin'
import Background from '../Background'
import TablaDatos from './reports-components/TablaDatos'
import SelectUsers from './reports-components/SelectUsers'
import axios from '../../api/axios';

const Reports = () => {
    // const [isTablaDetalle, setisTablaDetalle] = useState(false);
    // const [mlcMensaje, setmlcMensaje] = useState([]);

    // const [cantItems, setcantItems] = useState('');

    // const [listUsers, setListusers] = useState([]);
    // const [listUsersDB, setListusersDB] = useState([]);
    // const [rToken, setrToken] = useState('');
    // const [mlc, setmlc] = useState('');
    // const [idUser, setidUser] = useState('');
    // const [nameUser, setnameUser] = useState('');

    // const getSellersList = async () => {
    //     try {
    //         return await axios.post(`/getAllUSers`)
    //             .then(async res => {
    //                 setListusers(res['data'][0]);
    //                 setListusersDB(res['data'][1]);
    //             })
    //             .catch(err => console.log('error en axios server', err));
    //     } catch (error) {
    //         console.log(`error en el try catch`, error);
    //     }
    // }

    // const getMlc = (e) => setmlc(e.target.value.trim());

    // const getidUser = (id) => setidUser(id);

    const fetchSingleMkpl = async () => {
        try {
            // listUsersDB.forEach(el => {
            //     if (el['user_id'] === idUser) setrToken(el['refresh_token']);
            // });

            // if (rToken && mlc && !(document.querySelector('#inputmlc').value === '')) {
            // if (rToken.length > 0) {
            // console.log(rToken, mlc);
            // await axios.post(`singleMkpl`, { params: { rToken, mlc, nameUser } })
            //     .then(async res => await setmlcMensaje(res['data'])).catch(err => console.log(err));
            // if (mlcMensaje) { setisTablaDetalle(true); }

            // setrToken('');
            // setnameUser('');
            // setmlc('');

            // } else { console.log('?????'); }
        } catch (error) { console.log(`error 2`, error); }
    }


    // useEffect(() => getSellersList(), []);

    /*  useEffect(() => socket.on('recibe_num', data => {
        console.log(data);
        setcantItems(data);
     }), [socket]); */

    // useEffect(() => socket.on('recibe_mensaje', data => {
    //    console.log(data, `-----`);
    //    setcantItems(data);
    // }), [socket]);

    // useEffect(() => socket.on('recibe_lista_por_partes', data => {
    //    if (data) {
    //       // setdatosMkplAll(dat => [...dat, ...data['arr']])
    //       // if (data['count'] === 3) {
    //       // }
    //       console.log(data, `DATA DEL SOCKET`)
    //    }
    // }), [])

    // useEffect(() => {
    //    const socket = ioClient(`${urlServer}`)
    //    socket.connect()
    //    // socket.on('recibe-data', (data) => setdatosMkplAll((dat) => [...dat, data]))
    //    // socket.on('recibe-data', (data) => setdatosMkplAll(data))
    //    socket.on('recibe_data', data => console.log(data, `DATA`))
    //    // socket.on('recibe-num', data => {
    //    // console.log(cantItems, `----- cantItems`)
    //    // })
    //    return () => socket.disconnect()
    // })
    // 



    return (
        <>
            <HeaderAdmin />
            <Background />
{/* 
            <div className='bigWrapper'>
                <div align='center'>
                    <br />
                    <h1>Informes</h1>
                    <br />
                    <label htmlFor="">{idUser}</label><br />
                    <label htmlFor="">{rToken}</label>
                </div>
                <div className='selectUsersCss wrap'>
                    <SelectUsers
                        setnameUser={setnameUser}
                        listUsers={listUsers}
                        getidUser={getidUser}
                        idUser={idUser}
                        fetchSingleMkpl={fetchSingleMkpl}
                        getMlc={getMlc}
                    ></SelectUsers>
                </div>
                <header id="header">
                    <div className="">
                        <div className='tablaDatosCss'>
                            <TablaDatos
                                mlcMensaje={mlcMensaje}
                                nameUser={nameUser}
                                rToken={rToken}
                                isTablaDetalle={isTablaDetalle}
                            ></TablaDatos>
                        </div>
                    </div >
                </header>
            </div> */}

        </>
    )
}

export default Reports