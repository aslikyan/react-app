import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import './App.css';

class ContentCarousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000
    };
    return (
      <div className={'homepage-slick'}>
        <Slider {...settings}>
          <div>
            <img alt={'damaged'} src={'https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/160be65a2069403f9df9a8270018e424_9366/NMD_R1_Shoes_Black_B79758_01_standard.jpg'} className={'img'}/>
          </div>
          <div>
            <img alt={'damaged'} src={'https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/00085dec90eb4e8794cda8270019643b_9366/NMD_R1_Shoes_White_B79759_01_standard.jpg'} className={'img'}/>
          </div>
          <div>
            <img alt={'damaged'} src={'https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/c11acc09028f4fb794dba9a8012f2aa2_9366/Ultraboost_Shoes_Black_F35231_01_standard.jpg'} className={'img'}/>
          </div>
        </Slider>
      </div>
    );
  }
}

export default ContentCarousel;