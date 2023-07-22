import React from 'react'
import Main from './Main'
import Logo from '../svg/LogoSVG'
import Plus from '../svg/PlusSVG'
import './Navbar.css'
import Notification from '../svg/NotificationSVG'


export default function Navbar() {
  return (
    <div style={{width: '70%', alignItems:'center', padding: '12px 24px', minHeight:'50px', height: '10%', borderBottom: '1px solid var(--black-10, rgba(28, 28, 28, 0.10))'}}>
        <div style={{display: 'flex', alignItems: 'center', height:'100%', marginBottom: 25, position:'relative'}}>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <Logo/>
                <p className="tguard" style={{marginLeft: 10}}>Treasury Guard</p>
            </div>
            
            <div style={{right: 0, position: 'absolute', alignItems:'center', gap: 5, display:'flex'}}>
                <label>
                    <input placeholder="Search" style={{borderRadius: '4px', display: 'flex', gap:5, justifyContent: 'center', alignItems: 'center', backgroundColor:'transparent'}}>
                    </input>
                </label>

                <button style={{border:'none', backgroundColor:'transparent', cursor:'pointer'}}>
                    <Notification/>
                </button>

                <button style={{borderRadius: '4px', cursor:'pointer', display: 'flex', gap:5, padding: '8px 16px', justifyContent: 'center', alignItems: 'center', border: '1px solid var(--text-secondary, rgba(0, 26, 76, 0.60))', backgroundColor:'transparent'}}>
                    Invite
                    <Plus/>
                </button>
            </div>

        </div>


        <Main/>



    </div>

  )
}
