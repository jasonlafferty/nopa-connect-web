import React from 'react'
import { Header, Footer, Partners } from '../'

class Layout extends React.Component {

  componentDidMount () {
    document.title = this.props.title;
  }

  render () {
    return (
      <section>
        <Header />
        <div className="layout">
          { this.props.children }
        </div>
        <Partners />
        <Footer />
      </section>
    );
  }
}

Layout.propTypes = {
  title: React.PropTypes.string.isRequired
};

export default Layout
