import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import BackgroundWithText from '../CommonTools/BackgroundWithText';
import BackgroundImage from '../../assets/img/filter-bg.jpg';
import FilterTab from './FilterTab';
import rectangle from '../../assets/img/icon/rectangle.png';
import round from '../../assets/img/icon/round.png';
class Filter extends Component {
    render() {
        let alt ="Vimory is designed to be your personal photo to video or slideshow stdio to make you a video superstar";
        return (
            <section id="filter">
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
               
                <BackgroundWithText id="filterBg" backgroundImage={BackgroundImage} title="Filter" shadowTitle="Filter" />
                <div className="content-area">
                <div className="vimory-animation animation-type-4 top-right mb-none">
                    <img className="rectangle" src={rectangle} alt={alt} />
                    <div className="brk-animated-circle__container">
                        <img className="round" src={round} alt={alt} />
                    </div>
                </div>
                    <div className="container">
                        <div className="row">
                            <div className="photo-content">
                                <FilterTab />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            // End Filter Section
        )
    }
}
export default Filter;