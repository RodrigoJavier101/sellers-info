import React from 'react'


const ModalTwo = ({ open, onClose, fetchOperations }) => {

    if (!open) return null;
    return (
        <div onClick={onClose} className='overlay'>
            {/* stop prppagation function */}
            <div onClick={(e) => {
                e.stopPropagation()
            }} className="modalContainer">

                <div className="modalRight">
                    <div className="content">
                    </div>
                    <div className="btnContainer">

                        <button></button>

                        <button className='btn btn-warning btn-block'
                            onClick={() => fetchOperations()}
                        >Analize</button>
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

export default ModalTwo


