import { SELECT_BANK } from './actionTypes';

export const selectBank = (bank) => ({
  type: SELECT_BANK,
  bank
});
