import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

const LoginForm = ({ isModalOpen, toggleModal, handleLogin }) => {
  return (
    <Modal isOpen={isModalOpen} toggle={toggleModal}>
      <ModalHeader toggle={toggleModal}>Login</ModalHeader>
      <ModalBody>
        <Form onSubmit={handleLogin}>
          <FormGroup>
            <Label htmlFor="username">Username</Label>
            <Input type="text" id="username" name="username" />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Password</Label>
            <Input type="password" id="password" name="password" />
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" name="remember" />
              Remember me
            </Label>
          </FormGroup>
          <Button type="submit" value="submit" color="primary">
            Login
          </Button>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default LoginForm;
