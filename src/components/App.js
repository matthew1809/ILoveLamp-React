import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home/Home';
import Cart from './Cart/Cart';
import CheckoutContainer from './Checkout/CheckoutContainer';
import StylesContainer from './Styles/StylesContainer';
import ProductsContainer from './Products/ProductsContainer';
import SingleProductContainer from './Products/SingleProductContainer';
import OneClickCheckout from './Checkout/OneClickCheckout';
import OrderConfirmationContainer from './Orders/OrderConfirmationContainer';
import NotFound from './global/NotFound';
import Footer from './global/Footer';

const App = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '../../public/js/production.min.js';
    script.async = false;
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cart" component={Cart} />
        <Route path="/styles" component={StylesContainer} />
        <Route path="/products" component={ProductsContainer} />
        <Route path="/checkout" component={CheckoutContainer} />
        <Route
          path="/order-confirmation"
          component={OrderConfirmationContainer}
        />
        <Route path="/product/:id" component={SingleProductContainer} />
        <Route
          path="/one-click-checkout/:productId"
          component={OneClickCheckout}
        />
        <Route path="*" component={NotFound} />
      </Switch>

      <Footer />
    </div>
  );
};

export default App;
