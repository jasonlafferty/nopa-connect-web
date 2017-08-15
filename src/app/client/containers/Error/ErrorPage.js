import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from '../../components';

const errors = {
  '500': {
    title: 'Server error!',
    desc: 'We have been notified about this error'
  },
  '404': {
    title: 'Page not found!',
    desc: 'This page is either no longer available or you have entered a wrong path.'
  }
};

const errorsDefault = errors['500'];

class ErrorPage extends React.Component {

  constructor(props) {
    super(props);
    this.printError = this.printError.bind(this);
  }

  printError (errCode) {
    const error = errors[errCode] || errorsDefault;
    return (
      <div>
        <h1>{error.title}</h1>
        <div>{error.desc}</div>
      </div>
    );
  }

  render () {
    return (
      <Layout>
        {this.printError(this.props.route.error)}
      </Layout>
    );
  }
}

ErrorPage.defaultProps = {
  route: {}
};

ErrorPage.propTypes = {
  route: React.PropTypes.object
};

export default ErrorPage;
