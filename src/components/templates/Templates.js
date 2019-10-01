import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import BackgroundWithText from '../CommonTools/BackgroundWithText';
import AnimationSlider from './AnimationSlider';
import BackgroundImage from '../../assets/img/template-bg.jpg';
class Templates extends Component {
    render() {
        return (
            // Start Template Section
            <section id="template">
                 <LazyLoad>
                <BackgroundWithText id ="templateBg" backgroundImage={BackgroundImage} title="Templates" shadowTitle="Templates"/>
                </LazyLoad>
                <AnimationSlider/>
            </section>
            // End Template Section
        );
    }
}

export default Templates;