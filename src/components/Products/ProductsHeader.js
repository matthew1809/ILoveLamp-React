import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../global/Header';

class ProductsHeader extends Component {
  render() {
    return (
      <div>
        <Header />
        <header className="push">
          <div className="header-container hide-content">
            <div className="content">
              <h1>Products listing</h1>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(ProductsHeader);
