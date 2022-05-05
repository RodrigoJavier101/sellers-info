import React from 'react'
import HeaderAdmin from './HeaderAdmin'
import $ from 'jquery'

function handleToggle(e) {
    e.preventDefault();
    $('#main-collapse').toggleClass("open")
    $('.sidebar').toggleClass("open");
    setTimeout(console.log('toggleing'), 200)
}
const Accounts = () => {
    return (
        <>
            <div id="main-collapse">
                {/* <Loader /> */}
                <HeaderAdmin handleToggle={handleToggle} />
                <div className="" id="home">
                    <div className="container">
                        <div id="main-collapse">
                            <HeaderAdmin handleToggle={handleToggle} />
                            <div className="" id="home">
                                <div className="container">
                                    <div className="col-12 tm-block-col">
                                        <h2 className='tm-block-title'>Accounts</h2>
                                        <div className="section layout_padding">
                                            <div className="container">
                                                <div className="row margin-top_30">

                                                    <div className="col-sm-6 col-md-4">
                                                        <div className="service_blog">
                                                            <div className="service_icons">
                                                                <img width="75" height="75" src="../images/img-01.jpg" alt="#"></img>
                                                            </div>
                                                            <div className="full">
                                                                <h4>DIGITAL marketing</h4>
                                                            </div>
                                                            <div className="full">
                                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                                                    Ipsum
                                                                    has been the industry's standard dummy text ever since</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-sm-6 col-md-4">
                                                        <div className="service_blog">
                                                            <div className="service_icons">
                                                                <img width="75" height="75" src="../images/img-01.jpg" alt="#"></img>
                                                            </div>
                                                            <div className="full">
                                                                <h4>DIGITAL marketing</h4>
                                                            </div>
                                                            <div className="full">
                                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                                                    Ipsum
                                                                    has been the industry's standard dummy text ever since</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-sm-6 col-md-4">
                                                        <div className="service_blog">
                                                            <div className="service_icons">
                                                                <img width="75" height="75" src="../images/img-01.jpg" alt="#"></img>
                                                            </div>
                                                            <div className="full">
                                                                <h4>DIGITAL marketing</h4>
                                                            </div>
                                                            <div className="full">
                                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                                                    Ipsum
                                                                    has been the industry's standard dummy text ever since</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6 col-md-4">
                                                        <div className="service_blog">
                                                            <div className="service_icons">
                                                                <img width="75" height="75" src="../images/img-01.jpg" alt="#"></img>
                                                            </div>
                                                            <div className="full">
                                                                <h4>DIGITAL marketing</h4>
                                                            </div>
                                                            <div className="full">
                                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                                                    Ipsum
                                                                    has been the industry's standard dummy text ever since</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-sm-6 col-md-4">
                                                        <div className="service_blog">
                                                            <div className="service_icons">
                                                                <img width="75" height="75" src="../images/img-01.jpg" alt="#"></img>
                                                            </div>
                                                            <div className="full">
                                                                <h4>DIGITAL marketing</h4>
                                                            </div>
                                                            <div className="full">
                                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                                                    Ipsum
                                                                    has been the industry's standard dummy text ever since</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-sm-6 col-md-4">
                                                        <div className="service_blog">
                                                            <div className="service_icons">
                                                                <img width="75" height="75" src="../images/img-01.jpg" alt="#"></img>
                                                            </div>
                                                            <div className="full">
                                                                <h4>DIGITAL marketing</h4>
                                                            </div>
                                                            <div className="full">
                                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                                                    Ipsum
                                                                    has been the industry's standard dummy text ever since</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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

export default Accounts