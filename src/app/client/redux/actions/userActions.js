import { UPDATE_USER } from './actionTypes';
import { updateTransactions } from './transactionsActions';

export const updateUser = ({ surname, accountNumber, sortCode }) => (dispatch) => {
  dispatch({ type: UPDATE_USER, surname, accountNumber, sortCode });
  updateTransactions(dispatch);
};
