import React, { Component } from 'react';
// import LazyLoad from 'react-lazyload';
import BackgroundImage from '../../assets/img/pricing-bg.jpg';
import priceImg1 from '../../assets/img/price-img-1.png';
import priceImg2 from '../../assets/img/price-img-2.png';

class Pricing extends Component {
    render() {
        let alt ="Vimory is designed to be your personal photo to video or slideshow stdio to make you a video superstar";
        return (
            
            <section id="pricing" className="photo-with-content" style={{ backgroundImage: `url(${BackgroundImage})`}}>
                <span className="shadow-text  wow zoomIn" data-wow-delay="0.4s" animation-delay="0.4s">Our Pricing Plan</span>
                <div className="pic-overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="title">
                                <div className="title-inner shadow-title text-center">
                                    <h2 className="wow zoomIn" data-wow-delay="0.2s" animation-delay="0.2s">Our Pricing Plan</h2>
                                </div>
                            </div>
                            <div className="text-center subconetnt">
                                <h5 className="wow fadeInUp" animation-delay="0.4s" data-wow-delay="0.4s">Unlimited Access to All Features</h5>
                                <p className="wow fadeInUp" animation-delay="0.6s" data-wow-delay="0.6s">Get access to all Premium Templates, Photo Editing<br />Features, Slides, Effect, Filters and Frames.<br />No Watermark & no Ads</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div className="price-container">
                                <div className="price-panel wow pulse" animation-delay="0.8s" data-wow-delay="0.8s">
                                    <div className="overlay"></div>
                                    <div className="price-inner">
                                        <img src={priceImg1} alt={alt} />
                                        <h5>Monthly Plan</h5>
                                        <p className="cost">$2.99</p>
                                    </div>
                                </div>
                                <div className="price-panel  wow pulse" animation-delay="0.8s" data-wow-delay="0.8s">
                                    <div className="price-inner">
                                        <img src={priceImg2} alt={alt} />
                                        <h5>Annual plan</h5>
                                        <p className="cost">$19.99</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Pricing;

