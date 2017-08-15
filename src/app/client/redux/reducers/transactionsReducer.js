import { UPDATE_TRANSACTIONS } from '../actions/actionTypes';

export default function transactionsReducer(state, action) {
  switch(action.type) {
    case UPDATE_TRANSACTIONS: {
      const { transactions } = action;
      return transactions;
    }
    default:
      return state || [];
  }
}
