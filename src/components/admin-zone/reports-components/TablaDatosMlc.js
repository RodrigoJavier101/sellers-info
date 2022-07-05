import React from 'react'

const TablaDatosMlc = ({ listOfMlc, setOpenModal, setRowD , rToken}) => {

    const putPermaLink = (index) => {
        const link = listOfMlc['items'].map((el, indi) => {
            if (indi === index && el['permalink']) { return (el['permalink'].trim()) }
            else { return '' }
        })
        return link[index]
    }

    const capturarCheckUSD = () => {
        var check = document.getElementById('checkDetailTable')
        if (check.checked) { selectAll() }
        else if (!check.checked) { deselectAll() }
    }

    const selectAll = () => {
        const arrElements = Array.from(document.querySelectorAll('.input-ckeck'))
        for (let i = 0; i < arrElements.length; i++)
            arrElements[i].checked = -1
    }

    const deselectAll = () => {
        const arrElements = Array.from(document.querySelectorAll('.input-ckeck'))
        for (let i = 0; i < arrElements.length; i++)
            arrElements[i].checked = 0
    }

    const putDataRow = (index) => {
        return listOfMlc['items'].map((el, indi) => {
            if (indi === index)
                return (<h6 key={`h6title${indi} `}>{el['title']}</h6>)
        })
    }


    const captureDataRow = (indice) => {
        listOfMlc['items'].forEach((el, indi) => {
            if (indi === indice) {
               if (el['ddd_inventory_id'] === '-')
                  setRowD({
                     inventory_id: `${el['eee_variations_inventory_id']}`,
                     mlc_id: `${el['bbb_id']}`,
                     rToken: `${rToken}`,
                     seller_id: `${el['seller_id']}`,
                     user_id: `${el['mmm_owner_id']}`
                  })
               if (el['eee_variations_inventory_id'] === '-')
                  setRowD({
                     inventory_id: `${el['ddd_inventory_id']}`,
                     mlc_id: `${el['bbb_id']}`,
                     rToken: `${rToken}`,
                     seller_id: `${el['seller_id']}`,
                     user_id: `${el['mmm_owner_id']}`
                  })
            }
         });
         setOpenModal(true);
    }

    return (
        <>
            <section className='tablaDatos'>
                <div align='center'>
                    <button key={`buttongetexcel`}
                    // onClick={() => exportToCSV('arrVariaciones', `Informe de Items Mercado Libre MLC: ${nameUser} `)}
                    >Exportar a Excel</button><br />
                </div>
                <table id='tabla' key={`tablekeymain`}>
                    <thead key={`keytehead`}>
                        <tr className='tr-table'><th colSpan="100%"><h4 className='first-line-tr-h'>Datos items seleccionados</h4></th></tr>
                        <tr className='tr-table' key={`keyheader`}>
                            <th className='th-table' key={`keyth1`}><h4 className='h4-table'>N`</h4 ></th >
                            <th className='th-table' key={`keyth111`}><input id={`checkDetailTable`}
                                onClick={capturarCheckUSD} type="checkbox" name=""
                            /></th>
                            <th className='th-table' key={`keyth2`}><h4 className='h4-table'>mlc</h4></th>
                            <th className='th-table' key={`keyth3`}><h4 className='h4-table'>cbt parent</h4></th>
                            <th className='th-table' key={`keyth4`}><h4 className='h4-table'>invent id</h4></th>
                            <th className='th-table' key={`keyth5`}><h4 className='h4-table'>invent id var</h4></th>
                            <th className='th-table' key={`keyth6`}><h4 className='h4-table'>cant avail</h4></th>
                            <th className='th-table' key={`keyth7`}><h4 className='h4-table'>cant avail var</h4></th>
                            <th className='th-table' key={`keyth8`}><h4 className='h4-table'>cant sold</h4></th>
                            <th className='th-table' key={`keyth9`}><h4 className='h4-table'>cant sold var</h4></th>
                            <th className='th-table' key={`keyth10`}><h4 className='h4-table'>price</h4></th>
                            <th className='th-table' key={`keyth11`}><h4 className='h4-table'>price var</h4></th>
                            <th className='th-table' key={`keyth12`}><h4 className='h4-table'>status</h4></th>
                            <th className='th-table' key={`keyth13`}><h4 className='h4-table'>Analize</h4></th>
                        </tr >
                    </thead >
                    <tbody key={`keybody_`} id={`keybody`}>
                        {listOfMlc['items'].map((valor, index) => {
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
                                                        <span className="tooltip-item">
                                                            <a href={putPermaLink(index)} target='blank_'>{value}
                                                            </a></span>
                                                        <span className="tooltip-content clearfix">
                                                            {/* <img src="img/Euclid.png" alt='Imagen'></img> */}
                                                            <span className="tooltip-text">
                                                                {
                                                                    putDataRow(index)
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
                                        if (key === 'status') return (<td className='td-table' id={`status${index}`} key={`status${index}`}><h4 className='h4-table' key={`status${index}`} id={`status${index}`}><strong></strong>{value}</h4></td>)
                                    })}<td className='td-table' key={`keytabla`}>
                                        <button type='button' onClick={() => { captureDataRow(index); }}>CLICK</button>
                                    </td></tr>)
                        })}
                    </tbody>
                </table >
            </section >
        </>
    )
}

export default TablaDatosMlc