import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import BackgroundWithText from '../CommonTools/BackgroundWithText';
import BackgroundImage from '../../assets/img/effect-bg.jpg';
import mobileEffect from '../../assets/img/effect-mobile.jpg';
import mobileFrame from '../../assets/img/mobile-frame.png';
import triangle from '../../assets/img/icon/triangle.png';
import EffectVideo from '../../assets/media/effect/final.mp4';
// import EffectVideoweb from '../../assets/media/effect/final.webm';
class Effect extends Component {

    render() {
        let alt = "Vimory is designed to be your personal photo to video or slideshow stdio to make you a video superstar";
        let title = "Effect";
        let description = "Vimory grasps the sense of your own expectations and has a variety of Particle Effects for you to choose to make your video more lucrative. We've created lots of particle effects so you can show off what you can do with your photos.";
        return (
            // Start Effect Section
            
            <section id="effect">
                <BackgroundWithText id="effectBg" backgroundImage={BackgroundImage} title="Effect" shadowTitle="Effect" />
                <LazyLoad>
                <div className="content-area">
                    <div className="circle-position two-circle top-circle-left mb-none">
                        <div className="circle-wrapper">
                            <div className="orbit circle-spin">
                                <div className="first-circle">
                                    <div className="outer-orbit-small">
                                        <div className="small"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="vimory-animation animation-type-3 bottom-right mb-none">
                        <div className="vimory-animated-circle"></div>
                        <div className="vimory-animated-circle-container">
                            <img src={triangle} alt={alt} />
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="photo-content">
                                <div className="col-lg-5">
                                    <div className="mobile-frame wow fadeInUp" animation-delay="0.4s" data-wow-delay="0.4s">
                                        <img src={mobileFrame} alt={alt} />
                                        <div className="mobile-frame-content allDevice">
                                        <img class="onlyMobile" src={mobileEffect} alt={alt} />
                                            <div className="video-template">
                                           
                                                <video autoPlay loop muted playsInline>
                                                    {/* <source src={EffectVideoweb} preload="auto" type="video/webm" /> */}
                                                    <source src={EffectVideo} preload="auto" type="video/mp4" />
                                                </video>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <h3 className="wow fadeInUp" animation-delay="0.6s" data-wow-delay="0.6s">{title}</h3>
                                    <p className="wow fadeInUp" animation-delay="0.8s" data-wow-delay="0.8s">{description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </LazyLoad>
            </section>
            // End Effect Section
        );
    }
}

export default Effect;