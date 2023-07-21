import React from 'react'

import Feature from './feature/feature'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Features() {
  return (
    <Row>
      <Col xs="12" lg="3" className='key-features-bck'>
      <p className='top float-end pt-4 px-2 d-none d-lg-inline'>Key <br /><span className='f-bold'>Features ?</span></p>
      <p className='top text-center pt-4 px-2 pb-4 d-block d-lg-none'>Key <span className='f-bold'>Features ?</span></p>
      </Col>
      <Col xs="12" lg="8" className='px-5 px-lg-auto'>
        <Row className='features-bck'>
          <Col xs="12" lg="4">
            <Feature
            src="images/img_firrbookmark.svg"
            text="Conversion"
            subtext="Our tech is focused on converting your leads"
            />
          </Col>
          <Col xs="12" lg="4">
            <Feature
            src="images/img_firrscreen.svg"
            text="Operating System"
            subtext="Our tech is simple and easy to use"
            />
          </Col>
          <Col xs="12" lg="4">
            <Feature
            src="images/img_firrthumbsup.svg"
            text="Growth"
            subtext="Grow your business by doing more deals"
            />
          </Col>
        </Row>
      </Col>
      <Col xs="0" lg="1" className='stat'></Col>
    </Row>
  )
}
