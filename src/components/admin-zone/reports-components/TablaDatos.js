import React
// , { useState }
 from 'react'
// import { useNavigate } from 'react-router-dom';

// import axios from '../../../api/axios'


const TablaDatos = ({ mlcMensaje, nameUser, rToken, isTablaDetalle, }) => {
    // const [rowD, setRowD] = useState({})
    // const style = useStyles()

    // const navigate = useNavigate()

    // const openModal = (indice) => {
    //     mlcMensaje['items'].forEach((el, indi) => {
    //         if (indi === indice) {
    //             if (el['ddd_inventory_id'] === '-')
    //                 setRowD({
    //                     inventory_id: [`${el['eee_variations_inventory_id']}`],
    //                     mlc_id: `${el['bbb_id']}`,
    //                     rToken: `${rToken}`,
    //                     seller_id: `${el['seller_id']}`,
    //                     user_id: `${el['mmm_owner_id']}`
    //                 })
    //             if (el['eee_variations_inventory_id'] === '-')
    //                 setRowD({
    //                     inventory_id: [`${el['ddd_inventory_id']}`],
    //                     mlc_id: `${el['bbb_id']}`,
    //                     rToken: `${rToken}`,
    //                     seller_id: `${el['seller_id']}`,
    //                     user_id: `${el['mmm_owner_id']}`
    //                 })
    //         }
    //     })
    //     setModal(!modal)
    // }

    // const fetchOperations = (usr_id, sell_Id, inventID, refToken, mkpl_id) => getOperations(usr_id, sell_Id, inventID, refToken, mkpl_id)

    // const getOperations = async (usr_id_, sell_I, inventI, refTok, mkpl) => {
    //     // closeModal()
    //     const operaciones = await axios.post(`getOperaciones`, { params: { usr_id_, sell_I, inventI, refTok, mkpl } })
    //     console.log(operaciones)
    //     await navigate('/analisis-operaciones')
    // }

    // const closeModal = () => setModal(!modal)

    // const capturarCheckUSD = () => {
    //     var check = document.getElementById('checkDetailTable')
    //     if (check.checked) {
    //         selectAll()
    //     } else if (!check.checked) {
    //         deselectAll()
    //     }
    // }

    // const selectAll = () => {
    //     const arrElements = Array.from(document.querySelectorAll('.input-ckeck'))
    //     for (let i = 0; i < arrElements.length; i++) {
    //         arrElements[i].checked = -1
    //         // alert(arrElements[i].checked)
    //     }
    // }

    // const deselectAll = () => {
    //     const arrElements = Array.from(document.querySelectorAll('.input-ckeck'))
    //     for (let i = 0; i < arrElements.length; i++) {
    //         arrElements[i].checked = 0
    //         // alert(arrElements[i].checked)
    //     }
    // }

    // const putDataRow = (index) => {
    //     return mlcMensaje['items'].map((el, indi) => {
    //         if (indi === index) return (<h6 key={`h6title${indi} `}>{el['title']}</h6>)
    //     })
    // }

    // const putPermaLink = (index) => {
    //     const link = mlcMensaje['items'].map((el, indi) => {
    //         if (indi === index && el['permalink']) {
    //             return (el['permalink'].trim())
    //         }
    //     })
    //     return link[index]
    // }

    // const modalBody = (
    //     <div className={style.modal}>
    //         <div align="center">
    //             <h2>Ir a analisis de las operaciones del Item
    //                 {/* {rowD['mlc_id']} */}
    //             </h2>
    //             {/* <h2>{rowD['inventory_id']}</h2> */}
    //             <Button onClick={() => fetchOperations(rowD['user_id'], rowD['seller_id'], rowD['inventory_id'], rowD['rToken'], rowD['mlc_id'])} color="primary">Analizar</Button>
    //             <Button onClick={closeModal} color="secondary">Cancelar</Button>
    //         </div>
    //     </div>)

    return (
        <section className='tablaDatos'>
            <table id='tabla' key={`tablekeymain`}>
                <thead key={`keytehead`}>
                    <tr className='tr-table'><th colSpan="100%"><h4 className='first-line-tr-h'>Datos items seleccionados</h4></th></tr>
                    <tr className='tr-table' key={`keyheader`}>
                        <th className='th-table' key={`keyth1`}><h4 className='h4-table'>N`</h4 ></th >
                        <th className='th-table' key={`keyth111`}><input id={`checkDetailTable`}
                            // onClick={capturarCheckUSD}
                             type="checkbox" name="" /></th>
                        <th className='th-table' key={`keyth2`}><h4 className='h4-table'>mlc</h4></th>
                        <th className='th-table' key={`keyth3`}><h4 className='h4-table'>cbt rel</h4></th>
                        <th className='th-table' key={`keyth4`}><h4 className='h4-table'>invent id</h4></th>
                        <th className='th-table' key={`keyth5`}><h4 className='h4-table'>invent id var</h4></th>
                        <th className='th-table' key={`keyth6`}><h4 className='h4-table'>cant disp</h4></th>
                        <th className='th-table' key={`keyth7`}><h4 className='h4-table'>cant disp var</h4></th>
                        <th className='th-table' key={`keyth8`}><h4 className='h4-table'>cant vend</h4></th>
                        <th className='th-table' key={`keyth9`}><h4 className='h4-table'>cant vend var</h4></th>
                        <th className='th-table' key={`keyth10`}><h4 className='h4-table'>precio</h4></th>
                        <th className='th-table' key={`keyth11`}><h4 className='h4-table'>precio var</h4></th>
                        <th className='th-table' key={`keyth13`}><h4 className='h4-table'>Analizar</h4></th>
                    </tr >
                </thead >
                <tbody key={`keybody_`} id={`keybody`}>
                    {mlcMensaje['items'].map((valor, index) => {
                        return (
                            <tr className='tr-table' key={`key${index}tr`}>
                                <td className='td-table' key={`keyindex`}>
                                    {index + 1}
                                </td>
                                <td className='td-table' key={`keyindexcheckbox`}>
                                    <input className='input-ckeck' id={`checkDetailTable${index}`} type="checkbox" name="" />
                                </td>
                                {Object.entries(valor).map((entry) => {
                                    const [key, value] = entry
                                    if (key === 'bbb_id') return (
                                        <td className='td-table' id={`bbb_id${index}`} key={`bbb_id${index}`}>
                                            <h4 className='h4-table' key={`h4bbb_id${value}`}>
                                                <span className="tooltip tooltip-effect-3">
                                                    <span className="tooltip-item"><a 
                                                    // href={putPermaLink(index)} 
                                                    target='blank_'>{value}</a></span>
                                                    <span className="tooltip-content clearfix">
                                                        {/* <img src="img/Euclid.png" alt='Imagen'></img> */}
                                                        <span className="tooltip-text">
                                                            {
                                                                // putDataRow(index)
                                                            }
                                                        </span>
                                                    </span>
                                                </span>
                                            </h4>
                                        </td>)
                                    if (key === 'ccc_cbt_item_id') return (<td className='td-table' id={`ccc_cbt_item_id${index}`} key={`ccc_cbt_item_id${index}`}><h4 className='h4-table' key={`h4ccc_cbt_item_id${value}`} id={`h4ccc_cbt_item_id${value}`}>{value}</h4></td>)
                                    if (key === 'ddd_inventory_id') return (<td className='td-table' id={`ddd_inventory_id${index}`} key={`ddd_inventory_id${index}`}><h4 className='h4-table' key={`h4ddd_inventory_id${value}`} id={`h4ddd_inventory_id${value}`}>{value}</h4></td>)
                                    if (key === 'eee_variations_inventory_id') return (<td className='td-table' id={`eee_variations_inventory_id${index}`} key={`eee_variations_inventory_id${index}`}><h4 className='h4-table' key={`h4eee_variations_inventory_id${index}`} id={`h4eee_variations_inventory_id${index}`}>{value}</h4></td>)
                                    if (key === 'fff_available_quantity') return (<td className='td-table' id={`fff_available_quantity${index}`} key={`fff_available_quantity${index}`}><h4 className='h4-table' key={`h4fff_available_quantity${index}`} id={`h4fff_available_quantity${index}`}>{value}</h4></td>)
                                    if (key === 'ggg_variations_available_quantity') return (<td className='td-table' id={`ggg_variations_available_quantity${index}`} key={`ggg_variations_available_quantity${index}`}><h4 className='h4-table' key={`h4ggg_variations_available_quantity${index}`} id={`h4ggg_variations_available_quantity${index}`}>{value}_</h4></td>)
                                    if (key === 'hhh_sold_quantity') return (<td className='td-table' id={`hhh_sold_quantity${index}`} key={`hhh_sold_quantity${index}`}><h4 className='h4-table' key={`h4hhh_sold_quantity${index}`} id={`h4hhh_sold_quantity${index}`}>{value}</h4></td>)
                                    if (key === 'iii_variations_sold_quantity') return (<td className='td-table' id={`iii_variations_sold_quantity${index}`} key={`iii_variations_sold_quantity${index}`}><h4 className='h4-table' key={`h4iii_variations_sold_quantity${index}`} id={`h4iii_variations_sold_quantity${index}`}>{value}_</h4></td>)
                                    if (key === 'jjj_price') return (<td className='td-table' id={`jjj_price${index}`} key={`jjj_price${index}`}><h4 className='h4-table' key={`h4jjj_price${index}`} id={`h4jjj_price${index}`}><strong>$</strong>{value}</h4></td>)
                                    if (key === 'kkk_variations_price') return (<td className='td-table' id={`kkk_variations_price${index}`} key={`kkk_variations_price${index}`}><h4 className='h4-table' key={`h4kkk_variations_price${index}`} id={`h4kkk_variations_price${index}`}><strong>$</strong>{value}</h4></td>)
                                })}<td className='td-table' key={`keytabla`}>
                                    {/* <button onClick={() => openModal(index)} className='button-table'>CLICK IT!!</button> */}
                                </td></tr>)
                    })}
                </tbody>
            </table >
            {/* <Modal open={modal} onClose={closeModal} >{modalBody}</Modal> */}
        </section >
    )
}

export default TablaDatos