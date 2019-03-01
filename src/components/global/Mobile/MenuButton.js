import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ReactComponent as HamburgerIcon } from '../../../assets/img/hamburger.svg';

function mapStateToProps(state) {
  return state;
}

class MenuButton extends Component {
  render() {
    let menu_btn_colour;

    const parsedPath = this.props.router.location.pathname.substring(1);

    if (
      ['products', 'checkout', 'cart', 'order-confirmation'].includes(
        parsedPath
      )
    ) {
      menu_btn_colour = '';
    } else if (parsedPath.includes('product')) {
      menu_btn_colour = '';
    } else {
      menu_btn_colour = 'light';
    }

    return (
      <button
        id="nav-toggle"
        className={`menu-btn nav-toggle ${menu_btn_colour}`}
        aria-controls="nav-toggle"
        aria-expanded="false"
        aria-label="Open menu">
        <HamburgerIcon />
      </button>
    );
  }
}

export default connect(mapStateToProps)(MenuButton);
