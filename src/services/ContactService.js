import axios from 'axios';

export default class ContactService {
  getAll() {
    return axios.get(`${process.env.REACT_APP_API_BASE_ENDPOINT}/contacts`);
  }

  getContact(id) {
    return axios.get(`${process.env.REACT_APP_API_BASE_ENDPOINT}/contacts/${id}`);
  }

  deleteContact(id) {
    return axios.delete(`${process.env.REACT_APP_API_BASE_ENDPOINT}/contacts/${id}`);
  }

  addContact(user) {
    return axios.post(`${process.env.REACT_APP_API_BASE_ENDPOINT}/contacts`, user);
  }

  updateContact(id, user) {
    return axios.put(`${process.env.REACT_APP_API_BASE_ENDPOINT}/contacts/${id}`, user);
  }
}
