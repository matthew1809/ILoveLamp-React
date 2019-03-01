import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import HomeHeader from './HomeHeader';
import HomeMainSection from './HomeMainSection';
import Loading from '../global/Loading';

import { GetProducts } from '../../ducks/products';
import { GetCategories } from '../../ducks/categories';
import { GetCollections } from '../../ducks/collections';

class Home extends Component {
  componentDidMount() {
    const { products, categories, collections } = this.props;

    if (!products.fetched) {
      this.props.GetProducts();
    }

    if (!categories.fetched) {
      this.props.GetCategories();
    }

    if (!collections.fetched) {
      this.props.GetCollections();
    }
  }

  render() {
    const { products, collections, categories } = this.props;

    if (
      collections.collections !== null &&
      products.products !== null &&
      categories.categories !== null
    ) {
      return (
        <div>
          <HomeHeader />
          <HomeMainSection />
        </div>
      );
    } else {
      return (
        <div>
          <HomeHeader />
          <Loading />
        </div>
      );
    }
  }
}

const mapStateToProps = ({ products, categories, collections }) => ({
  products,
  categories,
  collections
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      GetProducts,
      GetCategories,
      GetCollections
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
