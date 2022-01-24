import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Tittle from './Tittle';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { setUser, addNote } from '../store/actions/noteAction';
import FormControlItem from './Form/FormControlItem';
import formatDate from 'Utilities/formatDate';
import alertify from 'alertifyjs';

function ModalNote({ id }) {
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(formatDate(new Date()));
  const [note, setNote] = useState('');

  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes.notes);
  const user = useSelector((state) => state.notes.user);

  const newNote = ({ user, date, note });

  const handleModalClick = () => {
    setShow(true);
    dispatch(setUser(id));
  };

  const handleSubmit = () => {
    dispatch(addNote(newNote));
    alertify.success('Note Added.');
    setShow(false);
  };
  useEffect(() => {
    localStorage.setItem('note', JSON.stringify(notes));
  }, [notes, dispatch]);
  return (
    <>
      <i className="fa fa-clock-o text-secondary mx-2 fs-4 btn" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit" onClick={handleModalClick} />
      <Modal
        show={show}
        onHide={() => setShow(false)}
        keyboard={false}
        centered
      >
        <Modal.Body>
          <Container>
            <Row>
              <Col className="sm={8} text-center">
                <Tittle tittle="Note Contact" />
              </Col>
              <Col className="sm={4} text-end fs-3 text-danger">
                <i className="fa fa-times-circle-o top:10 right:10" onClick={() => setShow(false)} />
              </Col>
            </Row>
            <Row className="justify-content-md-center">
              <Form className="mx-5">
                <FormControlItem label="Name" value={user || ''} disabled />
                <FormControlItem label="Contact Date" type="date" value={date || ''} onChange={(e) => setDate(formatDate(e.target.value))} />
                <FormControlItem type="text" label="Note" value={note || ''} onChange={(e) => setNote(e.target.value)} />
                <Button variant="outline-success" type="button" onClick={handleSubmit}>Add Note </Button>
              </Form>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalNote;
