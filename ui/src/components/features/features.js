import React from 'react'

import Feature from './feature/feature'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Features() {
  return (
    <Row>
      <Col xs="3" className='stat'>
      <p className='top float-end pt-4 px-2'>Key <br /><span className='f-bold'>Features ?</span></p>
        {/* <p style={{ float: "right" }}>
          Key Features?
        </p> */}
      </Col>
      <Col xs="8">
        <Row>
          <Col>
            <Feature
            src="images/img_firrbookmark.svg"
            text="Conversion"
            subtext="Our tech is focused on converting your leads"
            />
          </Col>
          <Col>
            <Feature
            src="images/img_firrscreen.svg"
            text="Operating System"
            subtext="Our tech is simple and easy to use"
            />
          </Col>
          <Col>
            <Feature
            src="images/img_firrthumbsup.svg"
            text="Growth"
            subtext="Grow your business by doing more deals"
            />
          </Col>
        </Row>
      </Col>
      <Col xs="1" className='stat'></Col>
    </Row>
  )
}
