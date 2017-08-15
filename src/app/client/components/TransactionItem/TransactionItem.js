import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Layout } from '../../components';

const ItemContainer = styled.span`
  width: calc(100% - 20px);
  display: flex;
  text-align: left;
  background-color: white;
  padding: 10px;
`;

const Item = styled.p`
  color: black !important;
`;

const AmountItem = styled(Item)`
  margin-left: auto;
`;

const TransactionItem = ({ beneficary, value }) =>(
  <ItemContainer>
    <Item>{beneficary}</Item>
    <AmountItem>{value}</AmountItem>
  </ItemContainer>
);

TransactionItem.defaultProps = {
  beneficary: '',
  value: ''
};

TransactionItem.propTypes = {
  beneficary: React.PropTypes.string,
  value: React.PropTypes.string
};

export default TransactionItem;
