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
    let quantity = 0;

    if (this.props.cart.fetched === true) {
      var items = this.props.cart.cart.data;

      quantity = items.reduce((sum, item) => sum + item.quantity, 0);
    }

    return (
      <Link to="/cart" className="cart" aria-live="polite">
        <span className="cart-name" aria-hidden="true">
          Cart (
        </span>
        <span className="hide-content">The cart contains </span>
        <span className="cart-count">{quantity}</span>
        <span className="hide-content">items.</span>
        <span className="cart-name" aria-hidden="true">
          )
        </span>
      </Link>
    );
  }
}

export default connect(mapStateToProps)(CartCounter);
