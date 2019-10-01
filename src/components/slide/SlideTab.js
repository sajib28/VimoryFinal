import React, { Component } from 'react';
// import LazyLoad from 'react-lazyload';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import mobileSlidePic from '../../assets/img/slide-mobile.jpg';
import mobileFrame from '../../assets/img/mobile-frame.png';
import move from '../../assets/media/slide/move.mp4';
import heart from '../../assets/media/slide/heart.mp4';
import slice from '../../assets/media/slide/slice.mp4';
import flip from '../../assets/media/slide/flip.mp4';
import skew from '../../assets/media/slide/skew.mp4';
// import moveweb from '../../assets/media/slide/move.webm';
// import heartweb from '../../assets/media/slide/heart.webm';
// import sliceweb from '../../assets/media/slide/slice.webm';
// import flipweb from '../../assets/media/slide/flip.webm';
// import skewweb from '../../assets/media/slide/skew.webm';
class SlideTab extends Component {

    render() {
        let alt = "Vimory is designed to be your personal photo to video or slideshow stdio to make you a video superstar";
        let title = "Slide";
        let description = "Vimory understands your need for animation slides to create looping slideshow video moments. Select a video animation slide that suits your needs and the story you want to give an impact.Try it now and share it with your friends.";
        return (
            <div>
                <Tabs forceRenderTabPanel={true} defaultIndex={0}>
                    <div className="tab-content">
                        <TabPanel>
                            <div className="col-lg-5 order-md-2 order-lg-2">
                                <div className="mobile-frame wow fadeInUp" animation-delay="0.6s" data-wow-delay="0.6s">
                                    <img src={mobileFrame} alt={alt} />
                                    <div className="mobile-frame-content allDevice">
                                       <img class="onlyMobile" src={mobileSlidePic} alt={alt} />
                                        <div className="video-template">
                                                <video autoPlay loop muted playsInline>
                                                    {/* <source src={moveweb} preload="auto" type="video/webm" /> */}
                                                    <source src={move} preload="auto" type="video/mp4" />
                                                </video>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 order-md-1 order-lg-1">
                                <h3 className="wow fadeInUp" animation-delay="0.4s" data-wow-delay="0.4s">{title}</h3>
                                <p className="wow fadeInUp" animation-delay="0.4s" data-wow-delay="0.4s">{description}</p>
                            </div>

                        </TabPanel>
                        <TabPanel>
                            <div className="col-lg-7 mb-none">
                                <h3>{title}</h3>
                                <p>{description}</p>
                            </div>
                            <div className="col-lg-5 mb-none">
                                <div className="mobile-frame">
                                    <img src={mobileFrame} alt={alt} />
                                    <div className="mobile-frame-content allDevice">
                                        <div className="video-template">
                                                <video autoPlay loop muted playsInline>
                                                    {/* <source src={heartweb} preload="auto" type="video/webm" /> */}
                                                    <source src={heart} preload="auto" type="video/mp4" />
                                                </video>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="col-lg-7 mb-none">
                                <h3>{title}</h3>
                                <p>{description}</p>
                            </div>
                            <div className="col-lg-5 mb-none">
                                <div className="mobile-frame">
                                    <img src={mobileFrame} alt={alt} />
                                    <div className="mobile-frame-content allDevice">
                                        <div className="video-template">
                                                <video autoPlay loop muted playsInline>
                                                    {/* <source src={sliceweb} preload="auto" type="video/webm" /> */}
                                                    <source src={slice} preload="auto" type="video/mp4" />
                                                </video>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="col-lg-7 mb-none">
                                <h3>{title}</h3>
                                <p>{description}</p>
                            </div>
                            <div className="col-lg-5 mb-none">
                                <div className="mobile-frame">
                                    <img src={mobileFrame} alt={alt} />
                                    <div className="mobile-frame-content allDevice">
                                        <div className="video-template">
                                                <video autoPlay loop muted playsInline>
                                                    {/* <source src={flipweb} preload="auto" type="video/webm" /> */}
                                                    <source src={flip} preload="auto" type="video/mp4" />
                                                </video>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="col-lg-7 mb-none">
                                <h3>{title}</h3>
                                <p>{description}</p>
                            </div>
                            <div className="col-lg-5 mb-none">
                                <div className="mobile-frame">
                                    <img src={mobileFrame} alt={alt} />
                                    <div className="mobile-frame-content allDevice">
                                        <div className="video-template">
                                                <video autoPlay loop muted playsInline>
                                                    {/* <source src={skewweb} preload="auto" type="video/webm" /> */}
                                                    <source src={skew} preload="auto" type="video/mp4" />
                                                </video>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                        <TabList>
                            <Tab><div className="img-hover slide-crop"><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 34.362 33.278">
                                <g id="Group_2106" data-name="Group 2106" transform="translate(-2027.163 -7307.624)">
                                    <g id="Group_2105" data-name="Group 2105" transform="translate(2028.163 7308.624)">
                                        <rect id="Rectangle_1346" data-name="Rectangle 1346" className="cls-1" width="24.748" height="24.643" transform="translate(0 0)" />
                                        <rect id="Rectangle_1347" data-name="Rectangle 1347" className="cls-2" width="24.748" height="24.643" transform="translate(7.615 6.635)" />
                                    </g>
                                </g>
                            </svg>
                            </div>
                                <span>Move</span>
                            </Tab>
                            <Tab>
                                <div className="img-hover slide-heart">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 33.439 29.943">
                                        <g id="Group_2107" data-name="Group 2107" transform="translate(-2027.646 -7309.998)">
                                            <g id="Group_2101" data-name="Group 2101" transform="translate(2028.646 7311)">
                                                <path id="Path_21981" data-name="Path 21981" className="cls-1" d="M957.534,2411.328a8.215,8.215,0,0,0-8.942-7.78c-4.113.278-6.792,4.474-6.792,4.474s-2.747-4.1-6.865-4.24a8.391,8.391,0,0,0-8.81,8.085c-.212,4.3,2.7,8.117,5.056,10.707a52.684,52.684,0,0,0,10.812,8.723,54.094,54.094,0,0,0,10.666-9.092C954.965,2419.536,957.818,2415.615,957.534,2411.328Z" transform="translate(-926.114 -2403.527)" />
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <span>Heart</span>
                            </Tab>
                            <Tab><div className="img-hover slide-Slice">
                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 38.644 35.509">
                                    <g id="Group_2108" data-name="Group 2108" transform="translate(-2024.672 -7307.772)">
                                        <g id="Group_2102" data-name="Group 2102" transform="translate(2025.422 7308.522)">
                                            <rect id="Rectangle_1336" data-name="Rectangle 1336" className="cls-1" width="7.357" height="21.256" transform="translate(7.357 12.754)" />
                                            <rect id="Rectangle_1337" data-name="Rectangle 1337" className="cls-1" width="7.331" height="21.183" transform="translate(22.122 12.71)" />
                                            <rect id="Rectangle_1338" data-name="Rectangle 1338" className="cls-2" width="7.357" height="21.256" transform="translate(0 0)" />
                                            <rect id="Rectangle_1339" data-name="Rectangle 1339" className="cls-3" width="7.571" height="21.874" transform="translate(14.432 0)" />
                                            <rect id="Rectangle_1340" data-name="Rectangle 1340" className="cls-2" width="7.571" height="21.874" transform="translate(29.573 0)" />
                                        </g>
                                    </g>
                                </svg>

                            </div>
                                <span>Slice</span></Tab>
                            <Tab>
                                <div className="img-hover slide-flip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 37.247 36.045">
                                        <g id="Group_2109" data-name="Group 2109" transform="translate(-2026.583 -7306.263)">
                                            <g id="Group_2100" data-name="Group 2100" transform="translate(2027.869 7309.088)">
                                                <path id="Path_21979" data-name="Path 21979" className="cls-1" d="M1131.455,2403.37l-12.3,15.2,12.3,15.2Z" transform="translate(-1119.16 -2403.37)" />
                                                <path id="Path_21980" data-name="Path 21980" className="cls-2" d="M1162.944,2403.37l12.3,15.2-12.3,15.2Z" transform="translate(-1140.565 -2403.37)" />
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <span>Flip</span></Tab>
                            <Tab>
                                <div className="img-hover slide-kernel">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38">
                                        <g id="skew" transform="translate(-1332 -6680)">
                                            <g id="Group_2144" data-name="Group 2144">
                                                <g id="Group_2143" data-name="Group 2143" transform="translate(0 -3)">
                                                    <g id="Rectangle_1403" className="skew-icon" data-name="Rectangle 1403" transform="translate(1332 6683)" fill="#fff" stroke="#aeaeae" strokeWidth="1.2">
                                                        <rect width="38" height="38" stroke="none" />
                                                        <rect x="0.6" y="0.6" width="36.8" height="36.8" fill="none" />
                                                    </g>
                                                    <g id="Rectangle_1402" className="skew-icon" data-name="Rectangle 1402" transform="translate(1336 6687)" fill="#fff" stroke="#9a9a9a" strokeWidth="1.2">
                                                        <rect width="30" height="30" stroke="none" />
                                                        <rect x="0.6" y="0.6" width="28.8" height="28.8" fill="none" />
                                                    </g>
                                                    <g id="Rectangle_1401" className="skew-icon" data-name="Rectangle 1401" transform="translate(1341 6692)" fill="#fff" stroke="#1a1a1a" strokeWidth="1.3" opacity="0.6">
                                                        <rect width="20" height="20" stroke="none" />
                                                        <rect x="0.65" y="0.65" width="18.7" height="18.7" fill="none" />
                                                    </g>
                                                    <g id="Rectangle_1400" className="skew-icon" data-name="Rectangle 1400" transform="translate(1346 6697)" fill="#fff" stroke="#000" strokeWidth="1.5">
                                                        <rect width="10" height="10" stroke="none" />
                                                        <rect x="0.75" y="0.75" width="8.5" height="8.5" fill="none" />
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <span>Skew</span></Tab>
                        </TabList>
                    </div>
                </Tabs>
            </div>
        )
    }
}
export default SlideTab;