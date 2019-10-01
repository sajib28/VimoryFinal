import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { Navbar, Nav} from 'react-bootstrap';
import $ from 'jquery';
// import file or image
import logo from '../../assets/img/vimory-logo.png';

class Header extends Component {


    constructor(props) {
        super(props);
        this.state = {
            scrollingLock: true
        };

        this.handleScroll = this.handleScroll.bind(this);

    }
    componentDidMount() {
        const height = document.getElementById('mainMenu').clientHeight;
        this.setState({ height });
        if ($(window).width() <= 767) {
            $("#mainMenu .navbar-nav .nav-link").click(function () {

                $(".navbar-collapse").slideToggle("slow");
            });
            $("#mainMenu .navbar-toggler").click(function () {

                $(".navbar-collapse").slideToggle("slow");
            });
        }
        window.addEventListener('scroll', this.handleScroll);

    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    handleScroll(event) {
        let introSection = document.getElementById('intro').clientHeight;
        let appFeature = document.getElementById('appFeature').clientHeight;
        let secondMenu = document.getElementById('secondMenu').clientHeight;
        let template = document.getElementById('template').clientHeight;
        let photoEdit = document.getElementById('photoEdit').clientHeight;
        let slide = document.getElementById('slide').clientHeight;
        let effect = document.getElementById('effect').clientHeight;
        let frame = document.getElementById('frame').clientHeight;
        let filter = document.getElementById('filter').clientHeight;
        if ($(window).width() >= 767) {


            if (window.scrollY >= 0) {

                this.setState({
                    scrollingLock: true

                });
                if (window.scrollY >= introSection + appFeature + secondMenu) {
                    // alert("test");
                    this.setState({
                        scrollingLock: false
                    });
                    if (window.scrollY >= introSection + appFeature + secondMenu + template + photoEdit + slide + effect + frame + filter) {
                        // alert("test");
                        this.setState({
                            scrollingLock: true
                        });
                    }
                }
            }
        }
    }
    scrollToTop = () => {
        scroll.scrollToTop(1000);
    };
    render() {

        let alt ="Vimory is designed to be your personal photo to video or slideshow stdio to make you a video superstar";

        return (
            <div>
                <Navbar collapseOnSelect expand="md" id="mainMenu" className={this.state.scrollingLock ? 'fixedClass navbar navbar-expand-md navbar-light header-area' : 'absoluteClass navbar navbar-expand-md navbar-light header-area'}>
                    <div className="container">
                        <Link
                            activeClass="active"
                            to="intro"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={1000}
                            className="nav-link ds-none navbar-brand"><img src={logo} alt={alt} />
                        </Link>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ml-auto">
                                <ul className="navbar-nav" id="main-menu">
                                    <li className="nav-item">
                                        <Link
                                            activeClass="active"
                                            to="intro"
                                            spy={true}
                                            smooth={true}
                                            offset={-this.state.height}
                                            duration={1000}
                                            className="nav-link">Home
                                </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            activeClass="active"
                                            to="appFeature"
                                            spy={true}
                                            smooth={true}
                                            offset={-this.state.height}
                                            duration={1000}
                                            className="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show">Features
                                </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            activeClass="active"
                                            to="pricing"
                                            spy={true}
                                            smooth={true}
                                            offset={-this.state.height}
                                            duration={1500}
                                            className="nav-link">Pricing
                                </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            activeClass="active"
                                            to="faqs"
                                            spy={true}
                                            smooth={true}
                                            offset={-this.state.height}
                                            duration={1500}
                                            className="nav-link">FAQs
                                </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            activeClass="active"
                                            to="getInTouch"
                                            spy={true}
                                            smooth={true}
                                            offset={-this.state.height}
                                            duration={2000}
                                            className="nav-link">Contact Us
                                </Link>
                                    </li>
                                </ul>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Navbar>

            </div>
        );
    }
}

export default Header;