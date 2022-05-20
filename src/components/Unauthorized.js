import { useNavigate } from "react-router-dom"

const Unauthorized = () => {
    const navigate = useNavigate();

    const goBack = () => navigate('/');
    const goAuth = () => navigate('/auth');

    return (
        <div className="section-unauth-body">
            <section className="section-unauth">
                <h1 className="title_unauth">Unauthorized...</h1>
                <br />
                <p className="sub_title_unauth">You do not have access, so you can give your authorization or retry login.</p>

                <div className="flexGrow">
                    <button onClick={goAuth} className='btn btn-warning btn-block'>Seller Authorization</button>
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
