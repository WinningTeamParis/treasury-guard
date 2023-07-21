import React from 'react'
import Notified from '../svg/NotifiedSVG'

export default function Activity() {
  return (
    <div style={{ width: '20%', minWidth: '200px', height: '100%', padding: '22px 20px', borderLeft: '1px solid var(--black-10, rgba(28, 28, 28, 0.10))'}}>
        <div>
            <h4 style={{margin:0, fontSize: '14px', fontWeight: 500, color: '#001A4C', marginBottom: 16}}>Notifications</h4>
            <div style={{display: 'flex', padding: 4, width: '100%', alignItems: 'center', marginBottom: 16, gap: 8}}>
                <Notified/>
                <div>
                    <p style={{margin:0, fontSize: '12px', fontWeight: 400}}>You have a new joiner request.</p>
                    <p style={{margin:0, fontSize: '12px', fontWeight: 400, color: 'rgba(0, 26, 76, 0.25)'}}>Just Now</p>
                </div>
            </div>
            <div style={{display: 'flex', padding: 4, width: '100%', alignItems: 'center', marginBottom: 16, gap: 8}}>
                <Notified/>
                <div>
                    <p style={{margin:0, fontSize: '12px', fontWeight: 400}}>You have a new joiner request.</p>
                    <p style={{margin:0, fontSize: '12px', fontWeight: 400, color: 'rgba(0, 26, 76, 0.25)'}}>Just Now</p>
                </div>
            </div>
            <div style={{display: 'flex', padding: 4, width: '100%', alignItems: 'center', marginBottom: 16, gap: 8}}>
                <Notified/>
                <div>
                    <p style={{margin:0, fontSize: '12px', fontWeight: 400}}>You have a new joiner request.</p>
                    <p style={{margin:0, fontSize: '12px', fontWeight: 400, color: 'rgba(0, 26, 76, 0.25)'}}>Just Now</p>
                </div>
            </div>
        </div>

        <div style={{marginTop: 50}}>
            <h4 style={{margin:0, fontSize: '14px', fontWeight: 500, color: '#001A4C', marginBottom: 16}}>Funding Activity</h4>
            <div style={{display: 'flex', padding: 4, width: '100%', alignItems: 'center', marginBottom: 16, gap: 8}}>
                <Notified/>
                <div>
                    <p style={{margin:0, fontSize: '12px', fontWeight: 400}}>You have a new joiner request.</p>
                    <p style={{margin:0, fontSize: '12px', fontWeight: 400, color: 'rgba(0, 26, 76, 0.25)'}}>Just Now</p>
                </div>
            </div>
            <div style={{display: 'flex', padding: 4, width: '100%', alignItems: 'center', marginBottom: 16, gap: 8}}>
                <Notified/>
                <div>
                    <p style={{margin:0, fontSize: '12px', fontWeight: 400}}>You have a new joiner request.</p>
                    <p style={{margin:0, fontSize: '12px', fontWeight: 400, color: 'rgba(0, 26, 76, 0.25)'}}>Just Now</p>
                </div>
            </div>
            <div style={{display: 'flex', padding: 4, width: '100%', alignItems: 'center', marginBottom: 16, gap: 8}}>
                <Notified/>
                <div>
                    <p style={{margin:0, fontSize: '12px', fontWeight: 400}}>You have a new joiner request.</p>
                    <p style={{margin:0, fontSize: '12px', fontWeight: 400, color: 'rgba(0, 26, 76, 0.25)'}}>Just Now</p>
                </div>
            </div>
        </div>
    </div>
  )
}
