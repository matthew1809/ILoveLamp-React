import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../global/Header';
import HeaderImg from '../../assets/img/headers/header.png';

var HeaderStyle = {
  backgroundImage: `url(${HeaderImg})`,
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'scroll',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundOrigin: 'border-box'
};

const HomeHeader = props => (
  <div className="light">
    <Header />
    <header className="large-header light push" style={HeaderStyle}>
      <div className="header-container">
        <div className="content">
          <h1>I love carpet. I love desk.</h1>
          <Link to="/products" className="btn">
            I love lamp
          </Link>
        </div>
      </div>

      <div className="down-arrow" aria-hidden="true">
        <span className="arrow"> &#10095; </span>
      </div>
    </header>
  </div>
);

export default HomeHeader;
