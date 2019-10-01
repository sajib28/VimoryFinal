import React, { Component } from 'react';
import AboutModal from '../modal/AboutModal';
import PrivacyPolicyModal from '../modal/PrivacyPolicyModal';
import TermConditionModal from '../modal/TermConditionModal';
import { Button } from 'react-bootstrap';
import mySpace from '../../assets/img/icon/myspace.png';
import BackTop from './BackTop';
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = { deps: [], aboutModal: false }
        this.state = { deps: [], privacyModal: false }
        this.state = { deps: [], termConditionModal: false }
    }
    render() {
        let aboutModalClose = () => this.setState({ aboutModal: false });
        let privacyModalclose = () => this.setState({ privacyModal: false });
        let termConditionModalClose = () => this.setState({ termConditionModal: false });
        return (
            <footer id="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="footer-menu">
                                <ul className="nav list-inline list-unstyled wow fadeInUp" animation-delay="0.2s" data-wow-delay="0.2s">
                                    <li>
                                        <Button variant="" onClick={() => this.setState({ aboutModal: true })}>About us</Button>
                                    </li>
                                    <li>
                                        <Button variant="" onClick={() => this.setState({ privacyModal: true })}>Privacy policy</Button>
                                    </li>
                                    <li>
                                        <Button variant="" onClick={() => this.setState({ termConditionModal: true })}>Terms & Condition</Button>
                                    </li>
                                    {/* <p className="text-center">© 2019 APPILIAN.All Rights Reserved.</p> */}
                                    {/* <li><a href="/" >Blog</a></li> */}
                                   
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="social-icon pull-right">
                                <ul className="list-inline list-unstyled float-right wow fadeInUp" animation-delay="0.4s" data-wow-delay="0.4s">
                                    <li><a className="follows" href="/">Follows Us: </a></li>
                                    <li><a href="https://www.youtube.com/channel/UC5TPYUycaI7psddVNtX_UaA" rel="noopener noreferrer" target="_blank"><i className="fab fa-youtube"></i></a></li>
                                    <li><a href="https://www.facebook.com/vimoryapp/" rel="noopener noreferrer" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="https://twitter.com/VimoryApp" rel="noopener noreferrer" target="_blank"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="https://www.instagram.com/vimoryapp/" rel="noopener noreferrer" target="_blank"><i className="fab fa-instagram"></i></a></li>
                                    <li><a href="https://www.reddit.com/user/vimoryapp" rel="noopener noreferrer" target="_blank"><i className="fab fab fa-reddit"></i></a></li>
                                    <li><a href="https://www.pinterest.com/vimoryapp/" rel="noopener noreferrer" target="_blank"><i className="fab fa-pinterest"></i></a></li>
                                    <li><a href="https://vimoryapp.tumblr.com/" rel="noopener noreferrer" target="_blank"><i className="fab fa-tumblr"></i></a></li>
                                    <li><a href="https://myspace.com/vimoryapp" rel="noopener noreferrer" target="_blank"><img src={mySpace} alt="Vimory Myspace"/></a></li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-md-12">
                        </div>
                    </div>
                </div>
                <AboutModal
                    show={this.state.aboutModal}
                    onHide={aboutModalClose} />
                <PrivacyPolicyModal
                    show={this.state.privacyModal}
                    onHide={privacyModalclose} />
                <TermConditionModal
                    show={this.state.termConditionModal}
                    onHide={termConditionModalClose} />
                <BackTop/>
            </footer>
        )
    }
}
export default Footer;