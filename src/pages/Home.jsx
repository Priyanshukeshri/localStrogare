import React, { useEffect } from 'react';
import { UserList } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../store/actions/contactAction';

function Home() {
  const contactState = useSelector((state) => state.contacts);
  const {
    contacts,
  } = contactState;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, []);

  return (
    <UserList data={contacts} />
  );
}

export default Home;
