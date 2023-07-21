import React from 'react'
import Copy from '../svg/CopySVG'
import Plus from '../svg/PlusSVG'


export default function Main() {
  return (
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
            <button style={{borderRadius: '4px', cursor:'pointer', display: 'flex', gap:5, padding: '8px 16px', justifyContent: 'center', alignItems: 'center', border: '1px solid var(--text-secondary, rgba(0, 26, 76, 0.60))', backgroundColor:'transparent'}}>
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
  )
}
