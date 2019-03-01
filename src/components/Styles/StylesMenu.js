import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setStyle } from '../../ducks/styles';

const StylesMenu = ({ categories, setStyle }) => (
  <div className="style-links-container">
    {categories.categories.data.map(function(category) {
      return (
        <button
          name={category.name}
          className="style-link"
          key={category.id}
          onClick={e => setStyle(e.target.name)}>
          <span className="hide-content">Display </span>
          {category.name}
          <span className="hide-content"> styles</span>
        </button>
      );
    })}
  </div>
);

const mapStateToProps = ({ categories }) => ({
  categories
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setStyle
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StylesMenu);
