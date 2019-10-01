import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
class AboutModal extends Component {
  // constructor(props){
  //     super(props);
  // }

  render() {

    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            About Us
        </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>APPILIAN, an app development company, located in Dhaka, Bangladesh, is committed to advancing the mobile revolution by improving the way people experience their Smartphone.</p>
          <p>Our aim is to provide leading apps for iOS, Android and Web and let users personalize their contents in a better way. We have nurtured a team of best designers, artists, developers and technical experts, who are focused on delivering the most creative, innovative, profitable, and cutting edge applications and software.</p>
          <p>With our extensive experience, we deliver top-notch software products to our clients around the world. We are always excited and thrilled to develop apps that change peoples’ lives.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}
export default AboutModal;