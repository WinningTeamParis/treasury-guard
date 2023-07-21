import React, { useState } from 'react'
import Copy from '../svg/CopySVG'
import Plus from '../svg/PlusSVG'
import Graph from './Graph'

import { Progress } from 'flowbite-react';

import { ReactComponent as Weth } from './weth.svg';
import WalletModal from './WalletModal';

export default function Main() {

  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <WalletModal open={openModal} closeModal={setOpenModal}/>

      <div style={{marginTop: 30, position:'relative', display: 'flex'}}>
          <div style={{}}>
            <h4>Chest Address</h4>
            <div style={{display:'flex'}}>
              <h2>0x987...7621</h2>
              <button style={{marginLeft: 10, border: 'none', backgroundColor: 'transparent', cursor: 'pointer'}}>
                  <Copy className="address" />
              </button>
            </div>
          </div>
          <div style={{position:'absolute', right: 20, bottom: 20}}>
            <div style={{display: 'flex', gap: 20}}>
              <button onClick={() => setOpenModal(!openModal)} style={{borderRadius: '4px', cursor:'pointer', display: 'flex', gap:5, padding: '8px 16px', justifyContent: 'center', alignItems: 'center', border: '1px solid var(--text-secondary, rgba(0, 26, 76, 0.60))', backgroundColor:'transparent'}}>
                  <Plus/>
                  Wallet Connect
              </button>

              <button style={{borderRadius: '4px', cursor:'pointer', display: 'flex', gap:5, padding: '8px 16px', justifyContent: 'center', alignItems: 'center', border: '1px solid var(--text-secondary, rgba(0, 26, 76, 0.60))', backgroundColor:'transparent'}}>
                  <Plus/>
                  Deposit
              </button>
              <button style={{borderRadius: '4px', cursor:'pointer', display: 'flex', gap:5, padding: '8px 16px', justifyContent: 'center', alignItems: 'center', border: '1px solid var(--text-secondary, rgba(0, 26, 76, 0.60))', backgroundColor:'transparent'}}>
                  <Plus/>
                  Withdraw
              </button>
            </div>
          </div>
      </div>
      <div style={{display:'flex', gap: 20}}>
        <div style={{backgroundColor:'#F7F9FB', width:'50%', borderRadius: 5, padding:12, position:'relative'}}>
          <div style={{display:'flex', width:'100%', alignItems:'center'}}>
            <h3>Price Chart</h3>
            <div style={{display:'flex', right: 20, position:'absolute'}}>
              <button style={{borderTopLeftRadius: '4px', borderBottomLeftRadius: '4px', borderRight: 'none',cursor:'pointer', display: 'flex', gap:5, padding: '8px 16px', justifyContent: 'center', alignItems: 'center', border: '1px solid var(--text-secondary, rgba(0, 26, 76, 0.60))', backgroundColor:'transparent'}}>
                  Team Balance
              </button>
              <button style={{borderTopRightRadius: '4px', borderBottomRightRadius: '4px', cursor:'pointer', display: 'flex', gap:5, padding: '8px 16px', justifyContent: 'center', alignItems: 'center', border: '1px solid var(--text-secondary, rgba(0, 26, 76, 0.60))', backgroundColor:'transparent'}}>
                  Your Share
              </button>
            </div>
          </div>

          <div style={{display:'flex', borderBottom: '1px solid gray'}}>
            <button style={{borderBottom: '2px solid black', borderLeft:'none',borderTop:'none',borderRight:'none',cursor:'pointer', display: 'flex', gap:5, padding: '8px 16px', justifyContent: 'center', alignItems: 'center', backgroundColor:'transparent'}}>
                Weekly
            </button>
            <button style={{borderBottom: 'none', borderLeft:'none',borderTop:'none',borderRight:'none',cursor:'pointer', display: 'flex', gap:5, padding: '8px 16px', justifyContent: 'center', alignItems: 'center', backgroundColor:'transparent'}}>
                Monthly
            </button>
            <button style={{borderBottom: 'none', borderLeft:'none',borderTop:'none',borderRight:'none',cursor:'pointer', display: 'flex', gap:5, padding: '8px 16px', justifyContent: 'center', alignItems: 'center', backgroundColor:'transparent'}}>
                3 Months
            </button>
          </div>

          <Graph/>
        </div>
        <div style={{backgroundColor:'#F7F9FB', width:'50%', borderRadius: 5, padding:12, position: 'relative'}}>
          <div style={{display:'flex', width:'100%', alignItems:'center'}}>
            <h3>Asset Allocation</h3>
            <div style={{display:'flex', right: 20, position:'absolute'}}>
              <button style={{borderTopLeftRadius: '4px', borderBottomLeftRadius: '4px', borderRight: 'none',cursor:'pointer', display: 'flex', gap:5, padding: '8px 16px', justifyContent: 'center', alignItems: 'center', border: '1px solid var(--text-secondary, rgba(0, 26, 76, 0.60))', backgroundColor:'transparent'}}>
                  <img height='12' src="https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_list_48px-512.png" alt="" />
              </button>
              <button style={{borderTopRightRadius: '4px', borderBottomRightRadius: '4px', cursor:'pointer', display: 'flex', gap:5, padding: '8px 16px', justifyContent: 'center', alignItems: 'center', border: '1px solid var(--text-secondary, rgba(0, 26, 76, 0.60))', backgroundColor:'transparent'}}>
                <img height='12' src="https://cdn.iconscout.com/icon/free/png-256/free-circle-dashed-3601581-3003151.png" alt="" />
              </button>
            </div>
          </div>
          
          <div style={{display:'flex'}}>
            <div>
              <div style={{display:'flex', alignItems:'center', gap: 5}}>
                <Weth/>
                <h5>wETH</h5>
                <h5 style={{color:'gray'}}>Wrapped ETH</h5>
                <Progress progress={45} />
              </div>
              <div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

  )
}
