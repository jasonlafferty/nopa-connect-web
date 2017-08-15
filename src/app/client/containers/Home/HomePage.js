import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Layout, Button, Logo } from '../../components';
import { Link } from 'react-router';
import * as Paths from '../../constants/paths';

const SecondaryContent = styled.div`
  padding: 40px;
  background-color: white;
`;

const Container = styled.div`
  display: flex;
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  margin: auto;
  max-width: 300px;
`;

const HomePageLogo = styled(Logo)`
  display: block;

  @media (max-width: 768px) {
    display: none;
  }
`;

const HomePage = () => (
  <Layout title="Welcome to Nopa!" showPartners hideLogo >
    <div className="main-content">
      <HomePageLogo />
      <h1>Your finances, in one place</h1>
      <p>Track all of your payments by connecting as many bank accounts as<br />
         you'd like to your Nopa account and get updates on your balance instantly.</p>

      <Button to={Paths.CHOOSE_BANK} className="button">Get started</Button>
    </div>

    <SecondaryContent className="secondary-content">
      <Container>
        <div>
          <h1>There's no such things as "one size fits all" finance.</h1>
          <p>We were founded to make money simple and fair for everyone: whether you're looking for a loan, or to get better rewards for your investments.</p>
        </div>
        <Image className="shapes" alt="Shapes" src={require('../../../static/images/Shapes.png')} />
      </Container>
    </SecondaryContent>

  </Layout>
);

export default HomePage;
