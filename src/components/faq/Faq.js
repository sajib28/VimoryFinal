import React, { Component } from 'react';
import FaqAccordion from './FaqAccordion';
import pentagon from '../../assets/img/icon/pentagon.png';
import triangleIndigo from '../../assets/img/icon/triangle-indigo.png';
class Faq extends Component {
    render() {
        let alt ="Vimory is designed to be your personal photo to video or slideshow stdio to make you a video superstar";
        let title ="Frequently Asked Questions";
        let description = "Our Mobile App can be downloaded and installed on your compatible mobile device easily. If you have any question - please look through the most frequently asked questions or contact us for more details.";
        return (
            <section id="faqs">
                <div className="circle-position two-circle left-circle mb-none">
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
                <div className="circle-position one-circle right-circle mb-none">
                    <div className="circle-wrapper">
                        <div className="orbit circle-spin">
                            <div className="first-circle"></div>
                        </div>
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
                        <div className="col-md-10 offset-md-1">
                            <div className="section-title text-center">
                                <h2 className="wow fadeInUp" data-wow-delay="0.1s" animation-delay="0.1s">{title}</h2>
                                <p className="wow fadeInUp" data-wow-delay="0.2s" animation-delay="0.2s">{description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <div className="accordion-menu">
                                <FaqAccordion />
                            </div>
                        </div>
                    </div >
                </div >
            </section >
        )
    }
}
export default Faq;