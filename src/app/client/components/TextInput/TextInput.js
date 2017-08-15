import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Formsy, { HOC as FormsyWrapper } from 'formsy-react';

const Container = styled.div`
  margin: 40px 0 40px auto;
`;

const Label = styled.label`
  display: none;
`;

const Input = styled.input`
  width: calc(100% - 20px);
  max-width: 300px;
  padding: 10px;
  border: 0;
  border-radius:1px;
  border-bottom: 3px solid lightgray;
`;

const Error = styled.p`
  color: white;
  margin: 10px;
`;

class TextInput extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.setValue(event.currentTarget.value);
  }

  render() {
    const { props } = this;

    const className = props.showRequired() ? 'required' : props.showError() ? 'error' : null;
    const errorMessage = props.getErrorMessage();

    return (
      <Container>
        <Label
          htmlFor={props.name}>
          {props.label}
        </Label>
        <Input
          id={props.name}
          name={props.name}
          type={props.type}
          value={props.getValue()}
          placeholder={props.label}
          onChange={this.handleChange}
          data-error={props.errors} />
        <Error>{errorMessage}</Error>
      </Container>
    );
  }
}

TextInput.defaultProps = {
  setValue: () => {},
  showError: () => {},
  showRequired: () => {},
  getErrorMessage: () => {},
  name: '',
  label: '',
  password: false,
  errors: '',
  type: 'text'
};

TextInput.propTypes = {
  setValue: PropTypes.func,
  showError: PropTypes.func,
  showRequired: PropTypes.func,
  getErrorMessage: PropTypes.func,
  name: PropTypes.string,
  label: PropTypes.string,
  password: PropTypes.bool,
  errors: PropTypes.string,
  type: PropTypes.string
};

export default FormsyWrapper(TextInput);
