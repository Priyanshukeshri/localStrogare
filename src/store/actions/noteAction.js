/* eslint-disable import/no-extraneous-dependencies */
import NoteTypes from '../actionTypes/noteTypes';
import ContactService from '../../services/ContactService';
import { v4 as uuid } from 'uuid';

const contactService = new ContactService();

export const addNote = (notes) => async (dispatch) => {
  dispatch({
    type: NoteTypes.ADD_NOTE,
    payload: {
      id: uuid(),
      ...notes,
    },
  });
};
export const deleteNote = (id) => ({
  type: NoteTypes.DELETE_NOTES,
  payload: id,
});

export const getNotesStorage = () => async (dispatch) => {
  dispatch({
    type: NoteTypes.GET_NOTES,
    payload: JSON.parse(localStorage.getItem('note')),
  });
};

export const setUser = (id) => async (dispatch) => {
  contactService.getContact(id)
    .then((response) => {
      dispatch({
        type: NoteTypes.SET_USER,
        payload: response.data.name,
      });
    });
};
