import React from 'react';
import PropertyListCard from './PropertyListCard';

import './properties.css'

export default function PropertyListing() {
  const properties = [
    {
        name: "The Cressida - Chetan Garg Real Estate",
        propertyImage: "images/img_prop_3.png",
        dealerName: "Cressida's Real Estate",
        possessionStartTime: "Dec, 2023",
        avgPrice: "Rs. 55.10 K/sq.mt",
        priceRate: "Rs 1.00 Cr - 3.10 Cr"
    },
    {
        name: "The Crown - Hem Raj Real Estate",
        propertyImage: "images/img_prop_4.png",
        dealerName: "Dullah Real Estate",
        possessionStartTime: "Jan, 2024",
        avgPrice: "Rs. 67.70 K/sq.mt",
        priceRate: "Rs 2.00 Cr - 4.55 Cr"
    },
    {
        name: "The Sheela's - Jamna Real Estate",
        propertyImage: "images/img_prop_1.png",
        dealerName: "Cressida's Real Estate",
        possessionStartTime: "Feb, 2024",
        avgPrice: "Rs. 59.30 K/sq.mt",
        priceRate: "Rs 1.15 Cr - 2.25 Cr"
    },
    {
        name: "The RT Palace Flats - Sanjay Real Estate",
        propertyImage: "images/img_prop_2.png",
        dealerName: "Dullah Real Estate",
        possessionStartTime: "Feb, 2024",
        avgPrice: "Rs. 59.30 K/sq.mt",
        priceRate: "Rs 1.15 Cr - 2.25 Cr"
    }
  ]
  return (
    <>
        {properties.map((props,index) => 
            <div className='properties' key={index}>
                <PropertyListCard {...props} />
            </div>
        )}
    </>
  )
}
