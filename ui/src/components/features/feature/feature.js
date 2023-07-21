import React from 'react'

import "./feature.css"

export default function Feature({ src, text, subtext }) {
  return (
    <div className='text-center px-3 py-3 py-lg-0 '>
      <div style={{ display: "inline-block", padding: "10px", marginBottom:"12px", backgroundColor:"#E8F9FD", borderRadius:"16px" }}>
        <div style={{ backgroundColor: "#0D2855", padding: "16px", borderRadius: "50%" }}>
          <img
            src={src}
            alt="firrbookmark"
          />
        </div>
      </div>
      <div className='mb-2'>
        <span className='feature-text'>{text}</span>
      </div>
      <span className='feature-subtext'>{subtext}</span>
    </div>
  )
}

