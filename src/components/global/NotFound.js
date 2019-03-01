import React from 'react';

import CartHeader from '../Cart/CartHeader';
import Footer from './Footer';

const NotFound = () => (
  <div className="broken-body">
    <div className="light">
      <CartHeader />
    </div>
    <main role="main" id="container" className="main-container push">
      <section className="broken-container">
        <div className="content">
          <h2>404</h2>
          <p>Uh oh, the bulb went out!</p>
          <a href="/" className="btn">
            See the light
          </a>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default NotFound;
