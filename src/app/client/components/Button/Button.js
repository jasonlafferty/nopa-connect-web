import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

const spacer = 1;

const applyStyle = (component) => component`
  border-radius: 2px;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: normal;
  background: #F97056;
  padding: ${spacer}rem ${spacer*1.5}rem;
  color: #FFFFFF;
  text-decoration: none;
  text-align: center;
  display: block;
  max-width: 20rem;
  width: 100%;
  border: 0;
  cursor: pointer;
`;

const StyledLink = applyStyle(styled(Link));
const StyledButton = applyStyle(styled.button);

const Button = (props) => {
  const Button = props.to ? StyledLink : StyledButton;
  return <Button {...props}>{props.children}</Button>;
};

Button.defaultProps = {
  children: null,
  title: '',
  to: null
};

Button.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node
  ]),
  title: React.PropTypes.string,
  to: React.PropTypes.string
};

export default Button;
