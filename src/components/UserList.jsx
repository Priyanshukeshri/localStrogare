import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../store/actions/contactAction';
import alertify from 'alertifyjs';
import { Link } from 'react-router-dom';
import ModalNote from './ModalNote';
import getDiffBetweenDays from 'Utilities/getDateDiff';
import { getNotesStorage } from '../store/actions/noteAction';

function UserList({ data }) {
  const dispatch = useDispatch();

  const birthDayIcon = (date) => {
    const day = getDiffBetweenDays(date);
    if (day === 999) {
      return (
        <i disabled type="button" className="fa fa-birthday-cake mx-2 text-secondary btn fs-4" data-toggle="tooltip" title="Send Birthday Mail !" />
      );
    } if (day) {
      return (
        <i disabled type="button " className="fa fa-hourglass-end mx-2 text-warning btn fs-4" data-toggle="tooltip" title={`Last ${day} days !`} />
      );
    }
  };
  const handleUserDelete = (id) => {
    alertify.confirm('Warning!', 'Are you sure you want to delete the contact information?', () => {
      dispatch(deleteContact(id)); alertify.error('Contact information deleted.');
    },
    () => { alertify.success('Contact information was not deleted.'); });
  };

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('note')) != null) { dispatch(getNotesStorage()); }
  }, []);

  return (
    <Table responsive striped hover className="text-center lh-lg bg-light">
      <thead className="text-white bg-opacity-75 bg-success bg-gradient ">
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Birthday</th>
        <th>Address</th>
        <th> </th>
      </thead>
      <tbody>
        {
          data.map((user) => (
            <tr key={user.id} className="my-auto">
              <td className="text-dark">{user.name}</td>
              <td className="text-dark">{user.email}</td>
              <td className="text-dark">{user.phone}</td>
              <td className="text-dark">
                {birthDayIcon(user.birthday)}
                {user.birthday}
              </td >
              <td className="text-dark">{user.address}</td>
              <td>
                <Link to={`/EditUser/${user.id}`}>
                  <i className="fa fa-pencil text-primary mx-2 fs-4 btn" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit" />
                </Link>
                <i className="fa fa-trash text-danger mx-2 fs-4 btn " data-bs-toggle="tooltip" data-bs-placement="top" title="Delete" onClick={() => handleUserDelete(user.id)} />
                <ModalNote id={user.id} />
              </td>
            </tr>
          ))
        }
      </tbody>
    </Table>
  );
}

export default UserList;
