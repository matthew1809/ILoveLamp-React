import React, { Component } from 'react';
import CheckoutForm from './CheckoutForm';
import CartHeader from '../Cart/CartHeader';
import Loading from '../global/Loading';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return state;
}

class CheckoutContainer extends Component {
  render() {
    if (this.props.payments.processing === false) {
      return (
        <div>
          <CartHeader />
          <CheckoutForm />
        </div>
      );
    } else {
      return (
        <div>
          <CartHeader />
          <Loading />
        </div>
      );
    }
  }
}

export default connect(mapStateToProps)(CheckoutContainer);
