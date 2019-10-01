import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import BackgroundWithText from '../CommonTools/BackgroundWithText';
// import mobileFrame from '../../assets/img/mobile-frame.png';
// import mobileFrameSlide from '../../assets/img/mobile-frame-slide.png';
import BackgroundImage from '../../assets/img/slide-bg.jpg';
import SlideTab from './SlideTab';
class Slide extends Component {
    render() {
        return (
            <section id="slide">
                <BackgroundWithText id="SlideBg" backgroundImage={BackgroundImage} title="Slide" shadowTitle="Slide" />
                <div className="content-area">
                    <div className="circle-position two-circle right-circle mb-none">
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
                    <div className="circle-position one-circle top-left-circle mb-none">
                        <div className="circle-wrapper">
                            <div className="orbit circle-spin">
                                <div className="first-circle"></div>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row">
                            <div className="photo-content">
                                <LazyLoad>
                                    <SlideTab />
                                </LazyLoad>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            // End Effect Section
        )
    }
}
export default Slide;