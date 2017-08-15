import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Header = styled.span`
  width: calc(100% - 20px);
  display: block;
  color: dimgray;
  background-color: #ededed;
  padding: 10px;
  text-align: left;
`;

const TransactionHeader = ({ dateStr }) =>(
  <Header>{dateStr === 'Now' ? 'Today' : dateStr}</Header>
);

TransactionHeader.defaultProps = {
  dateStr: ''
};

TransactionHeader.propTypes = {
  dateStr: React.PropTypes.string
};

export default TransactionHeader;
