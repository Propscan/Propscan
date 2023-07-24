import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import PropertyItem from "./PropertyCardSmall";

import Carousel from '../utils/carousel';

export default function HomeProperties() {
    return (
        <div>
            <p className='top text-center m-0'><span className='f-bold'>Properties</span> for Sale</p>
            <Row className='stat m-0'>
                <Col xs="1" />
                <Col xs="10" md className='p-4'>
                    <Carousel items={[
                        <PropertyItem
                        src="images/img_image_1prop.png"
                        text="0123 Boulevard Street, New Delhi"
                        subText1="3 Bedrooms | 2 Bathrooms |"
                        subText2="Size - 252 ft2"
                        price="Rs. 10,000,00.00"
                        />,
                        <PropertyItem
                        src="images/img_image_2prop.png"
                        text="0123 Boulevard Street, New Delhi"
                        subText1="3 Bedrooms | 2 Bathrooms |"
                        subText2="Size - 252 ft2"
                        price="Rs. 10,000,00.00"
                        />,
                        <PropertyItem
                        src="images/img_image_3prop.png"
                        text="0123 Boulevard Street, New Delhi"
                        subText1="3 Bedrooms | 2 Bathrooms |"
                        subText2="Size - 252 ft2"
                        price="Rs. 10,000,00.00"
                        />,
                        <PropertyItem
                        src="images/img_image_1prop.png"
                        text="0123 Boulevard Street, New Delhi"
                        subText1="3 Bedrooms | 2 Bathrooms |"
                        subText2="Size - 252 ft2"
                        price="Rs. 10,000,00.00"
                        />,
                    ]} />
                </Col>
                <Col xs="1" />
            </Row>
        </div>
    )
}
