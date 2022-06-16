import React from 'react'

const Modal = ({ open, onClose }) => {
    if (!open) return null;
    return (
        <div onClick={onClose} className='overlay'>
            {/* stop prppagation function */}
            <div onClick={(e) => {
                e.stopPropagation()
            }} className="modalContainer">

                <div className="modalRight">
                    <p onClick={onClose} className="closeBtn">X</p>
                    <div className="content">
                        <p>Hola</p>
                    </div>
                    <div className="btnContainer">
                        <button className='btn btn-danger btn-block'>
                            Pause Seller
                        </button>
                        <button className='btn btn-success btn-block'>
                            Analize Data
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
