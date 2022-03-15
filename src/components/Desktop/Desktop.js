import React from 'react'
import Avatar from '../Avatar/Avatar'
import './Desktop.css'

export default function Desktop() {
  return (
    <div className='desktop-container'>
        {/* <img src="/images/illustration-mockups.svg" alt="" /> */}
        <div className="desktop-container_blackbar">
            <div className="blackbar-searchbar">
            </div>
            <div className="blackbar-hamburger">
            </div>
        </div>
        <div className="desktop-body">
          <div className='desktop-body_avatar'>
            <Avatar/>
          </div>
        </div>
    </div>
  )
}
