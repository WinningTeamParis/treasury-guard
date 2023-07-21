import React from 'react'
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Activity from './Activity';


export default function Home() {
  return (
    <div style={{display: 'flex', height: '100%'}}>
        <Sidebar/>
        <Navbar/>
        <Activity/>
    </div>
  )
}
