import React from 'react'
import JQuery from 'jquery'

function handleToggle(e) {
    e.preventDefault();
    JQuery('#main-collapse').toggleClass("open");
    JQuery('.sidebar').toggleClass("open");
    setTimeout(() => { }, 200);
}

const NavToggleButton = () => {

    return (
        <>
            <div className="navbar navbar-default visible-xs">
                <button type="button" className="navbar-toggle collapsed" onClick={(e) => handleToggle(e)}>
                    {/* <span className="sr-only"></span> */}
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
            </div>
        </>
    )
}

export default NavToggleButton




