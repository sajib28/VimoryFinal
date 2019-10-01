import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class ReviewSlider extends Component {

    render() {
        var settings = {
            dots: true,
            infinite: true,
            autoplay: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows:true
        };
        return (

            <Slider {...settings}>
                <div>
                    <h3 className="wow fadeInUp" animation-delay="0.4s" data-wow-delay="0.4s">Awesome Design!</h3>
                    <ul className="list-unstyled list-inline review-icon wow fadeInUp" animation-delay="0.5s" data-wow-delay="0.5s">
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                    </ul>
                    <p className="wow fadeInUp" animation-delay="0.6s" data-wow-delay="0.6s">Etiam sapien sem at sagittis congue an augue massa varius egestas a suscipit magna tempus an aliquet porta</p>
                    <span className="author-name wow fadeInUp" animation-delay="0.7s" data-wow-delay="0.7s">M.John - @ms_brooklyn</span>
                </div>
                <div>
                    <h3>Lovely Design!</h3>
                    <ul className="list-unstyled list-inline review-icon">
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>

                    </ul>
                    <p>Etiam sapien sem at sagittis congue an augue massa varius egestas a suscipit magna tempus an aliquet porta</p>
                    <span className="author-name">M.Smith - @ms_brooklyn</span>
                </div>
                <div>
                    <h3>Best Design!</h3>
                    <ul className="list-unstyled list-inline review-icon">
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                    </ul>
                    <p>Etiam sapien sem at sagittis congue an augue massa varius egestas a suscipit magna tempus an aliquet porta</p>
                    <span className="author-name">M.Scanlon - @ms_brooklyn</span>
                </div>
            </Slider>

        );

    }
}
export default ReviewSlider;