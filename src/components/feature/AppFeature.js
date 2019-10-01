import React, { Component } from 'react'
import Feature from './Feature';
import FeatureSlider from './FeatureSlider';
import triangle from '../../assets/img/icon/triangle.png';
import rectangle from '../../assets/img/icon/rectangle.png';
import round from '../../assets/img/icon/round.png';
export default class AppFeature extends Component {
    render() {
        let alt ="Vimory is designed to be your personal photo to video or slideshow stdio to make you a video superstar";
        return (
            <section id="appFeature">
                <div className="vimory-animation animation-type-3 bottom-left mb-none">
                    <div className="vimory-animated-circle"></div>
                    <div className="vimory-animated-circle-container">
                        <img src={triangle} alt={alt} />
                    </div>
                </div>
                <div className="vimory-animation animation-type-4 top-left mb-none">
                    <img className="rectangle" src={rectangle} alt={alt} />
                    <div className="brk-animated-circle__container">
                    <img className="round" src={round} alt={alt} />
                    </div>
                </div>
                <div className="circle-position two-circle top-right mb-none">
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
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-title text-center">
                                <h2 className="wow fadeInUp" animation-delay="0.2s" data-wow-delay="0.2s">App Features</h2>
                                <p className="wow fadeInUp" animation-delay="0.4s" data-wow-delay="0.4s">We have created a lot of Templates, So that you can make a video more easily.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <FeatureSlider/>
                            <Feature />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
