import React from 'react'

import "./expert.css"

export default function Expert({ src, name, convRate }) {
    return (
        <div className='p-3'>
            <div className='expert-shadow'>
                <div style={{ position: "relative" }}>
                    <img src={src} style={{
                        maxWidth: "100%",
                        height: "auto"
                    }} />
                    <div style={{ position: "absolute", top: "4%", right: "2%" }}>
                        <button className='like'  style={{backgroundColor:"#2C8646"}}><img src="images/img_checkmark.svg" /></button>
                    </div>
                </div>
                <div className='p-3'>
                    <span className='text'>{name}</span>
                    <br />
                    <span className='text2'>{convRate} Conversion rate</span>
                    <div style={{ position: "relative", marginTop: "12px" }}>
                        <button className='btn-info'><span className='expert-btn-text px-3'>Contact</span></button>
                        <div style={{ position: "absolute", bottom: "25%", right: "2%" }}>
                            <button className='like float-end' style={{
                                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25))"
                            }}><img src="images/heart.svg" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
