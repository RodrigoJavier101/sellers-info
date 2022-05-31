import React from 'react';
// import Background from '../components/Background';

const Auth = () => {
    const urlBase = 'https://global-selling.mercadolibre.com';
    const clientId = '3698739416306050';
    const redirectUri = 'http://181.212.18.51/';
    return (
        <>
            <center>
                {/* <Background /> */}
                <a
                    href={`${urlBase}/authorization?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}`}
                    className="btn-3d">Go to "Mercado Libre"</a>
                <br />
            </center>

        </>
    )
}

export default Auth