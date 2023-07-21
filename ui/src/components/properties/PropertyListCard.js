import React from 'react'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import { Img, List, SelectBox, Text } from "components";

import "./properties.css"

export default function PropertyListCard(props) {
    return (
      <div style={{display:"flex", justifyContent:"center"}}>
            <img src={props.propertyImage} alt="property" height={"auto"} width={"20%"}/>
            <div className='property-list-card'>
                <div class="row">
                    <div class="col-8 property-name">
                        {props.name}
                    </div>
                    <div class="col">
                        <div className="property-batch">RERA </div>
                    </div>
                    <div class="col-2">
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
                <div class="row">
                    <div class="col property-desc">
                    2,3 BHK Independent Floor in Dwarka, Delhi
                    </div>
                </div>
                <div class="row">
                    <div class="col property-name" style={{marginTop:"2%"}}>
                        {props.priceRate}
                    </div>
                </div>
                <div class="row  property-detail">
                    <div class="col-5" style={{padding:"15px"}}>
                        <div className='property-body'>
                            Avg. Price
                        </div>
                        <div className="property-desc" style={{color: "rgba(9, 44, 76, 1)"}}>
                            {props.avgPrice}
                        </div>
                    </div>
                    <div class="col" style={{padding:"10px 0"}}>
                        <div className='divider'/>
                    </div>
                    <div class="col-6"  style={{padding:"15px"}}>
                        <div className='property-body'>
                            Possession Starts
                        </div>
                        <div className="property-desc" style={{color: "rgba(9, 44, 76, 1)"}}>
                            {props.possessionStartTime}
                        </div>
                    </div>
                </div>
                <br/><br/>
                <div class="row">
                    <div class="col" >
                        <div className='horizontal-divider'></div>
                    </div>
                </div>
                <div class="row" style={{marginTop:"15px"}}>
                    <div class="col-10" >
                        <div className='property-name'>{props.dealerName}</div> 
                        <div className='property-body'>Seller/Dealer</div>
                    </div>
                    <div class="col-2" >
                    <button className='btn-info float-end '><span className='expert-btn-text px-1' style={{fontSize:"16px"}}>Contact</span></button>
                    </div>
                </div>
            </div>
      </div>
    )
}
