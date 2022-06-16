import React, { useState } from 'react'

const Modal = ({ open, onClose, nRT, message, detentionStatus }) => {

    let btnText = "";
    let classBtn = "";

    if (detentionStatus === "Stopped") {
        btnText = "Start Seller";
        classBtn = 'btn btn-success btn-block';
    }

    if (detentionStatus === "Running") {
        btnText = "Stop Seller"
        classBtn = 'btn btn-danger btn-block';
    };

    const pausedEffect = () => {
        if (detentionStatus === "Stopped") toStart('Startting Seller')
        if (detentionStatus === "Running") toStop('Stopping Seller')
    }

    const toStop = (m) => {
        alert(m)
    }

    const toStart = (m) => {
        alert(m)
    }

    if (!open) return null;
    return (
        <div onClick={onClose} className='overlay'>
            {/* stop prppagation function */}
            <div onClick={(e) => {
                e.stopPropagation()
            }} className="modalContainer">

                <div className="modalRight">
                    <div className="content">
                        <h3>{nRT.nickname}</h3>
                        <p>{nRT.refresh_token}</p>
                        <p>{message}</p>
                    </div>
                    <div className="btnContainer">

                        <button
                            onClick={() => {
                                pausedEffect()
                            }}
                            className={classBtn}>
                            {btnText}
                        </button>

                        <button className='btn btn-warning btn-block'>
                            Analize Data
                        </button>
                    </div>
                    <div className="">
                        <center>
                            <button onClick={onClose} className='btn btn-light'>
                                CANCEL
                            </button>
                        </center>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
