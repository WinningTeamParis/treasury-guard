import React from 'react'

export default function Sidebar() {
  return (
    <div style={{ width: '10%', minWidth: '200px', height: '100%', padding: '20px', borderRight: '1px solid #D7D7D7'}}>
        <div style={{display: 'flex', alignItems: 'center'}}>
            <img style={{height: 50, width: 50, borderRadius: '50%'}} src="https://wallpapers.com/images/hd/cool-profile-picture-1ecoo30f26bkr14o.jpg" alt="" />
            <div style={{marginLeft: 10}}>
                <h3 style={{margin: 0}}>LinaDes0921</h3>
                <div style={{display: 'flex'}}>
                    <p style={{margin: 0, color: 'gray'}}>oxE3e...0049</p>
                    <button style={{marginLeft: 10}}>copy</button>
                </div>
            </div>
        </div>
        <div style={{margin: 20}}>
            <button style={{width: '100%', height: '30px'}}>Dashboard</button>
            <button style={{width: '100%', height: '30px'}}>Help Centre</button>
            <button style={{width: '100%', height: '30px'}}>Log Out</button>
        </div>
    </div>
  )
}
