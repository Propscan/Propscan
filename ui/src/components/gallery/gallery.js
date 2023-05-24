import React from 'react'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "./gallery.css"

export default function Gallery() {
    return (
        <Row>
            <Col xs="1" />
            <Col xs="10">
                <div className='px-2'>
                    <p className='top text-md-start'>Aapki <span className='f-bold'>Gallery</span></p>
                    <div>
                        <span className='gallery-subtext'>Have a look on the Top localities
                        </span>
                        <button className='btn-info d-none d-md-block d-lg-block d-xl-block' style={{ float: "right" }}><span className='btn-text'>View More</span></button>
                    </div>
                    <div className='my-5'>
                        <Row className='m-0 p-0'>
                            <Col className='p-0'>
                            <div className='d-flex' style={{overflowX: "scroll", justifyContent:"space-between", gap:"24px"}}>
                                <div className='p-0'>
                                    <img
                                        src="images/gallery_1.png"
                                        width="246px"
                                        height="246px"
                                    />
                                    <br />
                                    <span className='gallery-city'>Dwarka</span>
                                </div>
                                <div className='p-0'>
                                    <img
                                        src="images/gallery_2.png"
                                        width="246px"
                                        height="246px"
                                    />
                                    <br />
                                    <span className='gallery-city'>Saket</span>
                                </div>
                                <div className='p-0'>
                                    <img
                                        src="images/gallery_3.png"
                                        width="246px"
                                        height="246px"
                                    />
                                    <br />
                                    <span className='gallery-city'>Janakpuri</span>
                                </div>
                                <div className='p-0'>
                                    <img
                                        src="images/gallery_4.png"
                                        width="246px"
                                        height="246px"
                                    />
                                    <br />
                                    <span className='gallery-city'>Uttam Nagar</span>
                                </div>
                            </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Col>
            <Col xs="1" />
        </Row>
    )
}
