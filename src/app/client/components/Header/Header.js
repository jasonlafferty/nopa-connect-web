import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';
import * as Paths from '../../constants/paths';

const SignInButton = styled.div`
  margin-top: auto;
  margin-bottom: auto;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;

	@media (max-width: 768px) {
		background: white;
	}
`;

const HeaderLogo = styled(Logo)`
  a {
    display: ${({ hideLogo }) => hideLogo ? 'none' : 'block'};
  }

  img{
    height: 50px;
  }

  @media (max-width: 768px) {
    a {
      display: block;
    }
  }
`;

const LogInButton = styled(Button)`
  width: 50px;
`;

const Header = ({ hideLogo }) => (
  <HeaderContainer>
    <HeaderLogo hideLogo={hideLogo} />
    <SignInButton>
      <LogInButton to={Paths.LOGIN_BANK}>Log In</LogInButton>
    </SignInButton>
  </HeaderContainer>
);

Header.defaultProps = {
  hideLogo: false
};

Header.propTypes = {
  hideLogo: React.PropTypes.bool
};


export default Header;
