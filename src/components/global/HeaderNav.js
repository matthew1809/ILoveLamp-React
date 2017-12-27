import React, { Component } from 'react';

import CartCounter from '../Cart/CartCounter';
import { push } from 'react-router-redux';

class HeaderNav extends Component {
  render() {


    var toProducts = () => {
      this.props.dispatch((dispatch) => {
        dispatch(push('/products'))
      })
    }

    var toStyles = () => {
      this.props.dispatch((dispatch) => {
        dispatch(push('/styles'))
      })
    }

    var toHome = () => {
      this.props.dispatch((dispatch) => {
        dispatch(push('/'))
      })
    }

    return (
      <header className="header">
        <div className="shell">
          <div className="header__inner">
            <a href="#" className="nav-trigger visible-xs-block visible-sm-block">
              <span></span>

              <span></span>

              <span></span>
            </a>

            <a href="#" className="logo">
              <img className="white" src="images/logo.png" alt="" />
              <img className="black" src="images/logo-black.png" alt="" />
              <img className="visible-xs-block" src="images/logo-mobile.png" alt="" />
            </a>

            <nav className="nav-secondary">
              <ul>
                <li className="featured">
                  <a href="#">Stages</a>
                </li>

                <li>
                  <a href="#">Cours Particuliers</a>
                </li>
              </ul>
            </nav>

            <nav className="nav">
              <ul>
                <li className="signup">
                  <a href="#">Devenir Enseignant</a>
                </li>

                <li>
                  <a href="#">Qui sommes nous</a>
                </li>

                <li>
                  <a href="#">Aide</a>
                </li>

                <li>
                  <a href="#">Panier</a>
                </li>

                <li>
                  <a href="#">Connexion</a>
                </li>
              </ul>
            </nav>

            <a href="#" className="nav-close visible-xs-block">Fermer Le Menu</a>
          </div>
        </div>
      </header>
    )
  }
};

export default HeaderNav;
