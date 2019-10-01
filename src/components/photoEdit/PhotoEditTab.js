import React, { Component } from 'react';
// import LazyLoad from 'react-lazyload';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import mobilePhotoEditPic from '../../assets/img/photo_edit-mobile.jpg';
import mobileFrame from '../../assets/img/mobile-frame.png';
import Crop from '../../assets/media/photo-edit/crop.mp4';
import Filter from '../../assets/media/photo-edit/filter.mp4';
import Adjust from '../../assets/media/photo-edit/adjustment.mp4';
import Focus from '../../assets/media/photo-edit/focus.mp4';
import Emoji from '../../assets/media/photo-edit/Emoji.mp4';
// import Cropweb from '../../assets/media/photo-edit/crop.webm';
// import Filterweb from '../../assets/media/photo-edit/filter.webm';
// import Adjustweb from '../../assets/media/photo-edit/adjustment.webm';
// import Focusweb from '../../assets/media/photo-edit/focus.webm';
// import Emojiweb from '../../assets/media/photo-edit/Emoji.webm';
class PhotoEditTab extends Component {
    render() {
        let alt ="Vimory is designed to be your personal photo to video or slideshow stdio to make you a video superstar";
        let title = "Photo Edit";
        let description = "Try professional photo editing tools to edit single or multiple photos for adjustments, beautify or an ideal photogenic outlook.";
        return (
            <div>
                <Tabs forceRenderTabPanel={true} defaultIndex={0}>
                    <div className="tab-content right-tab">
                        <TabPanel>
                            <div className="col-lg-5">
                                <div className="mobile-frame  wow fadeInUp" animation-delay="0.4s" data-wow-delay="0.4s">
                                    <img src={mobileFrame} alt={alt} />
                                    <div className="mobile-frame-content allDevice">
                                        <img class="onlyMobile" src={mobilePhotoEditPic} alt={alt} />
                                        <div className="video-template">
                                            <video autoPlay loop muted playsInline>
                                                {/* <source src={Cropweb} preload="auto" type="video/webm" /> */}
                                                <source src={Crop} preload="auto" type="video/mp4" />
                                            </video>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <h3 className="wow fadeInUp" animation-delay="0.6s" data-wow-delay="0.6s">{title}</h3>
                                <p className="wow fadeInUp" animation-delay="0.8s" data-wow-delay="0.8s">{description}</p>
                                <ul className="list-unstyled content-list wow fadeInUp" animation-delay=".9s" data-wow-delay=".9s">
                                    <li><i className="far fa-clone"></i>Modern photo cropping tools allow you to crop your photo more easily.</li>
                                    <li><i className="far fa-clone"></i>Express the moment with emoji and do more with it.</li>
                                    <li><i className="far fa-clone"></i>So many options like Exposure, Brightness, Contrast, Saturation,Warmth, highlights that give you a professional photo editing experience.</li>
                                    <li><i className="far fa-clone"></i>Vimory gives you the power  to focus on a specific area of your photo.</li>
                                    <li><i className="far fa-clone"></i>So many filters to enhance your look.</li>
                                </ul>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="col-lg-5 mb-none">
                                <div className="mobile-frame">
                                    <img src={mobileFrame} alt={alt} />
                                    <div className="mobile-frame-content allDevice">
                                        <div className="video-template">
                                            <video autoPlay loop muted playsInline>
                                            {/* <source src={Filterweb} preload="auto" type="video/webm" /> */}
                                                <source src={Filter} preload="auto" type="video/mp4" />
                                            </video>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 mb-none">
                                <h3>Photo Edit</h3>
                                <p>Try professional photo editing tools to edit single or multiple photos for adjustments, beautify or an ideal photogenic outlook.</p>
                                <ul className="list-unstyled content-list">
                                    <li><i className="far fa-clone"></i>Modern photo cropping tools allow you to crop your photo more easily.</li>
                                    <li><i className="far fa-clone"></i>Express the moment with emoji and do more with it.</li>
                                    <li><i className="far fa-clone"></i>So many options like Exposure, Brightness, Contrast, Saturation,Warmth, highlights that give you a professional photo editing experience.</li>
                                    <li><i className="far fa-clone"></i>Vimory gives you the power  to focus on a specific area of your photo.</li>
                                    <li><i className="far fa-clone"></i>So many filters to enhance your look.</li>
                                </ul>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="col-lg-5 mb-none">
                                <div className="mobile-frame">
                                    <img src={mobileFrame} alt={alt} />
                                    <div className="mobile-frame-content allDevice">
                                        <div className="video-template">
                                            <video autoPlay loop muted playsInline>
                                            {/* <source src={Adjustweb} preload="auto" type="video/webm" /> */}
                                                <source src={Adjust} preload="auto" type="video/mp4" />
                                            </video>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 mb-none">
                                <h3>Photo Edit</h3>
                                <p>Try professional photo editing tools to edit single or multiple photos for adjustments, beautify or an ideal photogenic outlook.</p>
                                <ul className="list-unstyled content-list">
                                    <li><i className="far fa-clone"></i>Modern photo cropping tools allow you to crop your photo more easily.</li>
                                    <li><i className="far fa-clone"></i>Express the moment with emoji and do more with it.</li>
                                    <li><i className="far fa-clone"></i>So many options like Exposure, Brightness, Contrast, Saturation,Warmth, highlights that give you a professional photo editing experience.</li>
                                    <li><i className="far fa-clone"></i>Vimory gives you the power  to focus on a specific area of your photo.</li>
                                    <li><i className="far fa-clone"></i>So many filters to enhance your look.</li>
                                </ul>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="col-lg-5 mb-none">
                                <div className="mobile-frame">
                                    <img src={mobileFrame} alt={alt} />
                                    <div className="mobile-frame-content allDevice">
                                        <div className="video-template">
                                            <video autoPlay loop muted playsInline>
                                            {/* <source src={Focusweb} preload="auto" type="video/webm" /> */}
                                                <source src={Focus} preload="auto" type="video/mp4" />
                                            </video>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 mb-none">
                                <h3>Photo Edit</h3>
                                <p>Try professional photo editing tools to edit single or multiple photos for adjustments, beautify or an ideal photogenic outlook.</p>
                                <ul className="list-unstyled content-list">
                                    <li><i className="far fa-clone"></i>Modern photo cropping tools allow you to crop your photo more easily.</li>
                                    <li><i className="far fa-clone"></i>Express the moment with emoji and do more with it.</li>
                                    <li><i className="far fa-clone"></i>So many options like Exposure, Brightness, Contrast, Saturation,Warmth, highlights that give you a professional photo editing experience.</li>
                                    <li><i className="far fa-clone"></i>Vimory gives you the power  to focus on a specific area of your photo.</li>
                                    <li><i className="far fa-clone"></i>So many filters to enhance your look.</li>
                                </ul>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="col-lg-5 mb-none">
                                <div className="mobile-frame">
                                    <img src={mobileFrame} alt={alt} />
                                    <div className="mobile-frame-content allDevice">
                                        <div className="video-template">
                                            <video autoPlay loop muted playsInline>
                                            {/* <source src={Emojiweb} preload="auto" type="video/webm" /> */}
                                                <source src={Emoji} preload="auto" type="video/mp4" />
                                            </video>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 mb-none">
                                <h3>Photo Edit</h3>
                                <p>Try professional photo editing tools to edit single or multiple photos for adjustments, beautify or an ideal photogenic outlook.</p>
                                <ul className="list-unstyled content-list">
                                    <li><i className="far fa-clone"></i>Modern photo cropping tools allow you to crop your photo more easily.</li>
                                    <li><i className="far fa-clone"></i>Express the moment with emoji and do more with it.</li>
                                    <li><i className="far fa-clone"></i>So many options like Exposure, Brightness, Contrast, Saturation,Warmth, highlights that give you a professional photo editing experience.</li>
                                    <li><i className="far fa-clone"></i>Vimory gives you the power  to focus on a specific area of your photo.</li>
                                    <li><i className="far fa-clone"></i>So many filters to enhance your look.</li>
                                </ul>
                            </div>
                        </TabPanel>
                        <TabList>
                            <Tab><div className="img-hover"><svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 46.831 46.831">
                                <g id="Group_2051" data-name="Group 2051" transform="translate(-6688.701 -1456.503)">
                                    <g id="Group_1999" data-name="Group 1999" transform="translate(6688.701 1456.503)">
                                        <g id="Group_1998" data-name="Group 1998" transform="translate(2.061 2.061)">
                                            <path id="Path_1729" data-name="Path 1729" className="cls-2" d="M28.243,39.443H26V8.348H8.2V6.1H28.243Z" transform="translate(5.1 3.266)" />
                                            <path id="Path_1730" data-name="Path 1730" className="cls-2" d="M26.143,34.443H6.1V1.1H8.348V32.2h17.8Z" transform="translate(3.266 -1.1)" />
                                            <rect id="Rectangle_1256" data-name="Rectangle 1256" className="cls-2" width="7.68" height="2.248" transform="translate(35.029 31.096)" />
                                            <rect id="Rectangle_1257" data-name="Rectangle 1257" className="cls-2" width="7.68" height="2.248" transform="translate(0 9.366)" />
                                        </g>
                                    </g>
                                </g>
                            </svg></div><span>Crop</span>
                            </Tab>
                            <Tab>
                                <div className="img-hover">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 44.833 44.833">
                                        <g id="Group_2052" data-name="Group 2052" transform="translate(-727.334 -5456.334)">
                                            <g id="Group_2001" data-name="Group 2001" transform="translate(727.334 5456.334)">
                                                <g id="Group_2000" data-name="Group 2000" transform="translate(2.69 2.152)">
                                                    <path id="Path_1732" data-name="Path 1732" className="cls-2" d="M22.012,32.824a12.94,12.94,0,0,1-10.76-20.085l1.793,1.255a10.558,10.558,0,0,0-1.793,6.1,10.76,10.76,0,1,0,10.76-10.76V7a12.912,12.912,0,0,1,0,25.824Z" transform="translate(4.529 3.401)" />
                                                    <path id="Path_1733" data-name="Path 1733" className="cls-2" d="M14.412,35.324a12.912,12.912,0,1,1,0-25.824,13.421,13.421,0,0,1,10.76,5.559l-1.793,1.255a10.964,10.964,0,0,0-8.967-4.663,10.76,10.76,0,0,0,0,21.52A10.96,10.96,0,0,0,23.2,28.689l1.793,1.255A13.168,13.168,0,0,1,14.412,35.324Z" transform="translate(-1.5 5.385)" />
                                                    <path id="Path_1734" data-name="Path 1734" className="cls-2" d="M15.133,27.024V24.872a10.76,10.76,0,1,0-10.76-10.76,10.068,10.068,0,0,0,1.614,5.559L4.193,20.747A12.308,12.308,0,0,1,2.4,14.112a12.912,12.912,0,1,1,25.824,0A13.012,13.012,0,0,1,15.133,27.024Z" transform="translate(-0.786 -1.2)" />
                                                    <path id="Path_1735" data-name="Path 1735" className="cls-2" d="M16.635,14.587A12.389,12.389,0,0,1,10,17.456v-.179A10.734,10.734,0,0,1,11.793,11,9.343,9.343,0,0,1,16.635,14.587Z" transform="translate(5.243 6.575)" />
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <span>Filter</span>
                            </Tab>
                            <Tab><div className="img-hover">
                                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 71.739 71.739">
                                    <g id="adjustment" transform="translate(-6855.928 -1443.927)">
                                        <g id="Group_2005" data-name="Group 2005" transform="translate(6855.927 1443.927)">
                                            <path id="Path_1736" data-name="Path 1736" d="M71.739,71.739H0V0H71.739ZM1.722,70.018h68.3V1.722H1.722Z" fill="none" />
                                            <g id="Group_2004" data-name="Group 2004" transform="translate(16.63 21.268)">
                                                <g id="Group_2002" data-name="Group 2002" transform="translate(0 23.055)">
                                                    <path id="Path_1737" className="adjust-icon" data-name="Path 1737" d="M10.325,25.451a5.325,5.325,0,1,1,5.325-5.325A5.352,5.352,0,0,1,10.325,25.451Zm0-8.589a3.264,3.264,0,1,0,3.264,3.264A3.379,3.379,0,0,0,10.325,16.861Z" transform="translate(2.77 -14.8)" stroke="#000" strokeWidth="1.5" />
                                                    <rect id="Rectangle_1258" className="adjust-icon" data-name="Rectangle 1258" width="19.927" height="2.061" transform="translate(21.364 4.295)" stroke="#000" strokeWidth="1.5" />
                                                    <rect id="Rectangle_1259" className="adjust-icon" data-name="Rectangle 1259" width="4.81" height="2.061" transform="translate(0 4.295)" stroke="#000" strokeWidth="1.5" />
                                                </g>
                                                <g id="Group_2003" data-name="Group 2003">
                                                    <rect id="Rectangle_1260" className="adjust-icon" data-name="Rectangle 1260" width="4.81" height="2.061" transform="translate(36.481 4.295)" stroke="#000" strokeWidth="1.5" />
                                                    <rect id="Rectangle_1261" className="adjust-icon" data-name="Rectangle 1261" width="19.755" height="2.061" transform="translate(0 4.295)" stroke="#000" strokeWidth="1.5" />
                                                    <path id="Path_1738" className="adjust-icon" data-name="Path 1738" d="M19.125,14.651a5.325,5.325,0,1,1,5.325-5.325A5.352,5.352,0,0,1,19.125,14.651Zm0-8.589a3.264,3.264,0,1,0,3.264,3.264A3.509,3.509,0,0,0,19.125,6.061Z" transform="translate(9.071 -4)" stroke="#000" strokeWidth="1.5" />
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                                <span>Adjustment</span></Tab>
                            <Tab>
                                <div className="img-hover">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 56.333 56.333">

                                        <g id="Group_2054" data-name="Group 2054" transform="translate(-6955.667 -1453.667)">
                                            <g id="Group_2007" data-name="Group 2007" transform="translate(6955.667 1453.667)">
                                                <g id="Group_2006" data-name="Group 2006" transform="translate(8.788 8.788)">
                                                    <path id="Path_1740" data-name="Path 1740" className="cls-2" d="M26.489,14.04h-2.7V6.6H16.8V3.9h9.689Z" transform="translate(12.268 -3.9)" />
                                                    <path id="Path_1741" data-name="Path 1741" className="cls-2" d="M13.364,26.113H3.9V17.1H6.6v6.309h6.76Z" transform="translate(-3.9 12.644)" />
                                                    <path id="Path_1742" data-name="Path 1742" className="cls-2" d="M6.6,14.04H3.9V3.9h9.464V6.6H6.6Z" transform="translate(-3.9 -3.9)" />
                                                    <path id="Path_1743" data-name="Path 1743" className="cls-2" d="M26.489,26.113H16.8v-2.7h6.985V17.1h2.7Z" transform="translate(12.268 12.644)" />
                                                    <path id="Path_1744" data-name="Path 1744" className="cls-2" d="M17.388,26.376A8.8,8.8,0,0,1,8.6,17.588,8.948,8.948,0,0,1,17.388,8.8a8.948,8.948,0,0,1,8.788,8.788A8.8,8.8,0,0,1,17.388,26.376Zm0-14.872a6.084,6.084,0,1,0,6.084,6.084A6.059,6.059,0,0,0,17.388,11.5Z" transform="translate(1.991 2.241)" />
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <span>Focus</span></Tab>
                            <Tab>
                                <div className="img-hover">
                                    <i className="far fa-smile"></i>
                                </div>
                                <span>Emoji</span></Tab>
                        </TabList>
                    </div>
                </Tabs>
            </div>
        )
    }
}
export default PhotoEditTab;