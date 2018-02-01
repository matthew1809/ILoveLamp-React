import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { FETCH_CART_START, FETCH_CART_END } from '../../ducks/cart';

var api = require('../../moltin.js');

function mapStateToProps(state) {
  return state;
}

class CartCounter extends Component {
  componentDidMount() {
    this.props.dispatch(dispatch => {
      dispatch({ type: FETCH_CART_START });

      api
        .GetCartItems()

        .then(cart => {
          dispatch({ type: FETCH_CART_END, payload: cart, gotNew: true });
        });
    });
  }

  render() {
    if (this.props.cart.fetched === true) {
      var quant = 0;
      var items = this.props.cart.cart.data;

      items.forEach(function(item) {
        quant = quant + item.quantity;
      });
    } else {
      quant = 0;
    }

    return (
      <Link to="/cart" className="cart" aria-live="polite">
        <span className="cart-name" aria-hidden="true">
          Cart (
        </span>
        <span className="hide-content">The cart contains </span>
        <span className="cart-count">{quant}</span>
        <span className="hide-content">items.</span>
        <span className="cart-name" aria-hidden="true">
          )
        </span>
      </Link>
    );
  }
}

export default connect(mapStateToProps)(CartCounter);
