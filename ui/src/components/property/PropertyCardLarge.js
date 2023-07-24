import React from 'react'

import "./properties.css"

export default function PropertyCardLarge(props) {
    return (
      <div style={{display:"flex", justifyContent:"center"}}>
            <img src={props.propertyImage} alt="property" height={"auto"} width={"20%"}/>
            <div className='property-list-card'>
                <div className="row">
                    <div className="col-8 property-name">
                        {props.name}
                    </div>
                    <div className="col">
                        <div className="property-batch">RERA </div>
                    </div>
                    <div className="col-2">
                        <div style={{display:"flex", justifyContent:"flex-end"}}>
                            <div className="info-icon">
                                <img src="/images/HeartStraight.png" alt="" />
                            </div>
                            <div className="info-icon" style={{marginLeft:"5%"}}>
                                <img src="/images/LikeIcon.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col property-desc">
                    {props.unique_description}
                    </div>
                </div>
                <div className="row">
                    <div className="col property-name" style={{marginTop:"2%"}}>
                        {props.priceRate}
                    </div>
                </div>
                <div className="row  property-detail">
                    <div className="col-5" style={{padding:"15px"}}>
                        <div className='property-body'>
                            Avg. Price
                        </div>
                        <div className="property-desc" style={{color: "rgba(9, 44, 76, 1)"}}>
                            {props.avgPrice}
                        </div>
                    </div>
                    <div className="col" style={{padding:"10px 0"}}>
                        <div className='divider'/>
                    </div>
                    <div className="col-6"  style={{padding:"15px"}}>
                        <div className='property-body'>
                            Possession Starts
                        </div>
                        <div className="property-desc" style={{color: "rgba(9, 44, 76, 1)"}}>
                            {props.possessionStartTime}
                        </div>
                    </div>
                </div>
                <br/><br/>
                <div className="row">
                    <div className="col" >
                        <div className='horizontal-divider'></div>
                    </div>
                </div>
                <div className="row" style={{marginTop:"15px"}}>
                    <div className="col-10" >
                        <div className='property-name'>{props.dealerName}</div> 
                        <div className='property-body'>Seller/Dealer</div>
                    </div>
                    <div className="col-2" >
                    <button className='btn-info float-end '><span className='expert-btn-text px-1' style={{fontSize:"16px"}}>Contact</span></button>
                    </div>
                </div>
            </div>
      </div>
    )
}
