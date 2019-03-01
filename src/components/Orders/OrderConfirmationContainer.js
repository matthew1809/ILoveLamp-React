import React, { Component } from 'react';
import OrderConfirmation from './OrderConfirmation';
import CartHeader from '../Cart/CartHeader';

class OrderConfirmationContainer extends Component {
  render() {
    return (
      <div>
        <CartHeader />
        <OrderConfirmation />
      </div>
    );
  }
}

export default OrderConfirmationContainer;
