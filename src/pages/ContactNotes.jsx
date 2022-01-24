import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import getDiffBetweenDays from 'Utilities/getDateDiff';
import { deleteNote } from '../store/actions/noteAction';
import alertify from 'alertifyjs';
import { Tittle } from '../components';

function ContactList() {
  const notes = useSelector((state) => state.notes.notes);
  const dispatch = useDispatch();

  const contactAlarmIcon = (date) => {
    const day = getDiffBetweenDays(date);
    if (day === 999) {
      return (
        <i className="fa fa-bell mx-2 text-danger btn fs-4" />
      );
    } if (day < 7) {
      return (
        <i className="fa fa-exclamation-triangle mx-2 text-warning btn fs-4" />
      );
    }
  };
  const handleDeleteNote = async (id) => {
    await dispatch(deleteNote(id));
    alertify.warning('Note Deleted');
    localStorage.setItem('note', JSON.stringify(notes));
  };

  useEffect(() => {
    localStorage.setItem('note', JSON.stringify(notes));
  }, [notes, dispatch]);

  return (
    <div>
      <Container>
        <Tittle tittle="Contact Notes" />
        <Row xs={1} md={2} className="g-4">
          {
          notes.map((n) => (
            <Col key={n.id}>
              <Card className="bg-light" style={{ height: '250px' }}>
                <Card.Body>
                  <Card.Title className="text-center bg-info text-dark fw-bold border rounded-pill ">
                    {n.user}
                    {contactAlarmIcon(n.date)}
                  </Card.Title>
                  <Card.Text>
                    <Table responsive striped className="table table-borderless text-start lh-lg">
                      <tr className>
                        <td className="text-primary fs-5 fw-bold">Date:</td>
                        <td className="text-dark">
                          {n.date}
                        </td>
                      </tr>
                      <tr>
                        <td className="text-primary fs-5 fw-bold">Note:</td>
                        <td className="text-dark">{n.note}</td>
                      </tr>
                      <tr>
                        <td colSpan="2" className="text-center">
                          <i type="button" className="fa fa-trash text-danger mx-2 fs-3 btn " data-bs-toggle="tooltip" data-bs-placement="top" title="Delete" onClick={() => handleDeleteNote(n.id)} />
                        </td>
                      </tr>
                    </Table>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))
          }
        </Row>
      </Container>
    </div>
  );
}

export default ContactList;
