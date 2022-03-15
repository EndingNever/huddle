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
        <a href="http://www.twitter.com" target="_blank">
          <img src={photos[0].url} alt="twitter icon" />
        </a>
      </div>
      <div className='social-media__icons'>
        <a href="http://www.facebook.com" target="_blank">
          <img src={photos[1].url} alt="facebook icon" />
        </a>
      </div>
      <div className='social-media__icons'>
        <a href="http://www.instagram.com" target="_blank">
          <img src={photos[2].url} alt="instagram icon" />
        </a>
      </div>
    </div>
  )
}
