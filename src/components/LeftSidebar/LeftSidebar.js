import React from 'react'
import './LeftSidebar.css'
import sidebarImage from '../../assets/images/50n.png';

const LeftSidebar = () => {
  return (
    <div className='sidebar-section'>
      <div className='sidebar-content'>
        <div className='input-city'>
          <a href='/' className='search-button'>
            <i className="fa-regular fa-magnifying-glass"></i>
          </a>
          <input 
            type='text'
            placeholder='Search for Places ...'
          />
        </div>
        <div className='sidebarImage'>
          <img src={sidebarImage} alt="sidebarImage"/>
        </div>
      </div>
      
    </div>
  )
}

export default LeftSidebar
