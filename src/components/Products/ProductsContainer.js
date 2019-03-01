import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import AllProducts from './AllProducts';
import ProductsHeader from './ProductsHeader';
import Loading from '../global/Loading';

import { GetProducts } from '../../ducks/products';

class ProductsContainer extends Component {
  componentDidMount() {
    const { fetched } = this.props;

    if (!fetched) {
      this.props.GetProducts();
    }
  }

  render() {
    const { products } = this.props;

    if (products) {
      return (
        <div>
          <ProductsHeader />
          <AllProducts />
        </div>
      );
    } else {
      return (
        <div>
          <ProductsHeader />
          <Loading />
        </div>
      );
    }
  }
}

const mapStateToProps = ({
  products: { fetching, fetched, error, products }
}) => ({
  fetching,
  fetched,
  error,
  products
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      GetProducts
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsContainer);
