import React from 'react'
import './SocialMedia.css'

export default function SocialMedia() {
  const photos = [
    {
      id: 'twitter',
      url: "/images/twitter_icon.svg"
    },
    {
      id: 'facebook',
      url: "/images/facebook_icon.svg"
    },
    {
      id: 'instagram',
      url: "/images/instagram_icon.svg"
    }
  ]
  return (
    <div className='social-media__container'>
      <div className='social-media__icons'>
        <img src={photos[0].url} alt="twitter icon" />
      </div>
      <div className='social-media__icons'>
        <img src={photos[1].url} alt="facebook icon" />
      </div>
      <div className='social-media__icons'>
        <img src={photos[2].url} alt="instagram icon" />
      </div>
    </div>
  )
}
