import React, { Component } from 'react';
import { Row, Col, Button } from 'antd';
import 'antd/dist/antd.css';
import './App.css';

class ContentCardsGallery extends Component {
  render() {
    const mockData = [{
      name: 'ULTRABOOST',
      imgUrl: 'https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/c11acc09028f4fb794dba9a8012f2aa2_9366/Ultraboost_Shoes_Black_F35231_01_standard.jpg',
      price: '180$'
    },{
      name: 'EXTRABOOST',
      imgUrl: 'https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/ee833905c56b4ca19bdba93800fc2f2f_9366/Ultraboost_Shoes_White_CM8111_01_standard.jpg',
      price: '200$'
    },{
      name: 'SUPERBOOST',
      imgUrl: 'https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/fb15831ac99f4fb9ac85a819009aeea6_9366/Ultraboost_Uncaged_Shoes_Grey_DA9159_01_standard.jpg',
      price: '150$'
    },{
      name: 'F RUNNING B.',
      imgUrl: 'https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/160be65a2069403f9df9a8270018e424_9366/NMD_R1_Shoes_Black_B79758_01_standard.jpg',
      price: '220$'
    },{
      name: 'F RUNNING',
      imgUrl: 'https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/00085dec90eb4e8794cda8270019643b_9366/NMD_R1_Shoes_White_B79759_01_standard.jpg',
      price: '220$'
    },{
      name: 'STAN SMITH',
      imgUrl: 'https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/bed5c69134c84d62952da93700e0a970_9366/Ultraboost_LTD_Shoes_Blue_BB7801_01_standard.jpg',
      price: '130$'
    },{
      name: 'STAN SMITH G',
      imgUrl: 'https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/55d18099c5ca40fcbb88a93700e0320e_9366/Ultraboost_LTD_Shoes_White_BB7800_01_standard.jpg',
      price: '150$'
    },{
      name: 'BOOST',
      imgUrl: 'https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/c11acc09028f4fb794dba9a8012f2aa2_9366/Ultraboost_Shoes_Black_F35231_01_standard.jpg',
      price: '145$'
    }];
    return (
      mockData.map((datum) =>
        <div className={'list-items'}>
          <Col span={4} className={'item'}>
            <Row>
              <img className={'list-img'} alt={'damaged'} src={datum.imgUrl}/>
            </Row>
            <Row>
              <h2 className={'item-name'}>{datum.name}</h2>
            </Row>
            <Row className={'price'}>
                <h4 className={'price-row'}>price {datum.price}</h4>
            </Row>
            <Row className={'add-to-cart'}>
              <Button type="primary">Add To Cart</Button>
            </Row>
          </Col>
        </div>
      )
    );
  }
}

export default ContentCardsGallery;