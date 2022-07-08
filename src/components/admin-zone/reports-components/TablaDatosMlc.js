import React from 'react'

const TablaDatosMlc = ({ listOfMlc, setOpenModal, setRowD, rToken }) => {

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
                        <tr className='tr-table' key={`keyheader`}>
                            <th className='th-table' key={`keyth1`}><h6 className='h6-table'>N`</h6 ></th >
                            <th className='th-table' key={`keyth111`}><input id={`checkDetailTable`}
                                onClick={capturarCheckUSD} type="checkbox" name=""
                            /></th>
                            <th className='th-table' key={`keyth2`}><h6 className='h6-table'>mlc</h6></th>
                            <th className='th-table' key={`keyth3`}><h6 className='h6-table'>cbt parent</h6></th>
                            <th className='th-table' key={`keyth4`}><h6 className='h6-table'>invent id</h6></th>
                            <th className='th-table' key={`keyth5`}><h6 className='h6-table'>invent id var</h6></th>
                            <th className='th-table' key={`keyth6`}><h6 className='h6-table'>quant avail</h6></th>
                            <th className='th-table' key={`keyth7`}><h6 className='h6-table'>quant avail var</h6></th>
                            <th className='th-table' key={`keyth8`}><h6 className='h6-table'>quant sold</h6></th>
                            <th className='th-table' key={`keyth9`}><h6 className='h6-table'>quant sold var</h6></th>
                            <th className='th-table' key={`keyth10`}><h6 className='h6-table'>price</h6></th>
                            <th className='th-table' key={`keyth11`}><h6 className='h6-table'>price var</h6></th>
                            <th className='th-table' key={`keyth12`}><h6 className='h6-table'>status</h6></th>
                            <th className='th-table' key={`keyth13`}><h6 className='h6-table'>Analize</h6></th>
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
                                                <h6 className='h6-table' key={`h6bbb_id${value}`}>
                                                    <span className="tooltip tooltip-effect-3">
                                                        <span className="tooltip-item">
                                                            <a href={putPermaLink(index)} target='blank_'>{value}</a>
                                                        </span>
                                                        <span className="tooltip-content clearfix">
                                                            <span className="tooltip-text">
                                                                {
                                                                    putDataRow(index)
                                                                }
                                                            </span>
                                                        </span>
                                                    </span>
                                                </h6>
                                            </td>)
                                        if (key === 'ccc_cbt_item_id') return (<td className='td-table' id={`ccc_cbt_item_id${index}`} key={`ccc_cbt_item_id${index}`}><h6 className='h6-table' key={`h6ccc_cbt_item_id${value}`} id={`h6ccc_cbt_item_id${value}`}>{value}</h6></td>)
                                        if (key === 'ddd_inventory_id') return (<td className='td-table' id={`ddd_inventory_id${index}`} key={`ddd_inventory_id${index}`}><h6 className='h6-table' key={`h6ddd_inventory_id${value}`} id={`h6ddd_inventory_id${value}`}>{value}</h6></td>)
                                        if (key === 'eee_variations_inventory_id') return (<td className='td-table' id={`eee_variations_inventory_id${index}`} key={`eee_variations_inventory_id${index}`}><h6 className='h6-table' key={`h6eee_variations_inventory_id${index}`} id={`h6eee_variations_inventory_id${index}`}>{value}</h6></td>)
                                        if (key === 'fff_available_quantity') return (<td className='td-table' id={`fff_available_quantity${index}`} key={`fff_available_quantity${index}`}><h6 className='h6-table' key={`h6fff_available_quantity${index}`} id={`h6fff_available_quantity${index}`}>{value}</h6></td>)
                                        if (key === 'ggg_variations_available_quantity') return (<td className='td-table' id={`ggg_variations_available_quantity${index}`} key={`ggg_variations_available_quantity${index}`}><h6 className='h6-table' key={`h6ggg_variations_available_quantity${index}`} id={`h6ggg_variations_available_quantity${index}`}>{value}_</h6></td>)
                                        if (key === 'hhh_sold_quantity') return (<td className='td-table' id={`hhh_sold_quantity${index}`} key={`hhh_sold_quantity${index}`}><h6 className='h6-table' key={`h6hhh_sold_quantity${index}`} id={`h6hhh_sold_quantity${index}`}>{value}</h6></td>)
                                        if (key === 'iii_variations_sold_quantity') return (<td className='td-table' id={`iii_variations_sold_quantity${index}`} key={`iii_variations_sold_quantity${index}`}><h6 className='h6-table' key={`h6iii_variations_sold_quantity${index}`} id={`h6iii_variations_sold_quantity${index}`}>{value}_</h6></td>)
                                        if (key === 'jjj_price') return (<td className='td-table' id={`jjj_price${index}`} key={`jjj_price${index}`}><h6 className='h6-table' key={`h6jjj_price${index}`} id={`h6jjj_price${index}`}><strong>$</strong>{value}</h6></td>)
                                        if (key === 'kkk_variations_price') return (<td className='td-table' id={`kkk_variations_price${index}`} key={`kkk_variations_price${index}`}><h6 className='h6-table' key={`h6kkk_variations_price${index}`} id={`h6kkk_variations_price${index}`}><strong>$</strong>{value}</h6></td>)
                                        if (key === 'status') return (<td className='td-table' id={`status${index}`} key={`status${index}`}><h6 className='h6-table' key={`status${index}`} id={`status${index}`}><strong></strong>{value}</h6></td>)
                                    })}
                                    <td className='td-table' key={`keytabla`}>
                                        <button type='button' onClick={() => { captureDataRow(index); }}>CLICK</button>
                                    </td>
                                </tr>)
                        })}
                    </tbody>
                </table >
            </section >
        </>
    )
}

export default TablaDatosMlc