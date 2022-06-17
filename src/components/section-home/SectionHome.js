import  React from 'react'
import { Link } from "react-router-dom";
import ButtonLogout from '../buttons/ButtonLogout'
import Background from '../../components/Background'

const SectionHome = ({ name, page, title }) => {
    return (
        <>
        <Background/>
        <div className="">
            <section className="section-home">
                <h2 className="sub_title_home">Welcome {name}!</h2>
                <br />
                <hr />
                <Link className="btn btn-success" to={page}><h2>To <b>{title}</b> page</h2></Link>
                <br />
                <hr />
                <ButtonLogout />
            </section>
        </div>
        </>
    )
}

export default SectionHome