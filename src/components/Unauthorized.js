import { useNavigate } from "react-router-dom"

const Unauthorized = () => {
    const navigate = useNavigate();

    const goBack = () => navigate('/');
    // const goAuth = () => navigate('/auth');

    const urlBase = 'https://global-selling.mercadolibre.com';
    const clientId = '3698739416306050';
    const redirectUri = 'https://auth.sellers-info.cl';
    const urlFinal = `${urlBase}/authorization?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}`;

    return (
        <div className="section-unauth-body">
            <section className="section-unauth">
                <h1 className="title_unauth">Unauthorized...</h1>
                <br />
                <p className="sub_title_unauth">You do not have access, so you can give your authorization or retry login.</p>

                <div className="flexGrow">
                    {/* <button onClick={goAuth} className='btn btn-warning btn-block'>Seller Authorization</button> */}
                    <a href={`${urlFinal}`} className='btn btn-warning btn-block'>Seller Authorization</a>
                </div>
                <hr />
                <div className="flexGrow">
                    <button className="btn btn-danger btn-block" onClick={goBack}>Go Back to Login</button>
                </div>
            </section>
        </div>
    )
}

export default Unauthorized
