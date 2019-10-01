import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import BackgroundImage from '../../assets/img/get-today-bg.jpg';
import mobileFrameGetToday from '../../assets/img/get_in-mobile.jpg';
import appleStore from '../../assets/img/apple-app-store.png';
import googlePlay from '../../assets/img/google-play.png';
import mobileFrame from '../../assets/img/mobile-frame.png';
import videomp4 from '../../assets/media/Main.mp4';
// import videowebm from '../../assets/media/Main.webm';
import redSmall from '../../assets/img/icon/red_round.png';
import triangleSmall from '../../assets/img/icon/triangle-small.png';
import redBig from '../../assets/img/icon/red_round2.png';
import rectangleBlue from '../../assets/img/icon/rectangleblue.png';
class GetToday extends Component {
    render() {
        let alt = "Vimory is designed to be your personal photo to video or slideshow stdio to make you a video superstar";
        return (

            // Start Get Today Section 
            
            <section id="getToday" className="back-img" style={{ backgroundImage: `url(${BackgroundImage})` }}>
                <span className="shadow-text wow zoomIn" data-wow-delay="0.4s" animation-delay="0.4s">Get it Today</span>
                <div className="pic-overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="getToday-content">
                            <h2 className="mb-show">Get it Today</h2>
                            <div className="col-lg-6 order-md-2 order-lg-2">
                                <div className="mobile-frame wow fadeInUp" animation-delay="0.8s" data-wow-delay="0.8s">
                                    {/* animation */}
                                    <div className="vimory-animation animation-type-5 mb-none">
                                        <div className="cir-1">
                                            <img className="red-small" src={redSmall} alt={alt} />
                                            <img className="triangle-small" src={triangleSmall} alt={alt} />
                                        </div>
                                        <div className="cir-2 cir-3">
                                            <img className="rectangleBlue-inside" src={rectangleBlue} alt={alt} />
                                            <img className="triangle-small-outside" src={triangleSmall} alt={alt} />
                                        </div>
                                        <div className="cir-2">
                                            <img className="redBig" src={redBig} alt={alt} />
                                            <img className="rectangleBlue" src={rectangleBlue} alt={alt} />
                                        </div>
                                    </div>
                                    {/* End animation */}
                                    <img className="frame-get-it-today" src={mobileFrame} alt={alt} />
                                    <div className="mobile-frame-content allDevice">
                                    <img class="onlyMobile" src={mobileFrameGetToday} alt={alt} />
                                        <div className="video-template">
                                        <LazyLoad>
                                            <video autoPlay loop muted playsInline>
                                                {/* <source src={videowebm} preload="auto" type="video/webm" /> */}
                                               <source src={videomp4} type='video/mp4; codecs="avc1.4D401E, mp4a.40.2"' />
                                            </video>
                                            </LazyLoad>
                                            {/* <Player muted autoplay loop>
                                        <source src={videowebm} type="video/webm"/>
                                        <source src={videomp4} type="video/mp4" />
                                        <ControlBar disableDefaultControls={true} >
                                        </ControlBar >
                                            </Player> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 order-md-1 order-lg-1">
                                <div className="title">
                                    <div className="title-inner shadow-title text-center">
                                        <h2 className="wow zoomIn mb-none" data-wow-delay="0.2s" animation-delay="0.2s">Get it Today</h2>

                                    </div>
                                </div>
                                <p className="wow fadeInUp" animation-delay="0.6s" data-wow-delay="0.6s">Vimory understands your need for animation slides to create looping slideshow video moments. Select a video animation slide that suits your need and the story you want to give an impact.</p>
                                <ul className="wow fadeInUp" animation-delay="0.8s" data-wow-delay="0.8s">
                                    <li><a rel="noopener noreferrer" href="https://apps.apple.com/us/app/vimory-photo-video-maker/id1359573092" target="_blank"><img src={appleStore} alt="Apple Store" /></a></li>
                                    <li><a rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=com.appilian.vimory" target="_blank"><img src={googlePlay} alt="Google Play Store" /></a></li>
                                </ul>
                            </div>
                        </div >
                    </div>
                </div >
            </section >

        );
    }
}
export default GetToday;