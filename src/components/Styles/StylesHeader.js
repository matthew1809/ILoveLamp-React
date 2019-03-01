import React from 'react';
import { connect } from 'react-redux';

import Header from '../global/Header';

import Modern from '../../assets/img/modern.png';
import Silver from '../../assets/img/silver.png';
import Bright from '../../assets/img/bright.png';
import Unique from '../../assets/img/unique.png';

const StylesHeader = ({ style, header }) => {
  let HeaderImg = null;

  switch (header) {
    case 'Modern':
      HeaderImg = Modern;
      break;
    case 'Silver':
      HeaderImg = Silver;
      break;
    case 'Bright':
      HeaderImg = Bright;
      break;
    case 'Unique':
      HeaderImg = Unique;
      break;
    default:
      HeaderImg = null;
  }

  return (
    <div className="light">
      <Header />
      <header
        className="medium-header light push"
        style={{
          backgroundImage: `url(${HeaderImg})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundOrigin: 'border-box',
          backgroundAttachment: 'scroll'
        }}>
        <div className="header-container light">
          <div className="content">
            <h1>
              {style}
              <span className="hide-content"> styles</span>
            </h1>
          </div>
        </div>
      </header>
    </div>
  );
};

const mapStateToProps = ({ styles: { style, header } }) => ({
  style,
  header
});

export default connect(mapStateToProps)(StylesHeader);
