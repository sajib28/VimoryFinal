import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import { Navbar, Nav} from 'react-bootstrap';
import $ from 'jquery';
import logo from '../../assets/img/vimory-logo.png';
class SecondHeader extends Component {

    constructor(props) {
        super(props);
        this.state = {
            scrollingLock: false

        };
        this.handleScroll = this.handleScroll.bind(this)
    }

    componentDidMount() {
        // $("#menu-toggle").click(function(e) {
        //     e.preventDefault();
        //     $("#sidebar-wrapper").toggleClass("active");
        // });
        const height = document.getElementById('mainMenu').clientHeight;
        this.setState({ height });
        $(".topMenu-icon").click(function () {
            $("body").toggleClass("sidebarActive");
            $("#sidebar-wrapper").css({"width": "320"});
            $(".topMenu-icon .fa-bars").css({"opacity": "0"});
            
        });
        if ($(window).width() <= 767) {
            $("#secondMenu .navbar").addClass('d-none');
        }
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    handleScroll() {
        $(".dropdown-menu-right").hide();
        let introSection = document.getElementById('intro').clientHeight;
        let appFeature = document.getElementById('appFeature').clientHeight;
        let secondMenu = document.getElementById('secondMenu').clientHeight;
        let template = document.getElementById('template').clientHeight;
        let photoEdit = document.getElementById('photoEdit').clientHeight;
        let slide = document.getElementById('slide').clientHeight;
        let effect = document.getElementById('effect').clientHeight;
        let frame = document.getElementById('frame').clientHeight;
        let filter = document.getElementById('filter').clientHeight;
        if ($(window).width() > 767) {


            if (window.scrollY >= 0) {

                this.setState({
                    scrollingLock: false

                });
                if (window.scrollY > introSection + appFeature) {

                    this.setState({
                        scrollingLock: true

                    });
                    if (window.scrollY >= introSection + appFeature + secondMenu+ template+photoEdit + slide + effect + frame+filter) {
                        // alert("test");
                        this.setState({
                            scrollingLock: false
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
        let alt = "Vimory is designed to be your personal photo to video or slideshow stdio to make you a video superstar";
        return (
            <div id="secondMenu" className={this.state.scrollingLock ? 'second-menu fixedClass mb-none' : 'second-menu absoluteClass mb-none'}>
                <Navbar collapseOnSelect expand="md">
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
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link
                                            activeClass="active"
                                            to="template"
                                            spy={true}
                                            smooth={true}
                                            offset={-this.state.height}
                                            duration={2000}
                                            className="nav-link">Templates
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            activeClass="active"
                                            to="photoEdit"
                                            spy={true}
                                            smooth={true}
                                            offset={-this.state.height}
                                            duration={2000}
                                            className="nav-link">Photo Edit
                                         </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            activeClass="active"
                                            to="slide"
                                            spy={true}
                                            smooth={true}
                                            offset={-this.state.height}
                                            duration={2000}
                                            className="nav-link">Slide
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            activeClass="active"
                                            to="effect"
                                            spy={true}
                                            smooth={true}
                                            offset={-this.state.height}
                                            duration={2000}
                                            className="nav-link">Effect
                                       </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            activeClass="active"
                                            to="frame"
                                            spy={true}
                                            smooth={true}
                                            offset={-this.state.height}
                                            duration={2000}
                                            className="nav-link">Frame
                                </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            activeClass="active"
                                            to="filter"
                                            spy={true}
                                            smooth={true}
                                            offset={-this.state.height}
                                            duration={2000}
                                            className="nav-link">Filter
                                        </Link>
                                    </li>
                                </ul>
                            </Nav>
                            <Nav className="ml-auto topMenu-icon">
                                <li>
                                    {/* <Dropdown alignRight>
                                        <Dropdown.Toggle variant="none" id="dropdown-basic" className="mb-dropdown"> */}
                                            <i className="fas fa-bars"></i>
                                        {/* <Dropdown.Menu> */}
                                            {/* <ul className="list-unstyled">
                                                <li>
                                                    <Link
                                                        activeClass="active"
                                                        to="intro"
                                                        spy={true}
                                                        smooth={true}
                                                        offset={0}
                                                        duration={2000}
                                                        className="dropdown-item">Home
                                                   </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        activeClass="active"
                                                        to="appFeature"
                                                        spy={true}
                                                        smooth={true}
                                                        offset={-this.state.height * 2}
                                                        duration={2000}
                                                        className="dropdown-item">Features
                                </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        activeClass="active"
                                                        to="pricing"
                                                        spy={true}
                                                        smooth={true}
                                                        offset={-this.state.height * 2}
                                                        duration={3000}
                                                        className="dropdown-item">Pricing
                                </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        activeClass="active"
                                                        to="faqs"
                                                        spy={true}
                                                        smooth={true}
                                                        offset={-this.state.height * 2}
                                                        duration={3000}
                                                        className="dropdown-item">FAQs
                                </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        activeClass="active"
                                                        to="getInTouch"
                                                        spy={true}
                                                        smooth={true}
                                                        offset={-this.state.height * 2}
                                                        duration={3000}
                                                        className="dropdown-item">Contact Us
                                </Link>
                                                </li>
                                            </ul> */}
                                        {/* </Dropdown.Menu>

                                    </Dropdown> */}
                                </li>
                            </Nav>

                        </Navbar.Collapse>
                    </div>
                </Navbar>
            </div>
        )
    }
}
export default SecondHeader;