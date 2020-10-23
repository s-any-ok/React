import React from "react";
import {
  Button,
  Row,
  Col,
  Label,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
const AddCommentForm = ({ isModalOpen, toggleModal, handleSubmit }) => {
  return (
    <Modal isOpen={isModalOpen} toggle={toggleModal}>
      <ModalHeader toggle={toggleModal}>Submit Comment</ModalHeader>
      <ModalBody>
        <LocalForm onSubmit={(values) => handleSubmit(values)}>
          <Row className="form-group">
            <Label htmlFor="rating" md={5}>
              Rating
            </Label>
            <Col md={12}>
              <Control.select
                model=".rating"
                name="rating"
                className="form-control"
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
              </Control.select>
            </Col>
          </Row>
          <Row className="form-group">
            <Label htmlFor="author" md={5}>
              Your Name
            </Label>
            <Col md={12}>
              <Control.text
                model=".author"
                id="author"
                name="author"
                placeholder="Your Name"
                className="form-control"
                validators={{
                  required,
                  minLength: minLength(3),
                  maxLength: maxLength(15),
                }}
              />
              <Errors
                className="text-danger"
                model=".author"
                show="touched"
                messages={{
                  required: "Required",
                  minLength: "Must be greater than 2 characters",
                  maxLength: "Must be 15 characters or less",
                }}
              />
            </Col>
          </Row>
          <Row className="form-group">
            <Label htmlFor="comment" md={5}>
              Comments
            </Label>
            <Col md={12}>
              <Control.textarea
                model=".comment"
                id="comment"
                name="comment"
                rows="6"
                className="form-control"
              />
            </Col>
          </Row>
          <Row className="form-group">
            <Col>
              <Button type="submit" color="primary">
                Submit
              </Button>
            </Col>
          </Row>
        </LocalForm>
      </ModalBody>
    </Modal>
  );
};

export default AddCommentForm;
