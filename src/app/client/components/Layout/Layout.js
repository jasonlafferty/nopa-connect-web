import React from 'react';
import PropTypes from 'prop-types';
import { Header, Footer, Partners } from '../';

class Layout extends React.Component {

  componentDidMount () {
    document.title =  this.props.title;
  }

  render () {
    const { showPartners, hideLogo } = this.props;
    return (
      <section>
        <Header hideLogo={hideLogo} />
        <div className="layout">
          {this.props.children}
        </div>
        {showPartners && <Partners />}
        <Footer />
      </section>
    );
  }
}

Layout.defaultProps = {
  children: null,
  title: '',
  showPartners: false,
  hideLogo: false
};

Layout.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node
  ]),
  title: React.PropTypes.string,
  showPartners: React.PropTypes.bool,
  hideLogo: React.PropTypes.bool
};

export default Layout;
