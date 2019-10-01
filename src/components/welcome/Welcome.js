import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import appleStore from '../../assets/img/apple-app-store.png';
import googlePlay from '../../assets/img/google-play.png';
import BackgroundImage from '../../assets/img/intro-bg.jpg';

class Welcome extends Component {
    render() {
        return (
            // Start Intro Section 
            <section id="intro" className="back-img" style={{ backgroundImage: `url(${BackgroundImage})`}}>
                <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="title">
                            <div className="title-inner">
                                <h1 className="wow fadeInUp" animation-delay="0.4s" data-wow-delay="0.4s">Perfect Memory<br/> Creator</h1>
                            </div>
                        </div>
                        <p className="wow fadeInUp" animation-delay="0.6s" data-wow-delay="0.6s">Fun and fast, Vimory will help your social media posts
                            stand out from the crowd; perfect for Facebook news feed,
                            stories & profile video and Instagram feed & story.</p>

                        <ul>
                        
                            <li className="wow zoomIn" animation-delay="0.4s" data-wow-delay="0.4s"><a rel="noopener noreferrer" href="https://apps.apple.com/us/app/vimory-photo-video-maker/id1359573092" target="_blank"><LazyLoad><img src={appleStore} alt="Vimory Apple Store" /></LazyLoad></a></li>
                            <li className="wow zoomIn" animation-delay="0.4s" data-wow-delay="0.4s"><a rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=com.appilian.vimory" target="_blank"><LazyLoad><img src={googlePlay} alt="Vimory Google Play Store" /></LazyLoad></a></li>
                        </ul>
                    </div>
                    </div>
                </div>
            </section>
            // End Intro Section
        );
    }
}
export default Welcome;