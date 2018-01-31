import React, { Component } from 'react';
import AllProducts from './AllProducts';
import Footer from '../global/Footer';
import ProductsHeader from './ProductsHeader';
import MobileNav from '../global/Mobile/MobileNav';
import { connect } from 'react-redux';
import Loading from '../global/Loading';

import {
  FETCH_PRODUCTS_START,
  FETCH_PRODUCTS_END
} from '../../reducers/products';

var api = require('../../moltin.js');

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

class ProductsContainer extends Component {
  componentWillMount() {
    const script = document.createElement('script');

    script.src = '../../js/production.min.js';
    script.async = false;

    document.body.appendChild(script);
  }

  // a react lifecycle event, read more at http://busypeoples.github.io/post/react-component-lifecycle/
  componentDidMount() {
    // check if we already have a moltin products in the store
    if (this.props.products.fetched === false) {
      // dispatch an action to our redux reducers
      this.props.dispatch(dispatch => {
        // this action will set a fetching field to true
        dispatch({ type: FETCH_PRODUCTS_START });

        // get the moltin products from the API
        api
          .GetProducts()

          .then(products => {
            /* now that we have the products, this action will set fetching to false and fetched to true,
            as well as add the moltin products to the store */
            dispatch({ type: FETCH_PRODUCTS_END, payload: products });
          });
      });
    }
  }

  render() {
    if (this.props.products.products) {
      return (
        <div>
          <MobileNav />
          <ProductsHeader />
          <AllProducts />
          <Footer />
        </div>
      );
    } else {
      return (
        <div>
          <MobileNav />
          <ProductsHeader />
          <Loading />
          <Footer />
        </div>
      );
    }
  }
}

export default connect(mapStateToProps)(ProductsContainer);
