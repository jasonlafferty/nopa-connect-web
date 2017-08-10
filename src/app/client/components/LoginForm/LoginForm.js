import React from 'react';
import { TextInput } from '../';

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <TextInput
        name="surname"
        label="Surname"
        handleChange={props.handleChange}
        errors={props.errors.surname} />
      <TextInput
        name="sortCode"
        label="Sort code"
        handleChange={props.handleChange}
        errors={props.errors.sortCode} />
      <TextInput
        name="accountNumber"
        label="Account number"
        handleChange={props.handleChange}
        errors={props.errors.accountNumber} />
      <TextInput
        name="passCode"
        label="Passode"
        handleChange={props.handleChange}
        errors={props.errors.passCode}
        password />
      <TextInput
        name="memorableWord"
        label="Memorable word"
        handleChange={props.handleChange}
        errors={props.errors.memorableWord} />
      <input className="button" type="submit" value="Login &amp; connect" />
    </form>
  );
};

LoginForm.propTypes = {
  handleSubmit: React.PropTypes.func.isRequired,
  handleChange: React.PropTypes.func.isRequired,
  errors: React.PropTypes.object

};

export default LoginForm;
