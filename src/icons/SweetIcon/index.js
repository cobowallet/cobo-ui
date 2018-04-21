import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';

function SweetIcon({ style, showRedSweet }) {
  return (
    <Image
      style={style}
      source={showRedSweet ? require('./img/sweet-red.png') : require('./img/sweet.png')}
    />
  );
}

SweetIcon.propTypes = {
  showRedSweet: PropTypes.bool,
};

SweetIcon.defaultProps = {
  showRedSweet: false,
};

export default SweetIcon;
