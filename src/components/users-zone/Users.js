import HeaderUser from './HeaderUser';
// import Loader from '../Loader';


// (() => {
//     $(window).on('load', function () {
//         $('.preloader').fadeOut();
//         $('#preloader').delay(550).fadeOut('slow');
//         $('body').delay(450).css({ 'overflow': 'visible' });
//     });
// }
// )();

const Users = () => {
    return (
        <>
            <div id="main-collapse">
                {/* <Loader /> */}
                <HeaderUser />

                <div className="" id="home">

                    <div className="container">

                        <div className="col-12 tm-block-col">
                            <h2 className='tm-block-title'>Charts</h2>

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

            </div>
        </>

    )
}

export default Users