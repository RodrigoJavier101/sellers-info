import  React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import Background from '../components/Background'
import LoaderButtons from '../components/LoaderButtons'

const Unauthorized = () => {
    const navigate = useNavigate();
    const [isButtonPress2, setIsButtonPress2] = useState(false);
    const goBack = () => navigate('/');
    // const goAuth = () => navigate('/auth');

    const urlBase = 'https://global-selling.mercadolibre.com';
    const clientId = '3698739416306050';
    const redirectUri = 'https://auth.sellers-info.cl';
    const urlFinal = `${urlBase}/authorization?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}`;

    return (
        <>
            <Background />
            <section className="section-unauth">
                <h1 className="title_unauth">Unauthorized...</h1>
                <br />
                <p className="sub_title_unauth">You do not have access, so you can give your authorization or retry login.</p>

                <div className="flexGrow">
                    {isButtonPress2 ? <LoaderButtons /> : <></>}
                    <a onClick={() => {
                        setIsButtonPress2(true);
                        setTimeout(() => setIsButtonPress2(false), 6000);
                    }}
                        href={`${urlFinal}`} className='btn btn-warning btn-block'>Seller Authorization</a>
                </div>
                <hr />
                <div className="flexGrow">
                    <button className="btn btn-danger btn-block" onClick={goBack}>Go Back to Login</button>
                </div>
            </section>
        </>

    )
}

export default Unauthorized
