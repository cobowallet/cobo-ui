import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';

function ArrowDown({ active }) {
  return (
    <Image
      source={active ? require('./img/arrow-down.png') : require('./img/arrow-down-light.png')}
    />
  );
}

ArrowDown.propTypes = {
  active: PropTypes.bool,
};

ArrowDown.defaultProps = {
  active: false,
};

export default ArrowDown;
