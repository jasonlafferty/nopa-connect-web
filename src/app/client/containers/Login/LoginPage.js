import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Layout, LoginForm } from '../../components';

const Container = styled.div`
  padding: 20px;
  text-align: center;
  width: calc(100% - 40px);
  display: flex;
  margin: 0 auto;
  margin-bottom: 5px;
  flex-wrap: wrap;
  max-width: 400px;
  justify-content: center;
`;

const H1 = styled.h1`
  color: white;
`;

const Paragraph = styled.p`
  color: #D9D9D9;
  font-size: 14px;
`;

const LoginPage = ({ handleChange, handleSubmit, errors }) => {
  return (
    <Layout>
      <Container>
        <H1>Log in to your online banking</H1>
        <Paragraph>Enter the same details you use to login to your online banking</Paragraph>
        <LoginForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          errors={errors}
        />
      </Container>
    </Layout>
  );
};

LoginPage.defaultProps = {
  handleChange: () => {},
  handleSubmit: () => {},
  errors: {}
};

LoginPage.propTypes = {
  handleChange: React.PropTypes.func,
  handleSubmit: React.PropTypes.func,
  errors: React.PropTypes.object
};

export default LoginPage;
