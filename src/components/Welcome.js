import React from 'react'
import Logo from '../svg/LogoSVG'


export default function Welcome() {
  return (
    <div style={{width: '100%', textAlign: 'center'}}>
        <div >
            <Logo/>
            <p className="tguard" style={{marginLeft: 10}}>Treasury Guard</p>
        </div>
        <h1>Welcome to Treasury Guard - The Treasury Management Wallet</h1>

        <div>
            Create an account
            <input type="text" name="" id="" />
        </div>
    </div>
  )
}
