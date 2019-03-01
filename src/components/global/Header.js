import React from 'react';

import MobileNav from './Mobile/MobileNav';
import HeaderNav from './HeaderNav.js';

var HeaderStyle = {
  backgroundColor: 'transparent',
  padding: '0'
};

const Header = () => {
  return (
    <header style={HeaderStyle}>
      <MobileNav />
      <div className="push">
        <HeaderNav />
      </div>
    </header>
  );
};

export default Header;
