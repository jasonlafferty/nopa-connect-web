import {combineReducers} from 'redux';
import bank from './bankReducer';
import user from './userReducer';
import transactions from './transactionsReducer';

const rootReducer = combineReducers({
  bank,
  user,
  transactions
});

export default rootReducer;
