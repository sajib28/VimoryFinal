import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import frame1 from '../../assets/img/frame/1.jpg';
import frame2 from '../../assets/img/frame/2.jpg';
import frame3 from '../../assets/img/frame/3.jpg';
import frame4 from '../../assets/img/frame/4.jpg';
import frame5 from '../../assets/img/frame/6.jpg';
class FrameSlider extends Component {

    render() {
        let alt = "Vimory is designed to be your personal photo to video or slideshow stdio to make you a video superstar";
        var settings = {
            dots: true,
            fade: false,
            infinite: true,
            autoplay: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
        };
        return (

            <Slider {...settings}>
                <div>
                    <LazyLoad height={200} offset={100}>
                        <img src={frame1} alt={alt} />
                    </LazyLoad>
                </div>
                <div>
                    <LazyLoad height={200} offset={100}>
                        <img src={frame2} alt={alt} />
                    </LazyLoad>
                </div>
                <div>
                    <LazyLoad height={200} offset={100}>
                        <img src={frame3} alt={alt} />
                    </LazyLoad>
                </div>
                <div>
                    <LazyLoad height={200} offset={100}>
                        <img src={frame4} alt={alt} />
                    </LazyLoad>
                </div>
                <div>
                    <LazyLoad height={200} offset={100}>
                        <img src={frame5} alt={alt} />
                    </LazyLoad>
                </div>
            </Slider>
        );

    }
}
export default FrameSlider;