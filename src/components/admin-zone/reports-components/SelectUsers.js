import React, { useState } from 'react'
import axios from '../../../api/axios';
import TablaDatosMlc from '../reports-components/TablaDatosMlc'


const SelectUsers = ({ listUsers, setOpenModal, setRowD }) => {
    const SINGLE_MKPL = '/api/users/singleMkpl';

    const [refresh, setRefresh] = useState('');
    const [mlc, setMlc] = useState('');
    const [listOfMlc, setListOfMlc] = useState({});

    const fetchSingleMkpl = async () => {
        try {
            const rt = await axios.post(SINGLE_MKPL,
                JSON.stringify({ refresh, mlc }),
                { headers: { 'Content-Type': 'application/json' }, }
            ).then(async res => res).catch(err => console.log(err));
            setListOfMlc(rt['data']);
            console.log(listOfMlc['items'])
        } catch (error) { console.log(`error 2`, error); }
    }

    return (
        <div className='selectUserwrapper'>
            <div className='selectWrapper'>
                <select
                    className='selectSelectUser'
                    defaultValue={'Opciones'}
                    name="selected"
                    id="selected"
                    onChange={e => {
                        const idName = e.target.selectedOptions[0].innerText.trim();
                        const idNameSelected = parseInt(idName.split('/')[1].trim());
                        listUsers.forEach(value => {
                            if (idNameSelected === (value['id'])) setRefresh(value['refresh_token']);
                        });
                    }}
                >
                    <option
                        className='option_users'
                        value='Opciones'
                        key={`key`}
                        disabled >Seleccionar usuario</option>
                    {listUsers.sort((a, b) => a['nickname'] > b['nickname']).map((value, index) => {
                        return (<option className='optionSelectUsers' key={`${index}`}>{value['nickname']} / {value['id']}
                        </option>);
                    })}
                </select>
                <button type='button' onClick={fetchSingleMkpl}>Search</button>
            </div>
            <div>
                <center>
                    <textarea name="mlc-text-area" id="mlc-text-area" cols="30" rows="10"
                        onChange={e => { setMlc(e.target.value.trim()); }}
                    ></textarea>
                </center>
            </div>
            <div>
                {
                    listOfMlc['items'] ?
                        <TablaDatosMlc
                            listOfMlc={listOfMlc}
                            setOpenModal={setOpenModal}
                            setRowD={setRowD}
                            rToken={refresh}
                        />
                        :
                        ''
                }
            </div>
        </div>
    )
}

export default SelectUsers