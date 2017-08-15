import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Layout, TransactionList, UserDetails } from '../../components';

const Statement = styled.div`
  max-width: 400px;
  margin: auto;
`;

const Information = styled.p`
  margin: 1em auto 1em auto;
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const StatementPage = ({ transactions }) => {
  let lastDateStr = null;
  return (
    <Layout>
      <Statement className="main-content">
        <UserDetails />
        <Information>Yout transactions for the last 30 days</Information>
        {<TransactionList transactions={transactions}/>}
      </Statement>
    </Layout>
  );
};

StatementPage.defaultProps = {
  transactions: []
};

StatementPage.propTypes = {
  transactions: React.PropTypes.array
};

const mapStateToProps = (state) => ({
  transactions: state.transactions
});

export default connect(mapStateToProps, null)(StatementPage);
