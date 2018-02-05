import React, { Component } from 'react';
import { connect } from 'react-redux';

import StylesHeader from './StylesHeader';
import StylesMenu from './StylesMenu';
import StylesHeading from './StylesHeading';
import StyleProducts from './StyleProducts';
import Loading from '../global/Loading';
import MobileNav from '../global/Mobile/MobileNav';

import { FETCH_PRODUCTS_START, FETCH_PRODUCTS_END } from '../../ducks/products';
import {
  FETCH_CATEGORIES_START,
  FETCH_CATEGORIES_END
} from '../../ducks/categories';
import { SET_STYLE } from '../../ducks/styles';

import * as api from '../../moltin';

class StylesContainer extends Component {
  componentWillMount() {
    const script = document.createElement('script');

    script.src = '../../js/production.min.js';
    script.async = false;

    document.body.appendChild(script);
  }

  componentDidMount() {
    if (this.props.products.fetched === false) {
      this.props.dispatch(dispatch => {
        dispatch({ type: FETCH_PRODUCTS_START });

        api
          .GetProducts()

          .then(products => {
            dispatch({ type: FETCH_PRODUCTS_END, payload: products });
          });
      });
    }

    // now we do the same thing for categories
    if (this.props.categories.fetched === false) {
      this.props.dispatch(dispatch => {
        dispatch({ type: FETCH_CATEGORIES_START });

        api
          .GetCategories()

          .then(categories => {
            dispatch({ type: FETCH_CATEGORIES_END, payload: categories });
            if (categories.data.length > 0) {
              dispatch({
                type: SET_STYLE,
                style: categories.data[0].name,
                header: categories.data[0].name
              });
            }
          });
      });
    }
  }

  render() {
    if (this.props.categories.categories && this.props.products.products) {
      if (this.props.categories.categories.data.length > 0) {
        return (
          <div>
            <MobileNav />
            <StylesHeader />
            <main role="main" id="container" className="main-container push">
              <section className="style-links">
                <div className="content">
                  <StylesMenu />
                </div>
              </section>
              <section className="products">
                <div className="content">
                  <StyleProducts />
                </div>
              </section>
            </main>
          </div>
        );
      } else {
        return (
          <div>
            <MobileNav />
            <StylesHeader />
            <StylesHeading />
            <main role="main" id="container" className="main-container push">
              <section className="style-links">
                <div className="content">
                  <StylesMenu />
                </div>
              </section>
              <section className="products">
                <div className="content">
                  <p>You do not have any categories set up with products</p>
                </div>
              </section>
            </main>
          </div>
        );
      }
    } else {
      return (
        <div>
          <MobileNav />
          <StylesHeader />
          <Loading />
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  ...state
});

export default connect(mapStateToProps)(StylesContainer);
