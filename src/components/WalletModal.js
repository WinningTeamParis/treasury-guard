import React from 'react'
import './modalCss.css'

const WalletModal = ({open, closeModal}) => {
    if (!open) return null;
  return (
    <div className='modalBackground'>
        <div className='modalContainer'>
            <button onClick={() => closeModal(false)}>close</button>
            <div>Hello</div>
        </div>
    </div>
  )
}

export default WalletModal