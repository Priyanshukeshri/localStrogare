import React from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Header() {
  return (
    <Container fluid="md" className="p-3 my-3 border-end border-start border-success border-5  bg-info  rounded-3" style={{ backgroundColor: '#FBF7EC' }}>
      <Row>
        <Col>
          <p className="text-uppercase mt-3 fs-2 fw-bolder text-center  text-success fst-italic font-monospace">Contact Management App</p>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-end fw-bold">
          <Link to="/">
            <i className="fa fa-address-book-o fs-2 mx-3 text-success" />
          </Link>
          <Link to="/ContactList">
            <i className="fa fa-calendar fs-2 alt mx-3 text-success " />

          </Link>
          <Link to="/AddUser">
            <i className="fa fa-user-plus fs-2 mx-3 text-success " />
          </Link>
        </Col>
      </Row>
    </Container>

  );
}

export default Header;
