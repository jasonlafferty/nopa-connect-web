import es6Promise from 'es6-promise';
import fetch from 'isomorphic-fetch';
import { browserHistory } from 'react-router';
import { UPDATE_TRANSACTIONS } from './actionTypes';

es6Promise.polyfill();

export const updateTransactions = (dispatch) => {
  fetch('/api/transactions')
  .then(function(response) {
    if (response.status >= 400) {
      throw new Error("Bad response from server");
    }
    return response.json();
  })
  .then(function({ transactions }) {
    dispatch({
      type: UPDATE_TRANSACTIONS,
      transactions: transactions
    });
    browserHistory.push('/statement');
  });
};
