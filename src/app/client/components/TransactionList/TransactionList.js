import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import TransactionItem from '../TransactionItem/TransactionItem';
import TransactionHeader from '../TransactionHeader/TransactionHeader';

const List = styled.div`
  width: 100%;
  max-width: 400px;
  margin: auto;
`;

const TransactionsList = ({ transactions }) => {
  let lastDateStr = null;
  return (
    <List>
      {
        transactions.reduce((memo, transaction, index, array) => {
          const { id, dateStr } = transaction;
          const newDate = dateStr !== lastDateStr;
          const transactionHeader = newDate ? <TransactionHeader key={`TransactionHeader-${id}`} {...transaction} /> : null;
          const transactionItem = <TransactionItem key={`TransactionItem-${id}`} {...transaction} />;
          lastDateStr = dateStr;

          return [
            ...memo,
            transactionHeader,
            transactionItem
          ];
        }, [])
      }
    </List>
  );
};


TransactionsList.defaultProps = {
  transactions: []
};

TransactionsList.propTypes = {
  transactions: React.PropTypes.arrayOf(
    React.PropTypes.object
  )
};

export default TransactionsList;
