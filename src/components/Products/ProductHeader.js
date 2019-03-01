import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../global/Header';

class ProductHeader extends Component {
  render() {
    var ID = this.props.router.location.pathname.slice(9, 100);

    var productArray = this.props.products.products.data.filter(function(
      product
    ) {
      return product.id === ID;
    });

    var product = productArray[0];

    return (
      <div>
        <Header />
        <header className="push">
          <div className="header-container hide-content">
            <div className="content">
              <h1>Product details for {product.name}</h1>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(ProductHeader);
