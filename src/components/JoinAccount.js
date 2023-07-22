import { display } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import logoPNG from './Group3.png'

export default function JoinAccount() {
  return (
    <div style={{height: 'auto'}}>
        <div style={{display:'flex', alignItems:'center', borderBottom: '1px solid black'}}>
            <Link to="/home">
                <div style={{display:'flex', margin: 20}}>
                    <img style={{height:30}} src={logoPNG} alt="" />
                    <h1 className='text-xl text-black' style={{margin:0}}>TreasuryGuard</h1>
                </div>
            </Link>

            <div style={{right: 20, position: 'absolute'}}>
                <button>jsjs</button>
            </div>
        </div>

        <div style={{display:'flex', justifyContent:'center', margin:20}}>
            <h1 className='text-2xl font-bold'>Choose how to connect with a chest</h1>
        </div>
        <div style={{display:'flex', justifyContent:'center', margin:20}}>
            <div style={{width:'50%'}}>
                Group chest address
                <input style={{width:'100%'}} type="text" name="" id="" />
                <button style={{width:'100%', backgroundColor:'red', marginTop: 10, height:'50px'}}>Join an existing Chest group</button>
            </div>
        </div>
        <div style={{display:'flex', justifyContent:'center', margin:20}}>
            <div style={{width:'50%'}}>
                Or
                <button style={{width:'100%', backgroundColor:'red', marginTop: 10, height:'50px'}}>Create a     Chest group</button>
            </div>
        </div>
    </div>
  )
}
