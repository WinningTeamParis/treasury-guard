import React from 'react'
import Main from './Main'
import Logo from '../svg/LogoSVG'
import Plus from '../svg/PlusSVG'
import './Navbar.css'
import Notification from '../svg/NotificationSVG'


export default function Navbar() {
  return (
    <div style={{width: '70%', padding: '10px 24px', minHeight:'50px', height: '5%', borderBottom: '1px solid var(--black-10, rgba(28, 28, 28, 0.10))'}}>
        <div style={{display: 'flex', alignItems: 'center', position:'relative'}}>
            <div style={{display: 'flex', alignItems: 'center'}}>
                {/* <img style={{height: 20}} src="https://dynamic-web.fr/wp-content/uploads/2020/03/logo-nike.png" alt="" /> */}
                <Logo/>
                <p className="tguard" style={{marginLeft: 10}}>Treasury Guard</p>
            </div>
            
            <div style={{right: 0, position: 'absolute', alignItems:'center', display:'flex'}}>
                    {/* <input style={{height: '28px', border: '1px solid rgba(92, 109, 141, 1)'}} placeholder="Search" type="text" name="" id="" /> */}

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
