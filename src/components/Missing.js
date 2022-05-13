import { Link } from "react-router-dom"


const Missing = () => {
    return (
        <div className="missing-body">
            <article className="missing-article">
                <h1 className="title_missing">Oops!</h1>
                <p className="sub_title_missing">Page Not Found</p>
                <Link className="btn btn-danger" to={-1}>Redirect</Link>
            </article>
        </div>
    )
}

export default Missing