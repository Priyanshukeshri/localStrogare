import NoteTypes from '../actionTypes/noteTypes';

const initialState = {
  notes: [],
  user: {},
};
export default function noteReducer(state = initialState, { payload, type }) {
  switch (type) {
    case NoteTypes.ADD_NOTE:
      if (JSON.parse(localStorage.getItem('note') == null)) {
        return {
          ...state,
          notes: [...state.notes, payload],
        };
      }
      return {
        ...state,
        notes: [...JSON.parse(localStorage.getItem('note')), payload],
      };
    case NoteTypes.GET_NOTES:
      return {
        ...state,
        notes: payload,
      };
    case NoteTypes.DELETE_NOTES:
      return {
        ...state,
        notes: state.notes.filter((n) => n.id !== payload),
      };
    case NoteTypes.SET_USER:
      return {
        ...state,
        user: payload,
      };
    default:
      return state;
  }
}
