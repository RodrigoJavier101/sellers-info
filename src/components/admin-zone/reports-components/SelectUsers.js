import React from 'react'

const SelectUsers = ({ setnameUser, listUsers, getidUser, idUser, fetchSingleMkpl, getMlc, }) => {
    return (
        <div className='selectUserwrapper'>
            <div className='selectWrapper'>
                <select
                    className='selectSelectUser'
                    defaultValue={'Opciones'}
                    name="selected"
                    id="selected"
                    onChange={e => {
                        setnameUser(e.target.selectedOptions[0].innerText.trim())
                        const name = e.target.selectedOptions[0].innerText.trim()
                        listUsers.forEach(value => {
                            if (name.includes(value['nickname']))
                                getidUser(`${String(value['id']).trim()}`);
                        });
                    }}>
                    <option
                        className='option_users'
                        value='Opciones'
                        key={`key`}
                        disabled >Seleccionar usuario</option>
                    {/* {arrLista.map((value, index) => {
                        return (<option className='optionSelectUsers' key={`${index}`}>{value}</option>);
                    })} */}
                </select>
            </div>
            <div className='selectWrapper'>
                <button
                    className='button-selectuser-item'
                    key={`buttonfetchsingle`}
                    onClick={() => fetchSingleMkpl()}>
                </button>
                {/*  <ArrowLeft />
           <a className="tooltip_" href="#!"><AddCircleSharp onClick={() => console.log('hola')} /><span className="tooltip-content_"><span className="tooltip-text_"><span className="tooltip-inner_">Click to reset table</span></span></span></a>
           <label htmlFor="">&nbsp;&nbsp;Info de los ítems seleccionados</label><ArrowRight /><input className='inputSelectUser' onChange={(e) => {
              getMlc(e)
           }}
              id='inputmlc' type="text" name="inputmkplitems" placeholder='Marketplace Items' />&nbsp;&nbsp; */}
                {/* <button className='button-selectuser-item' onClick={() => {
              fetchSingleMkpl()
           }}><Search className='iconoboton' /></button> */}
            </div>
            <div align='center'>
                {/* <label> __{cantItems}__ </label> */}
            </div>
        </div>
    )
}

export default SelectUsers