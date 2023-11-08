import React from 'react'

import "./expert.css"

export default function Expert({ src, name, convRate, verified=true }) {
    return (
        <div className='p-3'>
            <div className='expert-shadow'>
                <div style={{ position: "relative" }}>
                    <img src={src} style={{
                        maxWidth: "100%",
                        height: "auto"
                    }} />
                    {verified &&
                        <div style={{ position: "absolute", top: "4%", right: "4%" }}>
                            <img src="images/green_check.svg" />
                        </div>
                    }
                </div>
                <div className='p-3'>
                    <span className='text'>{name}</span>
                    <br />
                    <span className='text2'>{convRate} Conversion rate</span>
                    <div style={{marginTop: "12px" }}>
                        <button className='btn-info'><span className='expert-btn-text px-1 px-lg-2'>Contact</span></button>
                        <button className='like float-end btn-shadow p-1'><img src="images/heart.svg" /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
