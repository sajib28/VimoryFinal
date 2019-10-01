import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import BackgroundWithText from '../CommonTools/BackgroundWithText';
import triangle from '../../assets/img/icon/triangle.png';
import PhotoEditTab from './PhotoEditTab';
import BackgroundImage from '../../assets/img/photo-edit-bg.jpg';
import rectangle from '../../assets/img/icon/rectangle.png';
import round from '../../assets/img/icon/round.png';
class PhotoEdit extends Component {
    render() {
        let alt ="Vimory is designed to be your personal photo to video or slideshow stdio to make you a video superstar";
        return (
            <section id="photoEdit">
                <LazyLoad><BackgroundWithText id="photoEditBg" backgroundImage={BackgroundImage} title="Photo Edit" shadowTitle="Photo Edit" /></LazyLoad>
                <div className="content-area">
                    <div className="vimory-animation animation-type-3 top-left mb-none">
                        <div className="vimory-animated-circle"></div>
                        <div className="vimory-animated-circle-container">
                            <img src={triangle} alt={alt} />
                        </div>
                    </div>
                    <div className="vimory-animation animation-type-4 bottom-right mb-none">
                        <img className="rectangle" src={rectangle} alt={alt} />
                        <div className="brk-animated-circle__container">
                            <img className="round" src={round} alt={alt} />
                        </div>
                    </div>

                    <div className="container">
                        <div className="row">
                            <div className="photo-content">
                                <PhotoEditTab />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            // End Effect Section
        )
    }
}
export default PhotoEdit;