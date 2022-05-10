import { useNavigate } from "react-router-dom"

const Unauthorized = () => {
    const navigate = useNavigate();

    const goBack = () => navigate('/login');

    return (
        <div className="section-unauth-body">
            <section className="section-unauth">
                <h1 className="title_unauth">Unauthorized...</h1>
                <br />
                <p className="sub_title_unauth">You do not have access to the requested page.</p>
                <div className="flexGrow">
                    <button className="btn btn-danger btn-lg" onClick={goBack}>Go Back</button>
                </div>
            </section>
        </div>
    )
}

export default Unauthorized
