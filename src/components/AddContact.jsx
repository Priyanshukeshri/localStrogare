import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import formatDate from 'Utilities/formatDate';
import { useHistory } from 'react-router-dom';
import alertify from 'alertifyjs';
import { addContact } from '../store/actions/contactAction';
import FormControlItem from './Form/FormControlItem';

function AddContact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [birthday, setBirthday] = useState(formatDate(new Date()));

  const dispatch = useDispatch();
  const history = useHistory();
  const user = (
    {
      name, email, phone, address, birthday,
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addContact(user));
    alertify.success('Contact Added.');
    history.push('/');
  };

  return (
    <Form className="mx-5" onSubmit={handleSubmit}>
      <FormControlItem label="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <FormControlItem label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <FormControlItem label="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
      <FormControlItem label="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
      <FormControlItem label="Birthday" type="date" value={birthday} onChange={(e) => setBirthday(formatDate(e.target.value))} />
      <Button variant="outline-success" type="submit">Add</Button>
    </Form>
  );
}

export default AddContact;
