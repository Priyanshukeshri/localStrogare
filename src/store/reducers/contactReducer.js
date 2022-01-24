import ContactTypes from '../actionTypes/contactTypes';

const initialState = {
  contacts: [],
  user: {},
  error: false,
  errorMessage: null,
  loading: false,
};

export default function contactReducer(state = initialState, { payload, type }) {
  switch (type) {
    case ContactTypes.FETCH_CONTACTS_PENDING:
      return {
        ...state, loading: true,
      };
    case ContactTypes.FETCH_CONTACTS_SUCCESS:
      return {
        ...state,
        contacts: payload,
        loading: false,
      };
    case ContactTypes.FETCH_CONTACTS_FAIL:
      return {
        ...state,
        error: true,
        errorMessage: payload,
        loading: false,
      };
    case ContactTypes.GET_CONTACT:
      return {
        ...state,
        user: payload,
        loading: false,
      };
    case ContactTypes.ADD_CONTACT:
      return {
        ...state,
        error: false,
      };
    case ContactTypes.DELETE_CONTACT:
      return {
        ...state,
        error: false,
      };
    case ContactTypes.UPDATE_CONTACT:
    default:
      return state;
  }
}
