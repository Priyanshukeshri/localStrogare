import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getContactSingle } from '../store/actions/contactAction';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Tittle, EditContact } from '../components';

function EditUser() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactSingle(id));
  }, []);

  return (
    <Container>
      <Row>
        <Col className="text-center">
          <Tittle tittle="Edit Contact" />
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <EditContact />
      </Row>
    </Container>
  );
}

export default EditUser;
