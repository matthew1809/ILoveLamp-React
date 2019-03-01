import React from 'react';
import { withRouter } from 'react-router-dom';

import Header from '../global/Header';

const CartHeader = props => {
  let headerText;

  if (props.location.pathname.includes('cart')) {
    headerText = 'Shopping Cart';
  } else if (props.location.pathname.includes('checkout')) {
    headerText = 'Checkout';
  } else if (props.location.pathname.includes('order-confirmation')) {
    headerText = 'Order Confirmation';
  }

  return (
    <div>
      <Header />
      <header className="push">
        <div className="header-container smaller">
          <div className="content">
            <h1>{headerText}</h1>
          </div>
        </div>
      </header>
    </div>
  );
};

export default withRouter(CartHeader);
