import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import formatDate from 'Utilities/formatDate';
import { useHistory } from 'react-router-dom';
import { updateContact } from '../store/actions/contactAction';
import FormControlItem from './Form/FormControlItem';

function EditContact() {
  const user = useSelector((state) => state.contacts.user);
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [birthday, setBirthday] = useState(formatDate(new Date()));

  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    setId(user.id);
    setName(user.name);
    setEmail(user.email);
    setPhone(user.phone);
    setAddress(user.address);
    setBirthday(formatDate(user.birthday));
  }, [user]);
  const userEdited = ({
    name, email, phone, address, birthday,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateContact(id, userEdited));
    history.push('/');
  };

  return (
    <Form className="mx-5 text-dark" onSubmit={handleSubmit}>
      <FormControlItem label="Name" value={name || ''} onChange={(e) => setName(e.target.value)} />
      <FormControlItem label="Email" type="email" value={email || ''} onChange={(e) => setEmail(e.target.value)} />
      <FormControlItem label="Phone" value={phone || ''} onChange={(e) => setPhone(e.target.value)} />
      <FormControlItem label="Address" value={address || ''} onChange={(e) => setAddress(e.target.value)} />
      <FormControlItem label="Birthday" type="date" value={birthday || ''} onChange={(e) => setBirthday(formatDate(e.target.value))} />
      <Button variant="outline-success" type="submit">Edit</Button>
    </Form>
  );
}
export default EditContact;
