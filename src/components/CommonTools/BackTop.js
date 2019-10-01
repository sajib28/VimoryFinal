import React, { Component } from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
class BackTop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scrollingLock: false
        };
        // example how to bind object in React ES6
        this.handleScroll = this.handleScroll.bind(this)
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    handleScroll() {

        if (window.scrollY > 300) {
            this.setState({
                scrollingLock: true
            });
        } 
        if (window.scrollY < 100) {
            this.setState({
                scrollingLock: false
            });
        }
    }
    scrollToTop = () => {
        scroll.scrollToTop();
    };
    render() {
        return (
            <div id="backTop">
                <Link
                   activeClass="active"
                    to="intro"
                    spy={false}
                    smooth={true}
                    offset={0}
                    duration={2000}
                    className={this.state.scrollingLock ? 'back-top active':'back-top'}
                    ><i className="fas fa-chevron-up"></i>
                </Link>
            </div>

        )
    }
}
export default BackTop;

