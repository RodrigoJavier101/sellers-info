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


const ReportsUser = () => {
    return (
        <>
            <div id="main-collapse">
                <HeaderUser />
                <div className="" id="home">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <p className="text-black mt-5 mb-5">REPORTS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default ReportsUser