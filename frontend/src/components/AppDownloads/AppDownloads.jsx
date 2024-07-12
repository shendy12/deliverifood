import React from 'react'
import './AppDownloads.css'
import { assets } from '../../assets/assets'
const AppDownloads = () => {
  return (
    <div className='app-downloads' id='app-downloads'>
        <p>Untuk pengalaman yang lebih baik Download<br/> MariMakan App</p>
        <div className="download-platform">
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>
      
    </div>
  )
}

export default AppDownloads
