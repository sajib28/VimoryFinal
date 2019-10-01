import React, { Component } from 'react'
import LazyLoad from 'react-lazyload';
import FrameSlider from './FrameSlider';
import BackgroundWithText from '../CommonTools/BackgroundWithText';
import BackgroundImage from '../../assets/img/frame-bg.jpg';
import triangle from '../../assets/img/icon/triangle.png';
import pentagon from '../../assets/img/icon/pentagon.png';
import frame1 from '../../assets/img/frame/3.jpg';
import triangleIndigo from '../../assets/img/icon/triangle-indigo.png';
class FrameSection extends Component {
    render() {
        let alt ="Vimory is designed to be your personal photo to video or slideshow stdio to make you a video superstar";
        let TitleText ="Frame";
            let description = "Frame your captive looping film with a specified and colorful looking frame. Choose the frame (birthdays, weddings, friendship, seasonal, traveling or others) from Vimory that fits perfectly for your story or film and makes it interesting.";
        return (
            <section id="frame">
                  <LazyLoad><BackgroundWithText id="filterBg" backgroundImage={BackgroundImage} title="Frame" shadowTitle="Frame" /></LazyLoad>
                <div className="content-area">
                    <div className="vimory-animation animation-type-3 bottom-left mb-none">
                        <div className="vimory-animated-circle"></div>
                        <div className="vimory-animated-circle-container">
                            <img src={triangle} alt={alt} />
                        </div>
                    </div>
                    <div className="vimory-animation animation-type-4 top-right mb-none">
                        <img className="pentagon" src={pentagon} alt={alt} />
                        <div className="brk-animated-circle__container">
                            <img src={triangleIndigo} alt={alt} />
                        </div>
                    </div>
                    <div className="container">
                            <div className="row">
                            <div className="photo-content">
                            <div className="col-lg-5 col-sm-12 order-md-2 order-lg-2">
                                    <div className="mobile-frame frame-slider wow fadeInUp" animation-delay="0.8s" data-wow-delay="0.8s">
                                    <LazyLoad><img className="mb-show" src={frame1} alt={alt} /></LazyLoad>
                                        <FrameSlider />
                                    </div>
                                </div>
                                <div className="col-lg-7 col-sm-12 order-md-1 order-lg-1">
                                    <h3 className="wow fadeInUp" animation-delay="0.4s" data-wow-delay="0.4s">{TitleText}</h3>
                                    <p className="wow fadeInUp" animation-delay="0.6s" data-wow-delay="0.6s">{description}</p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            // End Frame Section
        )
    }
}
export default FrameSection;