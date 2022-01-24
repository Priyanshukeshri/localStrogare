import ContactTypes from '../actionTypes/contactTypes';
import ContactService from '../../services/ContactService';

const contactService = new ContactService();

const fetchContactsPending = () => ({
  type: ContactTypes.FETCH_CONTACTS_PENDING,
});
const fetchContactsSuccess = (data) => ({
  type: ContactTypes.FETCH_CONTACTS_SUCCESS,
  payload: data,
});
const fetchContactsError = (message) => ({
  type: ContactTypes.FETCH_CONTACTS_FAIL,
  payload: message,
});
const contactDeleted = () => ({
  type: ContactTypes.DELETE_CONTACT,
});
const contactAdded = () => ({
  type: ContactTypes.ADD_CONTACT,
});
const getContact = (user) => ({
  type: ContactTypes.GET_CONTACT,
  payload: user,
});
const contactUpdated = () => ({
  type: ContactTypes.UPDATE_CONTACT,
});

export const fetchContacts = () => async (dispatch) => {
  dispatch(fetchContactsPending());
  return (
    contactService.getAll()
      .then((response) => dispatch(fetchContactsSuccess(response.data)))
      .catch((error) => dispatch(fetchContactsError((error.message))))
  );
};
export const getContactSingle = (id) => async (dispatch) => {
  contactService.getContact(id)
    .then((response) => {
      dispatch(getContact(response.data));
    });
};
export const deleteContact = (id) => async (dispatch) => {
  contactService.deleteContact(id)
    .then(() => {
      dispatch(contactDeleted());
      dispatch(fetchContacts());
    });
};

export const addContact = (user) => async (dispatch) => {
  contactService.addContact(user)
    .then(() => {
      dispatch(contactAdded());
      dispatch(fetchContacts());
    });
};

export const updateContact = (user, id) => async (dispatch) => {
  contactService.updateContact(user, id)
    .then(() => {
      dispatch(contactUpdated());
      dispatch(fetchContacts());
    });
};
