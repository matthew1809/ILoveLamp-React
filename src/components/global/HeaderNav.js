import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as BigLogo } from '../../assets/img/logo/ill.svg';
import { ReactComponent as SmallLogo } from '../../assets/img/logo/ill-short.svg';

import CartCounter from '../Cart/CartCounter';

const HeaderNav = () => (
  <div className="nav-container">
    <nav className="primary-nav">
      <Link to="/products">Products</Link>
      <Link to="/styles">Styles</Link>
    </nav>
    <div className="logo">
      <Link to="/" className="logo-link">
        <span className="hide-content">I love lamp</span>
        <div className="big-logo" aria-hidden="true">
          <BigLogo />
        </div>
        <div className="small-logo" aria-hidden="true">
          <SmallLogo />
        </div>
      </Link>
    </div>
    <nav className="secondary-nav light">
      <CartCounter />
    </nav>
  </div>
);

export default HeaderNav;
