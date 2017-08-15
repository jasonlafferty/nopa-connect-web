import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Container = styled.div`
  width: calc(100% - 20px);
  margin: auto;
  padding: 10px;
  border: 1px solid grey;
  display: flex;

  @media (max-width: 768px) {
    border: none;
  }
`;

const AccountInfo = styled.span`
  margin-left: auto;
`;

const Details = styled.h1`
  font-size: 1.2rem;
  line-height: 1.2rem;
  margin: 0.5em;
`;

const UserInfo = styled(Details)`
  text-align: left;
`;

const AccountItem = styled(Details)`
  text-align: right;
`;

const UserDetails = ({ firstName, surname, accountNumber, sortCode }) =>(
  <Container>
    <span>
      <UserInfo>{firstName}</UserInfo>
      <UserInfo>{surname}</UserInfo>
    </span>
    <AccountInfo>
      <AccountItem>Current Account</AccountItem>
      <AccountItem>{accountNumber}</AccountItem>
      <AccountItem>{sortCode}</AccountItem>
    </AccountInfo>
  </Container>
);

UserDetails.defaultProps = {
  firstName: '',
  surname: '',
  accountNumber: '',
  sortCode: ''
};

UserDetails.propTypes = {
  firstName: React.PropTypes.string,
  surname: React.PropTypes.string,
  accountNumber: React.PropTypes.string,
  sortCode: React.PropTypes.string
};

const mapStateToProps = (state) => ({
  firstName: state.user.firstName,
  surname: state.user.surname,
  accountNumber: state.user.accountNumber,
  sortCode: state.user.sortCode
});

export default connect(mapStateToProps, null)(UserDetails);
