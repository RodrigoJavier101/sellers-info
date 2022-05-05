import HeaderUser from './HeaderUser';
import Loader from '../Loader';
import $ from 'jquery'


// (() => {
//     $(window).on('load', function () {
//         $('.preloader').fadeOut();
//         $('#preloader').delay(550).fadeOut('slow');
//         $('body').delay(450).css({ 'overflow': 'visible' });
//     });
// }
// )();


function handleToggle(e) {
    e.preventDefault();
    $('#main-collapse').toggleClass("open")
    $('.sidebar').toggleClass("open");
    setTimeout(console.log('toggleing'), 200)
}

const ReportsUser = () => {
    return (
        <>
            <div id="main-collapse">
                {/* <Loader /> */}
                <HeaderUser handleToggle={handleToggle} />
                <div className="" id="home">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <p className="text-white mt-5 mb-5">REPORTS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default ReportsUser