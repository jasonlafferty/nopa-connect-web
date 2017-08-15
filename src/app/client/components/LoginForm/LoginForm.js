import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Formsy from 'formsy-react';
import { connect } from 'react-redux';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { updateUser } from '../../redux/actions/userActions';

const Form = styled(Formsy.Form)`
  width: 100%;
  max-width: 500px;
  margin: auto;
`;

const SubmitButton = styled(Button)`
  margin: auto;
`;

class updateUserForm extends React.Component {
  constructor(props) {
    super(props);
    this.onValidSubmit = this.makeOnValidSubmit();
  }

  makeOnValidSubmit() {
    const { updateUser } = this.props;
    return (model, reset, invalidate) => {
      updateUser(model);
    };
  }

  render() {
    const { props, handleChange } = this;
    return (
      <Form onValidSubmit={this.onValidSubmit}>
        <TextInput
          name="surname"
          label="Surname"
          validations="isAlpha"
          validationError="This enter a valid surname"
          required
        />
        <TextInput
          name="sortCode"
          label="Sort code"
          validations={{
            isInt: true,
            minLength: 6,
            maxLength: 6
          }}
          validationErrors={{
            isInt: 'sort code should only be numbers',
            minLength: 'sort code should be 6 numbers',
            maxLength: 'sort code should be 6 numbers'
          }}
          required
        />
        <TextInput
          name="accountNumber"
          label="Account number"
          validations={{
            isInt: true,
            minLength: 7,
            maxLength: 9
          }}
          validationErrors={{
            isInt: 'account number should only be numbers',
            minLength: 'account number is the wrong length',
            maxLength: 'account number is the wrong length'
          }}
          required
        />
        <TextInput
          name="passCode"
          label="Passode"
          type="password"
          required
          password
        />
        <TextInput
          name="memorableWord"
          label="Memorable word"
          validations="isAlpha"
          validationError="This is not a valid word"
          required
        />
        <SubmitButton type="submit">
          {"Log in & connect"}
        </SubmitButton>
      </Form>
    );
  }
}

updateUserForm.defaultProps = {
  updateUser: () => {}
};

updateUserForm.propTypes = {
  updateUser: React.PropTypes.func
};

const mapDispatchToProps = dispatch => ({
  updateUser: form => dispatch(updateUser(form))
});

export default connect(null, mapDispatchToProps)(updateUserForm);
