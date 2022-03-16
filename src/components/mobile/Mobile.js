import React from 'react'
// import '../Desktop/Desktop.css'
import './Mobile.css'
import Avatar from '../Avatar/Avatar'

export default function Mobile() {
    return (
        <div className='mobile-container'>
        {/* <img src="/images/illustration-mockups.svg" alt="" /> */}
        <div className="mobile-container_blackbar">
            <div className="mobile-header-searchbar">
            </div>
            <div className="mobile-hamburger">
            </div>
        </div>
        <div className="mobile-body">
            <Avatar />
        </div>
    </div>
    )
}
