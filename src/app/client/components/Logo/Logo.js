import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Button } from '../../components';
import { Link } from 'react-router';
import * as Paths from '../../constants/paths';

const Logo = ({ className }) => (
  <div className={className}>
    <Link to={Paths.HOME} title="Home">
      <img alt="Logo" src={require('../../../static/images/Logo_Nopa.svg')} />
    </Link>
  </div>
);

Logo.defaultProps = {
  className: ''
};

Logo.propTypes = {
  className: React.PropTypes.string
};

export default Logo;
