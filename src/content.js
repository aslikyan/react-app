import React, { Component } from 'react';
import ContentCarousel from './content-carousel';
import ContentCardsGallery from './content-cards-gallery';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import './App.css';

class Content extends Component {
  render() {
    return (
      <div className={'content'}>
        <Col span={10}>
          <Row>
              <h2 className={'content-text'}>Best Sellers</h2>
          </Row>
          <Row>
            <ContentCarousel/>
          </Row>
        </Col>
        <Col span={14}>
          <Row>
            <h2 className={'content-text'}>All Items</h2>
          </Row>
          <Row className={'content-gallery'}>
            <ContentCardsGallery/>
          </Row>
        </Col>
      </div>
    );
  }
}

export default Content;