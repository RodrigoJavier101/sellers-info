import React from 'react'
import HeaderAdmin from './HeaderAdmin'

const Admin = () => {
    return (
        <>
            <HeaderAdmin />
            <div id="main-collapse">
                {/* <Loader /> */}
                <div className="" id="home">
                    <div className="container">
                        <div className="col-12 tm-block-col">
                            <h2 className='tm-block-title'>Charts Administrator</h2>

                            {/* 

 <div>
                                <h2 className="tm-block-title">Sellers List</h2>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">ORDER NO.</th>
                                            <th scope="col">STATUS</th>
                                            <th scope="col">OPERATORS</th>
                                            <th scope="col">LOCATION</th>
                                            <th scope="col">DISTANCE</th>
                                            <th scope="col">START DATE</th>
                                            <th scope="col">EST DELIVERY DUE</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row"><b>#122349</b></th>
                                            <td>
                                                <div className="tm-status-circle moving">
                                                </div>Moving
                                            </td>
                                            <td><b>Oliver Trag</b></td>
                                            <td><b>London, UK</b></td>
                                            <td><b>485 km</b></td>
                                            <td>16:00, 12 NOV 2018</td>
                                            <td>08:00, 18 NOV 2018</td>
                                        </tr>
                                        <tr>
                                            <th scope="row"><b>#122348</b></th>
                                            <td>
                                                <div className="tm-status-circle pending">
                                                </div>Pending
                                            </td>
                                            <td><b>Jacob Miller</b></td>
                                            <td><b>London, UK</b></td>
                                            <td><b>360 km</b></td>
                                            <td>11:00, 10 NOV 2018</td>
                                            <td>04:00, 14 NOV 2018</td>
                                        </tr>
                                        <tr>
                                            <th scope="row"><b>#122347</b></th>
                                            <td>
                                                <div className="tm-status-circle cancelled">
                                                </div>Cancelled
                                            </td>
                                            <td><b>George Wilson</b></td>
                                            <td><b>London, UK</b></td>
                                            <td><b>340 km</b></td>
                                            <td>12:00, 22 NOV 2018</td>
                                            <td>06:00, 28 NOV 2018</td>
                                        </tr>
                                        <tr>
                                            <th scope="row"><b>#122346</b></th>
                                            <td>
                                                <div className="tm-status-circle moving">
                                                </div>Moving
                                            </td>
                                            <td><b>William Aung</b></td>
                                            <td><b>London, UK</b></td>
                                            <td><b>218 km</b></td>
                                            <td>15:00, 10 NOV 2018</td>
                                            <td>09:00, 14 NOV 2018</td>
                                        </tr>
                                        <tr>
                                            <th scope="row"><b>#122345</b></th>
                                            <td>
                                                <div className="tm-status-circle pending">
                                                </div>Pending
                                            </td>
                                            <td><b>Harry Ryan</b></td>
                                            <td><b>London, UK</b></td>
                                            <td><b>280 km</b></td>
                                            <td>15:00, 11 NOV 2018</td>
                                            <td>09:00, 17 NOV 2018</td>
                                        </tr>
                                        <tr>
                                            <th scope="row"><b>#122344</b></th>
                                            <td>
                                                <div className="tm-status-circle pending">
                                                </div>Pending
                                            </td>
                                            <td><b>Michael Jones</b></td>
                                            <td><b>London, UK</b></td>
                                            <td><b>218 km</b></td>
                                            <td>18:00, 12 OCT 2018</td>
                                            <td>06:00, 18 OCT 2018</td>
                                        </tr>
                                        <tr>
                                            <th scope="row"><b>#122343</b></th>
                                            <td>
                                                <div className="tm-status-circle moving">
                                                </div>Moving
                                            </td>
                                            <td><b>Timmy Davis</b></td>
                                            <td><b>London, UK</b></td>
                                            <td><b>218 km</b></td>
                                            <td>12:00, 10 OCT 2018</td>
                                            <td>08:00, 18 OCT 2018</td>
                                        </tr>
                                        <tr>
                                            <th scope="row"><b>#122342</b></th>
                                            <td>
                                                <div className="tm-status-circle moving">
                                                </div>Moving
                                            </td>
                                            <td><b>Oscar Phyo</b></td>
                                            <td><b>London, UK</b></td>
                                            <td><b>420 km</b></td>
                                            <td>15:30, 06 OCT 2018</td>
                                            <td>09:30, 16 OCT 2018</td>
                                        </tr>
                                        <tr>
                                            <th scope="row"><b>#122341</b></th>
                                            <td>
                                                <div className="tm-status-circle moving">
                                                </div>Moving
                                            </td>
                                            <td><b>Charlie Brown</b></td>
                                            <td><b>London, UK</b></td>
                                            <td><b>300 km</b></td>
                                            <td>11:00, 10 OCT 2018</td>
                                            <td>03:00, 14 OCT 2018</td>
                                        </tr>
                                        <tr>
                                            <th scope="row"><b>#122340</b></th>
                                            <td>
                                                <div className="tm-status-circle cancelled">
                                                </div>Cancelled
                                            </td>
                                            <td><b>Wilson Cookies</b></td>
                                            <td><b>London, UK</b></td>
                                            <td><b>218 km</b></td>
                                            <td>17:30, 12 OCT 2018</td>
                                            <td>08:30, 22 OCT 2018</td>
                                        </tr>
                                        <tr>
                                            <th scope="row"><b>#122339</b></th>
                                            <td>
                                                <div className="tm-status-circle moving">
                                                </div>Moving
                                            </td>
                                            <td><b>Richard Clamon</b></td>
                                            <td><b>London, UK</b></td>
                                            <td><b>150 km</b></td>
                                            <td>15:00, 12 OCT 2018</td>
                                            <td>09:20, 26 OCT 2018</td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>
*/}







                        </div>

                        <div className="row tm-content-row">
                            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 tm-block-col">
                                <div className="tm-bg-primary-dark tm-block">
                                    <h2 className="tm-block-title">Latest Hits</h2>
                                    <canvas id="lineChart"></canvas>
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 tm-block-col">
                                <div className="tm-bg-primary-dark tm-block">
                                    <h2 className="tm-block-title">Performance</h2>
                                    <canvas id="barChart"></canvas>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 tm-block-col">
                                <div className="tm-bg-primary-dark tm-block tm-block-taller">
                                    <h2 className="tm-block-title">Storage Information</h2>
                                    <div id="pieChartContainer">
                                        <canvas id="pieChart" className="chartjs-render-monitor" width="200" height="200"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Admin