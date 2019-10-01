import React, { Component } from 'react'

class BackgroundWithText extends Component {

    render() {
        return (
            <div id={this.props.id} className="photo-area" style={{ backgroundImage: `url(${this.props.backgroundImage})` }}>
                <div className="pic-overlay"></div>
                <div className="container">
                    <div className="col-md-12">
                        <div className="title">
                            <div className="title-inner shadow-title text-center">
                                <h2 className="wow zoomIn" data-wow-delay="0.2s" animation-delay="0.2s">{this.props.title}<span className="shadow-text wow zoomIn" data-wow-delay="0.4s" animation-delay="0.4s">{this.props.shadowTitle}</span>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default BackgroundWithText;