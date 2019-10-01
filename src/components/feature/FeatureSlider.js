import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class FeatureSlider extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            arrows: false,
            pauseOnHover: true,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                  }
                },
               
                  {
                    breakpoint:767,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 1,
                      infinite: true,
                      dots: true
                    }
                  },
                {
                    breakpoint: 480,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      infinite: true,
                      dots: true
                    }
                  }
            ]
        };
        return (
            <div className="feature-box feature-mobile">

                <Slider {...settings}>
                    <div>
                        <li className="feature-1 hexagon feature-hover-content">
                            <div className="content">
                                <h4>Templates</h4>
                                <p>Easily create a memory with templates.</p>
                                <a href="#template" className="vimory-btn btn">See More</a>
                            </div>
                            <div className="hexagon-layer"></div>
                            <div className="hex-1"></div>
                            <div className="hex-2"></div>
                        </li>
                    </div>
                    <div>
                        <li className="feature-2 hexagon feature-hover-content">
                            <div className="content">
                                <h4>Photo Edit</h4>
                                <p>Advance Photo editing tools with many features.</p>
                                <a href="#photoEdit" className="vimory-btn btn">See More</a>
                            </div>
                            <div className="hexagon-layer"></div>
                            <div className="hex-1"></div>
                            <div className="hex-2"></div>
                        </li>
                    </div>
                    <div>
                        <li className="feature-3 hexagon feature-hover-content">
                            <div className="content">
                                <h4>Slide</h4>
                                <p>Sliding Animation will make your memory more attractive.</p>
                                <a href="#slide" className="vimory-btn btn">See More</a>
                            </div>
                            <div className="hexagon-layer"></div>
                            <div className="hex-1"></div>
                            <div className="hex-2"></div>
                        </li>
                    </div>
                    <div>
                        <li className="feature-4 hexagon feature-hover-content">
                            <div className="content">
                                <h4>Effect</h4>
                                <p>A variety of Particle Effects for you to make your video more lucrative.</p>
                                <a href="#effect" className="vimory-btn btn">See More</a>
                            </div>
                            <div className="hexagon-layer"></div>
                            <div className="hex-1"></div>
                            <div className="hex-2"></div>
                        </li>
                    </div>
                    <div>
                        <li className="feature-5 hexagon feature-hover-content">
                            <div className="content">
                                <h4>Frame</h4>
                                <p>Frame your memory with so many interesting frames.</p>
                                <a href="#frame" className="vimory-btn btn">See More</a>

                            </div>
                            <div className="hexagon-layer"></div>
                            <div className="hex-1"></div>
                            <div className="hex-2"></div>
                        </li>
                    </div>
                    <div>
                        <li className="feature-6 hexagon feature-hover-content">
                            <div className="content">
                                <h4>Filter</h4>
                                <p>Lots of unique filtering options to give your video a dramatic look.</p>
                                <a href="#filter" className="vimory-btn btn">See More</a>
                            </div>
                            <div className="hexagon-layer"></div>
                            <div className="hex-1"></div>
                            <div className="hex-2"></div>
                        </li>
                    </div>
                </Slider>
            </div>
        )
    }
}
export default FeatureSlider;