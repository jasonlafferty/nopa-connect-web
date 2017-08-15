import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { Layout, Button } from '../../components';
import * as Paths from '../../constants/paths';
import banks from '../../constants/banks';
import { selectBank } from '../../redux/actions/bankActions';

const BankList = styled.div`
  display: flex;
  margin: 0 auto;
  margin-bottom: 5px;
  flex-wrap: wrap;
  width: 100%;
  max-width: 400px;
  justify-content: center;
`;

const ImageContainer = styled(Link)`
  width: 100%;
  min-height: 90px;
  max-width: 160px;
  max-height: 90px;
  background-color: white;
  padding: 10px;
  justify-content: center;
  align-items: center;
  margin: 5px;
  display: flex;
`;

const Image = styled.img`
  width: 100%;
  justify-content: center;
`;

class ChooseBankPage extends React.Component {
  constructor(props) {
    super(props);
  }

  makeHandleClick(bank) {
    const { selectBank } = this.props;
    return () => selectBank(bank);
  }

  render() {
    return (
      <Layout showLogo >
        <div className="main-content">
          <h1>Which bank does this account belong to?</h1>
          <p>Track all of your payments by connecting as many bank accounts as you'd like to your Nopa<br />
            account and get updates on your balance instantly.</p>

          <BankList>
            {
              banks.map(bank =>
                <ImageContainer
                  onClick={this.makeHandleClick(bank.name)}
                  to={Paths.LOGIN_BANK}
                  key={bank.name}
                >
                  <Image  alt={bank.name} src={bank.logo} />
                </ImageContainer>)
            }
          </BankList>

          <Button to={Paths.LOGIN_BANK} className="button">Get started</Button>

        </div>
      </Layout>
    );
  }
}

ChooseBankPage.defaultProps = {
  selectBank: () => {}
};

ChooseBankPage.propTypes = {
  selectBank: React.PropTypes.func
};

const mapDispatchToProps = dispatch => ({
  selectBank: bank => dispatch(selectBank(bank))
});

export default connect(null, mapDispatchToProps)(ChooseBankPage);
