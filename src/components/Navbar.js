import React from 'react'

export default function Navbar() {
  return (
    <div style={{width: '70%', paddingLeft: 20, height: '5%', alignItems: 'center', borderBottom: '1px solid #d7d7d7', display: 'flex'}}>
        <div style={{display: 'flex', alignItems: 'center'}}>
            <img style={{height: 20}} src="https://dynamic-web.fr/wp-content/uploads/2020/03/logo-nike.png" alt="" />
            <p style={{marginLeft: 10}}>Treasury Guard</p>
        </div>
        

        <input style={{height: '80%'}} type="text" name="" id="" />

        <button>
            <img style={{height: '20px'}} src="https://cdn-icons-png.flaticon.com/512/3239/3239958.png" alt="" />
        </button>

        <button>Invite</button>

    </div>
  )
}
