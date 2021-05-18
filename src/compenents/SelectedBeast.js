import React from 'react';
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/Button";
class SelectedBeast extends React.Component {

  onHide = () => {
    this.props.onHide()
  }
  render() {
    return (
      <Modal show={this.props.show} onHide={this.onHide} animation={false}>
        <ModalHeader closeButton>
          <ModalTitle>{this.props.modalCard.title}</ModalTitle>
        </ModalHeader>
        <ModalBody>

          <Card style={{ width: '30rem' }}>
            <Card.Img variant="top" src={this.props.modalCard.img_url} alt={this.props.modalCard.title} />
            <Card.Body>
              <Card.Text>
                {this.props.modalCard.description}
              </Card.Text>
            </Card.Body>
          </Card>

        </ModalBody>
        <ModalFooter>
          <Button variant="secondary" onClick={this.onHide}>
            Close
              </Button>
        </ModalFooter>
      </Modal>
    );
  }

}
export default SelectedBeast;
