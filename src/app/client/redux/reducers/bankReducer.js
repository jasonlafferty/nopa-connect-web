import { SELECT_BANK } from '../actions/actionTypes';

export default function bankReducer(state, action) {
  switch(action.type) {
    case SELECT_BANK: {
      const { bank } = action;
      return {
        ...state,
        name: bank
      };
    }
    default:
      return state || {
        name: ''
      };
  }
}
