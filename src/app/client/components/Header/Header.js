import React from 'react';
import Button from '../Button/Button';
import * as Paths from '../../constants/paths';

const Header = (props) => {
  return (
    <div className="header">
      <div className="logo">

      </div>
      <div className="signin">
        <Button to={Paths.LOGIN_BANK}>Log In</Button>
      </div>
    </div>
  )
};

export default Header;
