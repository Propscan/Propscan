import React from 'react'

import "./propertyCarousel.css"

export default function PropertyItem({ src, text, subText1, subText2, price }) {
  return (
    <div className='p-item'>
      <div style={{position:"relative"}}>
        <img src={src} style={{
          maxWidth: "100%",
          height: "auto"
        }} />
        <div style={{position:"absolute", top:"8%", left:"0%"}}>
          <span className='sell'>For Sell</span>
        </div>
        <div style={{position:"absolute", bottom:"4%", right:"2%"}}>
          <button className='like'><img src="images/heart.svg" /></button>
        </div>

      </div>
      <div className='p-4 pb-1'>
        <span className='text'>{text}</span>
        <br />
        <span className='text2'>{subText1}<br /> {subText2}</span>
      </div>
      <span className='price'>{price}</span>
    </div>
  )
}
