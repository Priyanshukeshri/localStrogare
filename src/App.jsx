import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {
  Route,
  Switch,
} from 'react-router-dom';
import Header from './components/Header';
import {
  AddUser, ContactList, EditUser, Home,
} from './pages';

function App() {
  return (
    <>
      <Header />
      <Container fluid="md" className="bg-light p-3 rounded-1 shadow overflow-auto bg-info" style={{ height: '70vh' }}>
        <Row className="mt-3">
          <Col>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/AddUser" component={AddUser} />
              <Route path="/EditUser/:id" component={EditUser} />
              <Route path="/ContactList" component={ContactList} />
            </Switch>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
