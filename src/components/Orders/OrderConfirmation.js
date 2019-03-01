import React from 'react';
import { ReactComponent as WeLoveYouImg } from '../../assets/img/weloveyou.svg';

const OrderConfirmation = () => (
  <main role="main" id="container" className="main-container push">
    <section className="order-confirmation">
      <div className="content">
        <div className="confirmation">
          <h2>Awesome, your order has been placed</h2>
          <p>Make sure you check your emails for confirmation.</p>
          <div style={{ margin: '1.875rem auto 4.625rem', width: '14.375rem' }}>
            <WeLoveYouImg />
          </div>
        </div>
      </div>
    </section>
  </main>
);

export default OrderConfirmation;
