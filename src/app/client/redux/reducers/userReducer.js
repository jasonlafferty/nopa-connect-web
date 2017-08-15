import { UPDATE_USER } from '../actions/actionTypes';

export default function userReducer(state, action) {
  switch(action.type) {
    case UPDATE_USER: {
      const { surname, accountNumber, sortCode } = action;
      return {
        ...state,
        surname,
        accountNumber,
        sortCode
      };
    }
    default:
      return state || {
        surname: '',
        firstName: 'joe',
        accountNumber: '',
        sortCode: ''
      };
  }
}
